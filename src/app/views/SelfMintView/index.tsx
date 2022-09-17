/**
 *
 * SelfMintView
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
import { DiyMintInfoType, MetaAttributeType, MetaDataType } from 'types';

import { mintOneNft } from 'metaplex/diy-mint';
import { saveDiyMint } from 'store/nftFireStore';
import { randomIntFromInterval } from 'metaplex/utils/helpers';
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

export const SelfMintView = memo((props: Props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ maxFiles: 2 });
  const wallet = useWallet();
  const { loading, setLoading } = useLoader();
  const [image, setImage] = React.useState(null);
  const [metaContent, setMetaContent] = React.useState('');
  const [attributes, setAttributes] = React.useState<Array<MetaAttributeType>>(
    [],
  );
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imageHash, setImageHash] = React.useState('');
  const [showModel, setShowModel] = React.useState(false);
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
                    console.log(meta);
                    console.log(fileHash);
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
    if (metaContent) {
      const meta = JSON.parse(metaContent);
      const attrs = [];
      if (meta && meta.attributes) {
        setName(meta.name);
        setDescription(meta.description);
        meta.attributes.forEach(a => {
          if (a.trait_type.toLowerCase() !== 'sha256') {
            // @ts-ignore
            attrs.push(a);
          }
        });
      }
      setAttributes(attrs);
    }
  }, [metaContent]);

  // @ts-ignore
  React.useEffect(async () => {
    const imageFiles = acceptedFiles;
    if (acceptedFiles.length === 2) {
      console.log(acceptedFiles);
      const imageFile = imageFiles.find(f => f.name.endsWith('png'));
      const metaFile = imageFiles.find(f => f.name.endsWith('json'));
      let valid: boolean = true;
      if (imageFile && metaFile) {
        const imageName = imageFile.name.replace('.png', '');
        const metaName = metaFile.name.replace('.json', '');
        if (imageName === metaName) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(imageFile);
          fileReader.addEventListener('load', function () {
            // @ts-ignore
            setImage(this.result);
          });

          const metaFileContent = await metaFile.text();
          setMetaContent(metaFileContent);
        } else {
          valid = false;
          setImage(null);
          setMetaContent('');
          console.log(`file name is different ${imageName}:${metaName}`);
        }
      } else {
        valid = false;
        console.log(`file name is null`);
      }
      if (!valid) {
        setShowErrorToast(true);
      }
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
        const metaData = JSON.parse(metaContent);
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
    const imageFile = acceptedFiles.find(f => f.name.endsWith('png'));
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
      <section className="hero">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">DIY Your NFT With Image and Meta Files</h1>
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
                  Drag 'n' drop one PNG image and one Meta JSON file here, or
                  click to select the files
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={'10'} className="mx-auto my-3">
              <div className={'d-flex align-items-center '}>
                <div className={'d-block mx-auto border-1'}>
                  <img
                    width={400}
                    height={400}
                    // @ts-ignore
                    src={image}
                    className={'bg-white'}
                  />
                </div>
                <div
                  className={
                    'd-flex flex-column w-100 px-2 justify-content-end'
                  }
                >
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="inputGroup-name"
                      style={{ width: '110px' }}
                    >
                      Name
                    </InputGroup.Text>
                    <FormControl
                      className={'bg-white'}
                      aria-label="Name"
                      aria-describedby="inputGroup-name"
                      value={name}
                      disabled
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="inputGroup-desc"
                      style={{ width: '110px' }}
                    >
                      Description
                    </InputGroup.Text>
                    <FormControl
                      as={'textarea'}
                      rows={3}
                      className={'bg-white'}
                      aria-label="Description"
                      aria-describedby="inputGroup-desc"
                      value={description}
                      disabled
                    />
                  </InputGroup>
                  {attributes.map((a: MetaAttributeType, index) => (
                    <InputGroup className="mb-3" key={index}>
                      <InputGroup.Text
                        id="inputGroup-attr-1"
                        style={{ width: '110px' }}
                      >
                        {a.trait_type}
                      </InputGroup.Text>
                      <FormControl
                        aria-label="Attribute 1"
                        aria-describedby="inputGroup-attr-1"
                        value={a.value}
                        disabled
                        className={'bg-white'}
                      />
                    </InputGroup>
                  ))}
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
                      disabled={!image || loading || !metaContent}
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
