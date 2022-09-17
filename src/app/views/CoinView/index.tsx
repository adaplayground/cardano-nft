/**
 *
 * CoinView
 *
 */
import React, { memo, useMemo, useState } from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Toast,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useWallet } from '@solana/wallet-adapter-react';
import { useHistory } from 'react-router-dom';
import {
  getTwitterAirdropUsers,
  setTwitterAirdropUsers,
} from 'store/nftFireStore';
import { TwitterFollower } from 'types';

interface Props {}

export const CoinView = memo((props: Props) => {
  const [name, setName] = React.useState('');
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [airdropUsers, setAirdropUsers] = useState<Array<TwitterFollower>>([]);
  const history = useHistory();
  const { publicKey, wallet } = useWallet();

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  const content = useMemo(() => {
    if (!wallet || !base58)
      return 'Please connect your wallet for the coin airdrop';
    return 'Wallet Address  : ' + base58.slice(0, 8) + '..' + base58.slice(-8);
  }, [wallet, base58]);

  const gotoCoin = () => {
    let tokenUrl = `https://solscan.io/token/7HrUC7ucM7hr3QPJNhadXhuFtQhpY1sMppNJj1N9x1FY`;
    window.open(tokenUrl);
  };

  // @ts-ignore
  React.useEffect(async () => {
    const existingFollowers = ((await getTwitterAirdropUsers()) ||
      []) as Array<TwitterFollower>;
    setAirdropUsers(existingFollowers);
  }, []);

  const requestAirdrop = async () => {
    if (!wallet) {
      history.push('/wallet');
    } else {
      if (name.length === 0) {
        setShowToast(false);
        setShowErrorToast(true);
      } else {
        try {
          const existingUser = airdropUsers.find(
            u => u.twitterUser.username === name,
          );
          if (!existingUser) {
            const newFollowers: Array<TwitterFollower> = [];
            airdropUsers.forEach(u => newFollowers.push(u));
            newFollowers.push({
              userPublicKey: base58,
              transferred: false,
              registered: true,
              twitterUser: {
                username: name,
              },
            });
            await setTwitterAirdropUsers(newFollowers);
            setAirdropUsers(newFollowers);
            setShowToast(true);
            setShowErrorToast(false);
          } else {
            setShowToast(false);
            setShowErrorToast(true);
          }

          setName('');
        } catch {
          setShowToast(false);
          setShowErrorToast(true);
        }
      }
    }
  };

  return (
    <div className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">Koala Coin</h1>
          </div>
        </Container>
      </section>

      <section
        style={{
          minHeight: 'calc(100vh - 295px)',
        }}
      >
        <Container>
          <Row>
            <Col className={'m-5 p-3 d-flex justify-content-center'}>
              <div title={'Click to view Koala coin on Solana Blockchain'}>
                <Image
                  src="/img/koala.png"
                  sizes={''}
                  roundedCircle
                  onClick={gotoCoin}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Col>
            <Col sm={12}>
              <div className={'d-flex justify-content-center p-2 h5'}>
                {content}
              </div>
            </Col>
            <Col sm={12}>
              <InputGroup className="mb-3 d-flex">
                <FormControl
                  aria-label="Name"
                  disabled
                  value="Twitter user name"
                  style={{ width: '150px' }}
                />
                <FormControl
                  aria-label="Name"
                  aria-describedby="inputGroup-name"
                  value={name}
                  style={{ flex: 15 }}
                  onChange={e => setName(e.target.value)}
                />
                <Button variant="outline-success" onClick={requestAirdrop}>
                  Request Airdrop
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <div className={'d-flex justify-content-center'}>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={8000}
            autohide
            bg={'success'}
            className={'text-white'}
            style={{ width: '600px' }}
          >
            <Toast.Body>
              Request confirmed,you will get 100,000 Koala coins before 2022 new year's day if
              it's valid request.
            </Toast.Body>
          </Toast>
          <Toast
            onClose={() => setShowErrorToast(false)}
            show={showErrorToast}
            delay={8000}
            autohide
            bg={'danger'}
            className={'text-white'}
            style={{ width: '800px' }}
          >
            <Toast.Body>
              Failed to honor your request,please try again later. Either your
              wallet has been airdropped 100,000 koala coin already or your
              twitter user name is invalid or you haven't followed
              solplayground.
            </Toast.Body>
          </Toast>
        </div>

        <Container>
          <div className="hero-content">
            <h3 className="m-5 text-warning">{`Airdrop 100000 $KOALA Coins, 100,000 coins per address for valid Twitter followers, limited time only ,150 of the followers will get 100,000 $KOALA Coin on 2022 New Year's day`}</h3>
          </div>
        </Container>
      </section>
    </div>
  );
});
