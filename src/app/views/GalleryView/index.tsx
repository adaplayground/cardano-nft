/**
 *
 * GalleryView
 *
 */
import React, { memo, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Pagination,
  Row,
  Spinner,
} from 'react-bootstrap';
//import { useGalleryViewSlice } from './slice';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
  getImageMetaInfos,
  getImageMetaSummaryInfo,
  saveDiyMint,
  searchImageMetaInfo,
  sendEmailNotification,
} from 'store/nftFireStore';
import { round } from 'lodash';
import {
  DiyMintInfoType,
  ImageMetaInfoType,
  MailNotificationType,
  MetaDataType,
} from 'types';
import { GalleryProductCard } from 'app/views/GalleryView/components/GalleryProductCard';
import { InlineIcon } from '@iconify/react';
import useLoader from 'contexts/loaderContext';
import useSolanaCluster from 'metaplex/contexts/solanaClusterContext';
import { GalleryProductDetailView } from 'app/views/GalleryView/components/GalleryProductDetailModal/Loadable';
import { useWallet } from '@solana/wallet-adapter-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBalance,
  selectMetaData,
} from 'app/views/WalletView/slice/selectors';
import { randomIntFromInterval, sanitiseString } from 'metaplex/utils/helpers';
import { treasurePublicKeys } from 'conf/treasures';
import { useConfetti } from 'app/components/Confetti';
import { mintOneNftWithImageLink } from 'metaplex/diy-mint';
import { getMintStatusMessage } from 'metaplex/candy-machine';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { notificationEmailAddress } from 'conf/firebase';
import { MessageBox } from 'app/components/MessageBox';
import { DebounceInput } from 'react-debounce-input';
import { useGalleryViewSlice } from 'app/views/GalleryView/slice';
import {
  selectCurrentPage,
  selectSearchText,
} from 'app/views/GalleryView/slice/selectors';

const pageSize = 100;

export const GalleryView = memo(props => {
  const { actions } = useGalleryViewSlice();
  const { solanaCluster } = useSolanaCluster();
  const currentSearchText = useSelector(selectSearchText);
  const currentPage = useSelector(selectCurrentPage);
  const [totalImageCount, setTotalImageCount] = React.useState<number>(0);
  const [pageIndex, setPageIndex] = React.useState<number>(currentPage);
  const [searchText, setSearchText] = React.useState<string>(currentSearchText);
  const [pageText, setPageText] = React.useState<string>('');
  const [maxPage, setMaxPage] = React.useState<number>(0);
  const [pageRange, setPageRange] = React.useState<Array<number>>([]);
  const [productList, setProductList] = React.useState<
    Array<ImageMetaInfoType>
  >([]);
  const { loading, setLoading } = useLoader();
  const [showDetailNft, setShowDetailNft] = React.useState(false);
  const [mintStatus, setMintStatus] = React.useState<string>('');
  const [selectedProductMeta, setSelectedProductMeta] =
    React.useState<ImageMetaInfoType | null>(null);
  const [selectedProductPrice, setSelectedProductPrice] =
    React.useState<number>(0);
  const wallet = useWallet();
  const history = useHistory();
  const balance = useSelector(selectBalance);
  const metaData = useSelector(selectMetaData);
  const [showStatus, setShowStatus] = useState(false);
  const [showModelDuplicate, setShowModelDuplicate] = React.useState(false);
  const confetti = useConfetti();
  const dispatch = useDispatch();
  const [showConfetti, setShowConfetti] = React.useState(false);
  // @ts-ignore
  React.useEffect(async () => {
    const imageMetaSummary = await getImageMetaSummaryInfo();
    if (imageMetaSummary) {
      setTotalImageCount(imageMetaSummary.count);
      const maxPage = round(imageMetaSummary.count / pageSize);
      setMaxPage(maxPage);
      const startPage =  Math.round(Math.random() * (maxPage-10));
      await onPageChange(startPage);
      setPageIndex(startPage);
      await fetchImageMetaPage(startPage);
    }
  }, []);

  React.useEffect(() => {
    if (currentPage > 2) {
      setPageRange([
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ]);
    } else {
      setPageRange([1, 2, 3, 4, 5]);
    }
  }, [totalImageCount, currentPage]);

  const onPageChange = async e => {
    const page = e;
    if (e > 0 && e <= maxPage) {
      setPageIndex(e);
      dispatch(actions.setCurrentPage(page));
      await fetchImageMetaPage(page);
    }
    if (page > 2) {
      setPageRange([page - 2, page - 1, page, page + 1, page + 2]);
    } else {
      setPageRange([1, 2, 3, 4, 5]);
    }
  };

  const fetchImageMetaPage = async (page: number) => {
    setLoading(true);
    const results = await getImageMetaInfos((page - 1) * pageSize, pageSize);
    setProductList(results);
    setLoading(false);
  };

  const clearSearch = async () => {
    setSearchText('');
    await fetchImageMetaPage(pageIndex);
  };

  const getPrice = (product: ImageMetaInfoType) => {
    if (solanaCluster === 'devnet') {
      return product.price / 1000000000;
    }
    return 0.01;
  };

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

  const onContinueToBuy = async () => {
    setShowModelDuplicate(false);
    setShowDetailNft(true);
  };
  const onCancelDuplicate = () => {
    setShowModelDuplicate(false);
  };

  const buyProduct = (meta: ImageMetaInfoType) => {
    setSelectedProductMeta(meta);
    // @ts-ignore
    setSelectedProductPrice(getPrice(meta));
    if (!meta.sha256 || !isImageExist(meta.sha256)) {
      setShowDetailNft(true);
    } else {
      setShowModelDuplicate(true);
    }
  };
  const confirmMint = async () => {
    setShowDetailNft(false);
    setShowConfetti(false);
    const sol = balance / LAMPORTS_PER_SOL;
    let cacheStorage = {};
    const index = randomIntFromInterval(1, 100);
    const walletTreasurerKeyPair =
      treasurePublicKeys[index % treasurePublicKeys.length];
    let mintData: DiyMintInfoType = {
      solanaCluster: solanaCluster,
      userPublicKey: wallet?.publicKey?.toBase58(),
      treasurerPublicKey: walletTreasurerKeyPair.toBase58(),
      success: true,
      cacheStorage,
      sha256: '',
    };
    try {
      if (!wallet || !wallet.wallet) {
        history.push('/wallet');
      } else if (sol < selectedProductPrice + 0.02) {
        setMintStatus(
          `Not enough fund to buy ,your balance is ${sol} SOL,estimated total cost is ${parseFloat(
            (selectedProductPrice + 0.02).toString(),
          ).toFixed(5)} SOL`,
        );
        setShowStatus(true);
      } else {
        setMintStatus('Mint started');
        if (selectedProductMeta) {
          setLoading(true);
          setShowStatus(true);
          const metaData = {
            name: selectedProductMeta.name,
            symbol: 'SolanaNFT',
            image: 'image.png',
            properties: {
              files: [
                {
                  uri: 'image.png',
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
            // @ts-ignore
            description: sanitiseString(selectedProductMeta.description),
            seller_fee_basis_points: 500,
            attributes: [],
          };

          selectedProductMeta.attributes?.forEach(attr =>
            // @ts-ignore
            metaData.attributes.push(attr),
          );
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
            value: selectedProductMeta.sha256,
          });
          const result = await mintOneNftWithImageLink(
            selectedProductMeta.image,
            // @ts-ignore
            metaData,
            // @ts-ignore
            wallet as WebWalletSigner,
            solanaCluster,
            `${selectedProductPrice}`,
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
            const message = `${wallet.publicKey?.toBase58()} bought nft from gallery ${
              selectedProductMeta.assetId
            } successfully`;

            const mailNotification: MailNotificationType = {
              subject: message,
              text: JSON.stringify(selectedProductMeta, null, 2),
            };
            await sendEmailNotification(
              notificationEmailAddress,
              mailNotification,
            );
            setMintStatus(
              'Successfully mint your token, please check collectibles in\n' +
                '                  your wallet.',
            );
          } else {
            setLoading(false);
            mintData.success = false;
            setMintStatus('Failed to mint the token,please try again later');
            const message = `${wallet.publicKey?.toBase58()} failed to buy nft from gallery ${
              selectedProductMeta.assetId
            }`;

            const mailNotification: MailNotificationType = {
              subject: message,
              text: JSON.stringify(selectedProductMeta, null, 2),
            };
            await sendEmailNotification(
              notificationEmailAddress,
              mailNotification,
            );
          }
        }
        await saveDiyMint(mintData);
      }
    } catch (e) {
      setLoading(false);
      setMintStatus('Failed to mint the token,please try again later');
    } finally {
      setLoading(false);
    }
  };
  const cancelMint = () => {
    setShowDetailNft(false);
  };

  const onGotoPage = async () => {
    try {
      const newPage = parseInt(pageText);
      await onPageChange(newPage);
    } catch {
      //ignore
    }
  };

  // @ts-ignore
  React.useEffect(async () => {
    if (searchText !== '' && !loading) {
      setLoading(true);
      const results = await searchImageMetaInfo(searchText, pageSize);
      setProductList(results);
      dispatch(actions.setSearchText(searchText));
      setLoading(false);
    }
  }, [searchText]);

  return (
    <Container className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <Row>
            <Col sm={4} className={'d-flex justify-content-start'}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <InlineIcon icon={'mdi:search'} />
                </InputGroup.Text>
                <DebounceInput
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  minLength={2}
                  debounceTimeout={2000}
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  onClick={clearSearch}
                >
                  <InlineIcon icon={'mdi:clear'} />
                </Button>
              </InputGroup>
            </Col>
            <Col sm={8} className={'d-flex justify-content-end'}>
              {searchText === '' ? (
                <>
                  <Pagination>
                    <Pagination.First onClick={() => onPageChange(1)} />
                    <Pagination.Prev
                      onClick={() => onPageChange(pageIndex - 1)}
                    />

                    {pageRange.map(p => (
                      <Pagination.Item
                        key={p}
                        onClick={() => onPageChange(p)}
                        active={p === pageIndex}
                        disabled={p > maxPage}
                      >
                        {p}
                      </Pagination.Item>
                    ))}

                    <Pagination.Next
                      onClick={() => onPageChange(pageIndex + 1)}
                    />
                    <Pagination.Last onClick={() => onPageChange(maxPage)} />
                  </Pagination>
                  <InputGroup
                    className="mb-3 d-sm-none d-md-none d-lg-inline-flex"
                    style={{ width: '200px' }}
                  >
                    <Form.Control
                      placeholder="Page"
                      aria-label="page"
                      aria-describedby="basic-addon2"
                      value={pageText}
                      type="number"
                      step={1}
                      min={1}
                      onChange={e => setPageText(e.target.value)}
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={onGotoPage}
                    >
                      Go
                    </Button>
                  </InputGroup>
                </>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="pb-5"
        style={{
          minHeight: 'calc(100vh - 285px)',
        }}
      >
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1000: 4 }}
          >
            <Masonry className="row">
              {productList.map((product, index) => {
                const price = getPrice(product);
                return (
                  <Col key={product.imageIndex} className="item">
                    <GalleryProductCard
                      meta={product}
                      buyProduct={buyProduct}
                      price={price}
                    />
                  </Col>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </section>
      <GalleryProductDetailView
        modalShow={showDetailNft}
        onCancel={cancelMint}
        onConfirm={confirmMint}
        mode={'buy'}
        okText={'Mint'}
        cancelText={'Cancel'}
        meta={selectedProductMeta}
        showConfetti={showConfetti}
        price={selectedProductPrice}
      />
      <Modal
        show={showStatus}
        // @ts-ignore
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={'d-flex align-items-center'}>
              <InlineIcon
                className="h2 mr-2 text-warning "
                icon={'mdi:timer'}
              />
              <div className={'px-2 text-uppercase'}>Mint NFT</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={'d-flex flex-row w-100'}>
            <div className={'d-flex justify-content-center'}>{mintStatus}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={loading}
            variant={'primary'}
            onClick={() => setShowStatus(false)}
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
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <MessageBox
        title={'Duplicates'}
        iconColor={'red'}
        message={
          "You've already had current image in your wallet, are you sure to continue?"
        }
        icon={'mdi:alert'}
        onOk={onContinueToBuy}
        modalShow={showModelDuplicate}
        onCancel={onCancelDuplicate}
      />
    </Container>
  );
});
