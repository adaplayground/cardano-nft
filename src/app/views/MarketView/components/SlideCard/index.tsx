/**
 *
 * SlideCard
 *
 */
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {
  info: string;
  imgSrc: string;
}

export function SlideCard(props: Props) {
  return (
    <Container fluid={true}>
      <Row className={'h-100 align-items-center'} data-swiper-parallax="-500">
        <Col md={8} className={'d-sm-none d-md-block  text-md-center'}>
          <h1 className={'text-dark opacity-75 rounded p-3'}>{props.info}</h1>
        </Col>
        <Col sm={12} md={4}>
          <img
            className="img-fluid home-slider-image p-2"
            src={props.imgSrc}
            alt=""
            data-swiper-parallax="-200"
          />
        </Col>
      </Row>
    </Container>
  );
}
