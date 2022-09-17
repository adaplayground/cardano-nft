/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <footer className="footer bg-dark">
      <div className="py-4 font-weight-light text-muted bg-light">
        <Container>
          <Row className="align-items-center text-sm text-gray-500">
            <Col lg="4" className="text-center text-lg-left">
              <p className="mb-lg-0">
                &copy; {new Date().getFullYear()} Solana NFT Playground. All
                rights reserved.
              </p>
            </Col>
            {/*<Col lg="8">*/}
            {/*  <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-right">*/}
            {/*    <li className="list-inline-item">*/}
            {/*      {' '}*/}
            {/*      <Link className="text-reset" to="/">*/}
            {/*        Terms &amp; Conditions{' '}*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li className="list-inline-item">*/}
            {/*      {' '}*/}
            {/*      <Link className="text-reset" to="/">*/}
            {/*        Privacy &amp; cookies{' '}*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </div>
    </footer>
  );
});
