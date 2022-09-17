/**
 *
 * WalletBalance
 *
 */
import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

interface Props {
  solPrice: number;
  balance: number;
  isDevnet: boolean;
  loading: boolean;
  airDrop: () => void;
}

export function WalletBalance({
  solPrice,
  balance,
  isDevnet,
  airDrop,
  loading,
}: Props) {
  const sol = parseFloat((balance / LAMPORTS_PER_SOL).toString()).toFixed(5);
  const total = parseFloat(
    ((solPrice * balance) / LAMPORTS_PER_SOL).toString(),
  ).toFixed(2);
  return (
    <Container className={'bg-grey-100'}>
      <Row>
        <Col lg="10" xl="8" className="text-center mx-auto">
          <h2 className="display-4 m-3">Balance</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="10" xl="8" className="text-center mx-auto text-success">
          <h2 className="mb-3">{`${sol} SOL = ${total} US$ `}</h2>
        </Col>
      </Row>
      {isDevnet ? (
        <Row>
          <Col lg="10" xl="8" className="text-center mx-auto ">
            <Button
              onClick={airDrop}
              variant={'outline-primary'}
              className="mb-3"
              disabled={loading}
            >
              Airdrop 1 SOL
            </Button>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}
