/**
 *
 * DiyView
 *
 */
import React, { memo, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Spinner,
  Toast,
} from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useWallet } from '@solana/wallet-adapter-react';
import { getMintStatusMessage } from 'metaplex/candy-machine';
import useSolanaCluster from 'metaplex/contexts/solanaClusterContext';
import { treasurePublicKeys } from 'conf/treasures';
import { WebWalletSigner } from 'metaplex/candy-machine/types';
import useLoader from 'contexts/loaderContext';
import { useConfetti } from 'app/components/Confetti';
import sha256 from 'crypto-js/sha256';
import { DiyMintInfoType, MetaDataType } from 'types';

import { mintOneNft } from 'metaplex/diy-mint';
import { saveDiyMint } from 'store/nftFireStore';
import { randomIntFromInterval, sanitiseString } from 'metaplex/utils/helpers';
import { useSelector } from 'react-redux';
import { selectMetaData } from 'app/views/WalletView/slice/selectors';
import { MessageBox } from 'app/components/MessageBox';
import { toBase64 } from 'metaplex/diy-mint/nft';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

interface Props {}

export const DiyView = memo((props: Props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: 'image/png', maxFiles: 1 });
  const wallet = useWallet();
  const { loading, setLoading } = useLoader();
  const [image, setImage] = React.useState(null);
  const [imageHash, setImageHash] = React.useState('');
  const [showModel, setShowModel] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [attr1, setAttr1] = React.useState('');
  const [attr2, setAttr2] = React.useState('');
  const [attr3, setAttr3] = React.useState('');
  const [attr4, setAttr4] = React.useState('');
  const [attrName1, setAttrName1] = React.useState('Attr1');
  const [attrName2, setAttrName2] = React.useState('Attr2');
  const [attrName3, setAttrName3] = React.useState('Attr3');
  const [attrName4, setAttrName4] = React.useState('Attr4');
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [mintStatus, setMintStatus] = React.useState<string>('');
  const history = useHistory();
  const metaData = useSelector(selectMetaData);
  const confetti = useConfetti();
  const { solanaCluster } = useSolanaCluster();
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  const isImageExist = (fileHash: string): boolean => {
    if (metaData) {
      for (const [, value] of Object.entries(metaData)) {
        if ('attributes' in value) {
          const meta = value as MetaDataType;
          if (meta) {
            // @ts-ignore
            for (let i = 0; i < meta.attributes?.length; i++) {
              if (meta.attributes) {
                const attr = meta.attributes[i];
                if (attr.trait_type === 'SHA256') {
                  if (attr.value === fileHash) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  };

  React.useEffect(() => {
    const imageFile = acceptedFiles[0];
    if (imageFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.addEventListener('load', function () {
        // @ts-ignore
        setImage(this.result);
        setName(imageFile.name.replace('.png', ''));
      });
    }
  }, [acceptedFiles]);

  async function confirmMint(fileHash: string, imageFile: any) {
    const index = randomIntFromInterval(1, 100);
    const walletTreasurerKeyPair =
      treasurePublicKeys[index % treasurePublicKeys.length];

    if (!wallet || !wallet.wallet) {
      history.push('/wallet');
    } else {
      let cacheStorage = {};
      let mintData: DiyMintInfoType = {
        solanaCluster: solanaCluster,
        userPublicKey: wallet.publicKey?.toBase58(),
        treasurerPublicKey: walletTreasurerKeyPair.toBase58(),
        success: true,
        cacheStorage,
        sha256: fileHash,
      };
      try {
        setLoading(true);
        const metaData = {
          name: sanitiseString(name).substring(0, 25),
          symbol: '',
          image: imageFile.name,
          properties: {
            files: [
              {
                uri: imageFile.name,
                type: 'image/png',
              },
            ],
            category: 'image',
            creators: [
              {
                address: mintData.userPublicKey,
                share: 100,
              },
            ],
          },
          description: sanitiseString(description),
          seller_fee_basis_points: 500,
          attributes: [],
        };

        if (attr1) {
          metaData.attributes.push({
            // @ts-ignore
            trait_type: attrName1 || 'attr1',
            // @ts-ignore
            value: sanitiseString(attr1),
          });
        }

        if (attr2) {
          metaData.attributes.push({
            // @ts-ignore
            trait_type: attrName2 || 'attr2',
            // @ts-ignore
            value: sanitiseString(attr2),
          });
        }
        if (attr3) {
          metaData.attributes.push({
            // @ts-ignore
            trait_type: attrName3 || 'attr3',
            // @ts-ignore
            value: sanitiseString(attr3),
          });
        }
        if (attr4) {
          metaData.attributes.push({
            // @ts-ignore
            trait_type: attrName4 || 'attr4',
            // @ts-ignore
            value: sanitiseString(attr4),
          });
        }

        metaData.attributes.push({
          // @ts-ignore
          trait_type: 'Mint date',
          // @ts-ignore
          value: new Date().toLocaleDateString(),
        });

        metaData.attributes.push({
          // @ts-ignore
          trait_type: 'SHA256',
          // @ts-ignore
          value: fileHash,
        });

        mintData.metaData = metaData;
        const result = await mintOneNft(
          imageFile,
          // @ts-ignore
          metaData,
          // @ts-ignore
          wallet as WebWalletSigner,
          solanaCluster,
          '0.01',
          status => {
            setMintStatus(getMintStatusMessage(status)!);
          },
          walletTreasurerKeyPair,
          cacheStorage,
        );
        if (result) {
          const { metadataAccount, arweaveLink } = result;
          mintData.metaAccount = metadataAccount;
          mintData.arweaveLink = arweaveLink;
          mintData.success = true;
        }
        setLoading(false);
        if (mintData.arweaveLink && mintData.arweaveLink.length > 0) {
          confetti.dropConfetti();
          setShowToast(true);
        } else {
          setLoading(false);
          setShowErrorToast(true);
        }
      } catch {
        setLoading(false);
        mintData.success = false;
        mintData.metaAccount = '';
        mintData.arweaveLink = '';
        setShowErrorToast(true);
      }

      await saveDiyMint(mintData);
    }
  }

  const onMint = async () => {
    const imageFile = acceptedFiles[0];
    const image = await toBase64(imageFile);
    // @ts-ignore
    const imageBase64 = image.replace('data:image/png;base64,', '');
    let fileHash = sha256(imageBase64).toString();
    setImageHash(fileHash);
    setShowToast(false);
    setShowErrorToast(false);

    if (!isImageExist(fileHash)) {
      await confirmMint(fileHash, imageFile);
    } else {
      setShowModel(true);
    }
  };

  const onContinue = async () => {
    setShowModel(false);
    const imageFile = acceptedFiles[0];
    let fileHash = imageHash;
    await confirmMint(fileHash, imageFile);
  };
  const onCancel = () => {
    setShowModel(false);
  };

  return (
    <div className={'my-2'}>
      <section className="hero ">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">DIY Your NFT With Image</h1>
          </div>
        </Container>
      </section>
      <section
        style={{
          minHeight: 'calc(100vh - 280px)',
        }}
      >
        <Container>
          <Row>
            <Col md={'10'} className="text-center mx-auto">
              <div
                {...getRootProps({
                  // @ts-ignore
                  style,
                })}
              >
                <input {...getInputProps()} />
                <p>
                  Drag 'n' drop one PNG image here, or click to select the file
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={'10'} className="mx-auto my-3">
              <div className={'d-flex align-items-center'}>
                <div className={'d-block mx-auto border-1'}>
                  <img
                    height={400}
                    width={400}
                    // @ts-ignore
                    src={image}
                    className={'bg-white'}
                  />
                </div>
                <div className={'d-flex flex-column w-100 px-2'}>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Name"
                      disabled
                      value="Name"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Name"
                      aria-describedby="inputGroup-name"
                      value={name}
                      style={{ flex: 20 }}
                      onChange={e => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Description"
                      disabled
                      value="Description"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Description"
                      aria-describedby="inputGroup-desc"
                      value={description}
                      style={{ flex: 20 }}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Attribute 1"
                      value={attrName1}
                      onChange={e => setAttrName1(e.target.value)}
                      placeholder="attribute name"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Attribute 1"
                      aria-describedby="inputGroup-attr-1"
                      value={attr1}
                      onChange={e => setAttr1(e.target.value)}
                      style={{ flex: 20 }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Attribute 2"
                      value={attrName2}
                      onChange={e => setAttrName2(e.target.value)}
                      placeholder="attribute name"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Attribute 2"
                      aria-describedby="inputGroup-attr-2"
                      value={attr2}
                      onChange={e => setAttr2(e.target.value)}
                      style={{ flex: 20 }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Attribute 3"
                      value={attrName3}
                      onChange={e => setAttrName3(e.target.value)}
                      placeholder="attribute name"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Attribute 3"
                      aria-describedby="inputGroup-attr-1"
                      value={attr3}
                      onChange={e => setAttr3(e.target.value)}
                      style={{ flex: 20 }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 d-flex">
                    <FormControl
                      aria-label="Attribute 4"
                      value={attrName4}
                      onChange={e => setAttrName4(e.target.value)}
                      placeholder="attribute name"
                      style={{ width: '110px' }}
                    />
                    <FormControl
                      aria-label="Attribute 4"
                      aria-describedby="inputGroup-attr-1"
                      value={attr4}
                      onChange={e => setAttr4(e.target.value)}
                      style={{ flex: 20 }}
                    />
                  </InputGroup>
                  <MessageBox
                    title={'Duplicates'}
                    iconColor={'red'}
                    message={
                      "You've already had current image in your wallet, are you sure to continue?"
                    }
                    icon={'mdi:alert'}
                    onOk={onContinue}
                    modalShow={showModel}
                    onCancel={onCancel}
                  />
                  <div className={'d-flex flex-row w-100'}>
                    <Button
                      disabled={!image || loading}
                      variant={'success'}
                      onClick={onMint}
                    >
                      {loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : null}
                      Mint
                    </Button>
                    {loading ? (
                      <div className={'d-flex p-2 text-info '}>
                        {mintStatus}
                      </div>
                    ) : null}
                    <div className={'d-flex justify-content-center'}>
                      <Toast
                        onClose={() => setShowToast(false)}
                        show={showToast}
                        delay={3000}
                        autohide
                        bg={'success'}
                        className={'text-white'}
                      >
                        <Toast.Body>
                          Successfully mint your token, please check
                          collectibles in your wallet.
                        </Toast.Body>
                      </Toast>
                      <Toast
                        onClose={() => setShowErrorToast(false)}
                        show={showErrorToast}
                        delay={3000}
                        autohide
                        bg={'danger'}
                        className={'text-white'}
                      >
                        <Toast.Body>
                          Failed to mint the token,please try again later
                        </Toast.Body>
                      </Toast>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
});
