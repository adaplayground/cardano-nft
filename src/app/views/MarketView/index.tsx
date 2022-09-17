import React, { useState } from 'react';
import { Button, Container, Modal, Spinner } from 'react-bootstrap';
import {
  clearSummaryLock,
  getSummaryInfo,
  readCandyMachineInfo,
  saveBuyCandyMachine,
  sendEmailNotification,
  setSummaryInfo,
  setSummaryLock,
} from 'store/nftFireStore';
import useSolanaCluster from 'metaplex/contexts/solanaClusterContext';
import { appCategory, notificationEmailAddress } from 'conf/firebase';
import {
  BuyCandyMachineInfoType,
  CandyMachineSummaryInfoType,
  EnvironmentSummaryInfoType,
  MailNotificationType,
  MetaDataType,
} from 'types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCandyMachines,
  selectLoading,
} from 'app/views/MarketView/slice/selectors';
import useLoader from 'contexts/loaderContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMarketViewSlice } from 'app/views/MarketView/slice';
import { useWallet } from '@solana/wallet-adapter-react';
import { ProductList } from 'app/views/MarketView/components/ProductList';
import { NftDetailView } from 'app/views/NftDetailView/Loadable';
import {
  buyerBuyNftFromCandyMachine,
  getMintStatusMessage,
  MintStatus,
} from 'metaplex/candy-machine';
import logger from 'metaplex/utils/logger';
import { sleep } from 'cli/utils';
import { InlineIcon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { selectBalance } from 'app/views/WalletView/slice/selectors';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const pageSize = 24;

export function MarketView() {
  const { solanaCluster } = useSolanaCluster();
  const { actions } = useMarketViewSlice();
  const { publicKey, wallet } = useWallet();
  const walletSigner = useWallet();
  const history = useHistory();
  const balance = useSelector(selectBalance);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(false);
  const [selectedProductMeta, setSelectedProductMeta] =
    React.useState<MetaDataType | null>(null);
  const [selectedProductSummaryInfo, setSelectedProductSummaryInfo] =
    React.useState<CandyMachineSummaryInfoType | null>(null);
  const [showDetailNft, setShowDetailNft] = React.useState(false);
  const [imagePointer, setImagePointer] = React.useState(0);
  const isLoading = useSelector(selectLoading);
  const [summaryInfo, setLocalSummaryInfo] =
    React.useState<EnvironmentSummaryInfoType>({
      count: 0,
      solanaCluster,
      summaries: [],
    });
  const [showStatus, setShowStatus] = useState(false);
  const [mintStatus, setMintStatus] = React.useState<string>('');
  const dispatch = useDispatch();
  const { setLoading, loading } = useLoader();
  const candyMachines: Array<MetaDataType> = useSelector(selectCandyMachines);
  const category = appCategory;

  React.useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  // @ts-ignore
  React.useEffect(async () => {
    const existing = (await getSummaryInfo(solanaCluster, category)) || {
      count: 0,
      solanaCluster,
      summaries: [],
    };
    // @ts-ignore
    setLocalSummaryInfo(existing);
    if (existing.count === 0) {
      dispatch(actions.clearMetaData(''));
    }

    if (candyMachines.length >= existing.count) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
    const nextUpperBound = Math.min(imagePointer + pageSize, existing.count);
    for (let i = imagePointer; i < nextUpperBound; i++) {
      const url = existing.summaries[i].metaLink;
      if (url.length >= 0) {
        dispatch(actions.getMetaData(url));
      }
    }
    setImagePointer(nextUpperBound);
  }, [wallet, publicKey, solanaCluster]);

  const fetchMoreData = () => {
    if (candyMachines.length >= summaryInfo.count) {
      setHasMore(false);
    }
    const nextUpperBound = Math.min(imagePointer + pageSize, summaryInfo.count);
    for (let i = imagePointer; i < nextUpperBound; i++) {
      const url = summaryInfo.summaries[i].metaLink;
      if (url.length >= 0) {
        //const id = url.replace('https://arweave.net/', '');
        dispatch(actions.getMetaData(url));
      }
    }
    setImagePointer(nextUpperBound);
  };

  const getSummary = (
    meta: MetaDataType,
    summaryData: EnvironmentSummaryInfoType,
  ): CandyMachineSummaryInfoType | null => {
    const sha256Attr = meta.attributes!.find(p => p.trait_type === 'sha256');
    if (sha256Attr && sha256Attr.value) {
      const sha256 = sha256Attr.value;
      const summary = summaryData.summaries.find(s => s.sha256 === sha256);
      if (summary) {
        return summary;
      }
    }

    return null;
  };

  const updateSummary = (
    summaryData: EnvironmentSummaryInfoType,
    meta: MetaDataType,
  ) => {
    const newSummaryData = JSON.parse(JSON.stringify(summaryData));
    const sha256Attr = meta.attributes!.find(p => p.trait_type === 'sha256');
    if (sha256Attr && sha256Attr.value) {
      const sha256 = sha256Attr.value;
      const summary = newSummaryData.summaries.find(s => s.sha256 === sha256);
      if (summary) {
        summary.available = false;
      }
    }

    newSummaryData.summaries.sort((a, b) => b.available - a.available);
    return newSummaryData;
  };

  const buyProduct = (meta: MetaDataType) => {
    setSelectedProductMeta(meta);
    setSelectedProductSummaryInfo(getSummary(meta, summaryInfo));
    setShowDetailNft(true);
  };
  const confirmMint = async () => {
    setShowDetailNft(false);
    setShowConfetti(false);
    const sol = balance / LAMPORTS_PER_SOL;
    try {
      if (!walletSigner || !walletSigner.wallet) {
        history.push('/wallet');
      } else if (sol < selectedProductSummaryInfo!.price + 0.02) {
        setMintStatus(
          `Not enough fund to buy ,your balance is ${sol} SOL,estimated total cost is ${
            selectedProductSummaryInfo!.price + 0.02
          } SOL`,
        );
        setShowStatus(true);
      } else {
        setMintStatus('Mint started');
        if (selectedProductMeta && selectedProductSummaryInfo) {
          setLoading(true);
          setShowStatus(true);
          const documentId = selectedProductSummaryInfo.documentId;

          const existing = (await getSummaryInfo(solanaCluster, category)) || {
            count: 0,
            solanaCluster,
            summaries: [],
          };
          // @ts-ignore
          setLocalSummaryInfo(existing);
          // @ts-ignore
          const summary = getSummary(selectedProductMeta, existing);
          if (summary && summary.available) {
            const candyMachineInfo = await readCandyMachineInfo(documentId);

            if (candyMachineInfo) {
              let success = true;
              const cacheContent = await buyerBuyNftFromCandyMachine(
                walletSigner,
                solanaCluster,
                candyMachineInfo.data,
                status => {
                  setMintStatus(getMintStatusMessage(status)!);
                  if (status === MintStatus.Error) {
                    success = false;
                  }
                },
              );

              if (success) {
                // @ts-ignore
                const newSummary = updateSummary(existing, selectedProductMeta);
                let lock = await setSummaryLock(solanaCluster, category);

                while (!lock) {
                  logger.log(
                    'Trying to get write summary lock,sleep 2 seconds',
                  );
                  await sleep(2000);
                  lock = await setSummaryLock(solanaCluster, category);
                }
                await setSummaryInfo(solanaCluster, category, newSummary);
                setLocalSummaryInfo(newSummary);
              }
              const buyCandyMachineInfoType: BuyCandyMachineInfoType = {
                userPublicKey: publicKey?.toBase58(),
                treasurerPublicKey: candyMachineInfo.treasurePublicKey,
                arweaveLink: selectedProductSummaryInfo.metaLink,
                sha256: selectedProductSummaryInfo.sha256!,
                metaData: selectedProductMeta,
                price: selectedProductSummaryInfo.price,
                solanaCluster,
                category,
                success: success,
                cacheStorage: candyMachineInfo,
              };

              await saveBuyCandyMachine(buyCandyMachineInfoType);

              if (success) {
                setShowConfetti(true);
                const message = `${publicKey?.toBase58()} bought nft from candy machine ${
                  selectedProductSummaryInfo.metaLink
                } successfully`;
                logger.log(message);
                const mailNotification: MailNotificationType = {
                  subject: message,
                  text: JSON.stringify(buyCandyMachineInfoType, null, 2),
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
                const message = `${publicKey?.toBase58()} process nft from candy machine ${
                  selectedProductSummaryInfo.metaLink
                } failed`;
                logger.log(message);
                const mailNotification: MailNotificationType = {
                  subject: message,
                  text: JSON.stringify(buyCandyMachineInfoType, null, 2),
                };
                await sendEmailNotification(
                  notificationEmailAddress,
                  mailNotification,
                );
                setMintStatus(
                  'Failed to mint the token,please try again later',
                );
              }
            } else {
              setMintStatus('Failed to mint the token,please try again later');
            }
          } else {
            setMintStatus('Failed to mint the token,please try again later');
          }
        }
      }
    } finally {
      await clearSummaryLock(solanaCluster, category);
      setLoading(false);
    }
  };
  const cancelMint = () => {
    setShowDetailNft(false);
  };

  const viewMarblz = () => {
    window.open('https://marblz.web.app/market');
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 165px)',
      }}
    >
      <section className="hero ">
        <Container>
          <div className="hero-content">
            <h1 className="my-5">Mint with Metaplex Candy Machine</h1>
          </div>
          <div className="hero-content">
            <h3 className="my-2 text-secondary">{`
               The Candy Machine, or CM for short, is a Solana Program designed to reliably sell one NFT at a time.

               The Candy Machine program behaves like a real-world mechanical candy machine, where a person expects to put a coin into the machine and get one item out of it.
               The usual exceptions apply, for example and most significantly it won't take your coin if it's out of candy.`}</h3>
          </div>
        </Container>
      </section>
      {/*<Container fluid className={'my-5'}><HomeSlides /></Container>*/}

      {solanaCluster === 'devnet' ? (
        <InfiniteScroll
          dataLength={candyMachines.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className={'d-flex justify-content-center'}>
              <Spinner
                animation="grow"
                variant={'primary'}
                size="sm"
                key={'primary'}
              />
              <Spinner
                animation="grow"
                variant={'info'}
                size="sm"
                key={'info'}
              />
              <Spinner
                animation="grow"
                variant={'success'}
                size="sm"
                key={'success'}
              />
              <Spinner
                animation="grow"
                variant={'warning'}
                size="sm"
                key={'warning'}
              />
              <Spinner
                animation="grow"
                variant={'danger'}
                size="sm"
                key={'danger'}
              />
            </div>
          }
          endMessage={<></>}
        >
          <div>
            <ProductList
              productList={candyMachines}
              viewImage={buyProduct}
              summaryInfo={summaryInfo}
            />
          </div>
        </InfiniteScroll>
      ) : (
        <div>
          <section className="hero ">
            <Container>
              <div className="hero-content">
                <h1 className="mb-5">Mainnet</h1>
                <h1 className="mb-5">Please click the Marblz</h1>
                <Button onClick={viewMarblz} variant={'primary'}>
                  Marblz
                </Button>
              </div>
            </Container>
          </section>
        </div>
      )}
      <NftDetailView
        modalShow={showDetailNft}
        onCancel={cancelMint}
        onConfirm={confirmMint}
        mode={'buy'}
        okText={'Mint'}
        cancelText={'Cancel'}
        meta={selectedProductMeta}
        showConfetti={showConfetti}
        price={selectedProductSummaryInfo?.price}
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
    </div>
  );
}
