/**
 *
 * HomeSlides
 *
 */
import React, { memo } from 'react';
import { Pagination, Swiper } from 'swiper/js/swiper.esm';
import ReactIdSwiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { SlideCard } from 'app/views/MarketView/components/SlideCard';
import { Col, Row } from 'react-bootstrap';

interface Props {}

export const HomeSlides = memo((props: Props) => {
  const params = {
    Swiper,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: { delay: 15000 },
    wrapperClass: 'swiper-wrapper',
  };

  return (
    <ReactIdSwiper {...params}>
      <div>
        <Row className={'align-items-center'} data-swiper-parallax="-500">
          <Col sm={12} className="text-left text-sm-center">
            <img
              className="img-fluid home-slider-image p-2"
              src={'/img/candymachine.png'}
              alt=""
              data-swiper-parallax="-200"
            />
          </Col>
        </Row>
      </div>
    </ReactIdSwiper>
  );
});
