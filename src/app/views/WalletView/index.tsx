/**
 *
 * WalletView
 *
 */
import React, { memo, useCallback, useMemo, useState } from 'react';

import { Button, Col, Container, Row, Toast } from 'react-bootstrap';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { useWalletModal } from '@solana/wallet-adapter-react-ui/lib/useWalletModal';

import useSolanaCluster from 'metaplex/contexts/solanaClusterContext';
import { InlineIcon } from '@iconify/react';

import { TokenAccountParser } from 'metaplex/common/utils/parsesrs';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { processSimpleMetaData } from 'metaplex/candy-machine/processMetaData';
import { useDispatch, useSelector } from 'react-redux';
import { useWalletViewSlice } from 'app/views/WalletView/slice';
import { ParsedAccount } from 'metaplex/common/types/account-types';
import useLoader from 'contexts/loaderContext';
import {
  selectBalance,
  selectCollectibles,
  selectLoading,
} from 'app/views/WalletView/slice/selectors';
import { WalletBalance } from 'app/views/WalletView/components/WalletBalance';

import { Collectibles } from 'app/views/WalletView/components/Collectibles/Loadable';
import { MetaDataType } from 'types';
import { getTokenList } from 'store/nftFireStore';
import { appCategory } from 'conf/firebase';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { programIds } from 'metaplex/common/utils';

import { useSolPrice } from 'metaplex/contexts/coingecko';
import { getMetadata, Metadata } from 'metaplex/common/types/metaData-types';

export const WalletView = memo(() => {
  const { publicKey, wallet, disconnect, connecting, connected } = useWallet();
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { solanaCluster } = useSolanaCluster();
  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const { connection } = useConnection();
  const { actions } = useWalletViewSlice();
  const dispatch = useDispatch();
  const { setLoading, loading } = useLoader();
  const isLoading = useSelector(selectLoading);
  const balance = useSelector(selectBalance);
  const collectibles = useSelector(selectCollectibles);
  const solPrice = useSolPrice();

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (!wallet || !base58) return null;
    return base58.slice(0, 8) + '..' + base58.slice(-8);
  }, [wallet, base58]);

  const connectionContent = useMemo(() => {
    if (connecting) return 'Connecting ...';
    if (connected) return 'Connected';
    if (wallet) return 'Connect';
    return '';
  }, [connecting, connected, wallet]);

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [base58]);

  React.useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  // @ts-ignore
  React.useEffect(async () => {
    try {
      if (wallet && publicKey && base58) {
        const tokens = await getTokenList(solanaCluster, appCategory);
        let authenticatedTokenList = [];
        if (tokens && tokens.mintAddresses) {
          authenticatedTokenList = tokens.mintAddresses;
        }
        dispatch(actions.setTokenList(authenticatedTokenList));
        dispatch(actions.setPublicKey(base58 as string));
        const balance = await connection.getBalance(
          // @ts-ignore
          publicKey,
        );
        dispatch(actions.setBalance(balance));
        const accounts = await connection.getTokenAccountsByOwner(publicKey, {
          programId: programIds().token,
        });

        const parsedAccountValue =
          await connection.getParsedTokenAccountsByOwner(publicKey, {
            programId: programIds().token,
          });
        const parsedAccounts = parsedAccountValue.value;
        const metaAddress: Array<PublicKey> = [];
        for (let i = 0; i < accounts.value.length; i++) {
          const info = accounts.value[i];
          const details = TokenAccountParser(
            info.pubkey.toBase58(),
            info.account,
          );
          const mintAddress = details?.info.mint.toBase58();
          let amount = 1;
          try {
            amount =
              parsedAccounts[i].account.data.parsed.info.tokenAmount.amount;
          } catch {}
          if (mintAddress && amount > 0) {
            let metaData = await getMetadata(mintAddress);
            metaAddress.push(new PublicKey(metaData));
          }
        }
        dispatch(actions.setMintPublicKeys(metaAddress.map(m => m.toBase58())));
        const metaAccounts = await connection.getMultipleAccountsInfo(
          metaAddress,
          'single',
        );
        const metaParsedAccounts: any = [];
        for (let i = 0; i < metaAccounts.length; i++) {
          const metAccount = metaAccounts[i];
          const publicKey = metaAddress[i].toBase58();

          const parsedAccount = await processSimpleMetaData(
            // @ts-ignore
            metAccount,
            publicKey,
          );
          metaParsedAccounts.push(parsedAccount as ParsedAccount<Metadata>);
        }

        for (let i = 0; i < metaParsedAccounts.length; i++) {
          const parsedAccount: ParsedAccount<Metadata> = metaParsedAccounts[
            i
          ] as ParsedAccount<Metadata>;
          if (parsedAccount) {
            const url = parsedAccount.info.data.uri;
            if (url.length >= 0) {
              dispatch(
                actions.addMintAddress({
                  key: url,
                  mint: parsedAccount.info.mint,
                }),
              );
              //const id = url.replace('https://arweave.net/', '');
              dispatch(actions.getMetaData(url));
            }
          }
        }
      }
    } catch (e) {
      // @ts-ignore
      setErrorMessage(`Error connecting to Solana network:${e.toString()}`);
      setShowErrorToast(true);
    }
  }, [wallet, publicKey, appCategory]);

  const selectButton = (
    <div className={'p-5'}>
      <Button
        variant={'outline-primary'}
        className={'p-3'}
        onClick={() => setVisible(true)}
      >
        Select Wallet
      </Button>
    </div>
  );

  const requestAirdrop = async () => {
    try {
      if (publicKey) {
        setLoading(true);
        setShowErrorToast(false);
        setShowToast(false);
        await connection.requestAirdrop(publicKey!, LAMPORTS_PER_SOL);

        await new Promise(r => setTimeout(r, 3000));
        setShowToast(true);
        const balance = await connection.getBalance(
          // @ts-ignore
          publicKey,
        );
        dispatch(actions.setBalance(balance));
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage('Failed to airdrop 1 SOL,please try again later');
      setShowErrorToast(true);
    }
  };

  const connectedWallet = (
    <div>
      <div
        title={base58}
        className={
          ' mb-2 text-success d-flex justify-content-center text-uppercase'
        }
      >
        <h5>{content}</h5>
      </div>

      <div className={' text-success d-flex justify-content-center'}>
        <Button variant={'outline-primary mx-2'} onClick={copyAddress}>
          <InlineIcon icon={'mdi:content-copy'} />
          {copied ? 'Copied' : 'Copy'}
        </Button>
        <Button variant={'outline-primary mx-2'} onClick={disconnect}>
          <InlineIcon icon={'mdi:wallet'} />
          Disconnect
        </Button>
      </div>
    </div>
  );

  const viewImage = (meta: MetaDataType) => {
    if (meta.mintAddress) {
      let tokenUrl = `https://solscan.io/token/${meta.mintAddress}`;
      if (solanaCluster === WalletAdapterNetwork.Devnet) {
        tokenUrl += '?cluster=devnet';
      }
      window.open(tokenUrl);
    }
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 165px)',
      }}
    >
      <Container>
        <Row>
          <Col lg="10" xl="8" className="text-center mx-auto">
            <h2 className="display-4 m-3 text-capitalize">Wallet</h2>
            <h6 className="m-3 text-capitalize text-muted">{solanaCluster}</h6>
          </Col>
        </Row>
        <Row>
          <Col className={'d-flex justify-content-center mb-3'}>
            {!wallet
              ? selectButton
              : !base58
              ? connectionContent
              : connectedWallet}
          </Col>
        </Row>
      </Container>
      {wallet ? (
        <>
          <WalletBalance
            solPrice={solPrice}
            balance={balance}
            loading={loading}
            isDevnet={solanaCluster === 'devnet'}
            airDrop={requestAirdrop}
          />
          <Row>
            <Col className={'d-flex justify-content-center'}>
              <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
                bg={'success'}
                className={'text-white'}
              >
                <Toast.Body>Successfully airdropped 1 SOL</Toast.Body>
              </Toast>
              <Toast
                onClose={() => setShowErrorToast(false)}
                show={showErrorToast}
                delay={3000}
                autohide
                bg={'danger'}
                className={'text-white'}
              >
                <Toast.Body>{errorMessage}</Toast.Body>
              </Toast>
            </Col>
          </Row>
          <Collectibles collectibles={collectibles} viewImage={viewImage} />
        </>
      ) : null}
    </div>
  );
});
