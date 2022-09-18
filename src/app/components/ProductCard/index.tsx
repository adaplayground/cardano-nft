/**
 *
 * ProductCard
 *
 */
import React, { memo } from 'react';
import { MetaDataType } from 'types';
import { Img } from 'app/components/Img';
import { Button } from 'react-bootstrap';

import { InlineIcon } from '@iconify/react';


interface Props {
  meta: MetaDataType;
  buyProduct: (meta: MetaDataType) => void;
  price: number;
  available: boolean;
}

export const ProductCard = memo(
  ({ meta, buyProduct, price, available }: Props) => {
    const solPrice = 0.1;
    const total = parseFloat((solPrice * price).toString()).toFixed(2);

    const onBuyProduct = () => {
      buyProduct(meta);
    };

    return (
      <div className="product " data-aos="zoom-in" data-aos-delay="0">
        <div className="product-image mb-0">
          <Img
            className="img-fluid bg-white hover-scale"
            src={meta.image}
            alt={meta.name}
            width={400}
            onError={e => {
              // @ts-ignore
              e.target.onerror = null;
              // @ts-ignore
              e.target.src = './not_found.png';
            }}
          />
        </div>
        <div className="product-hover-overlay d-flex justify-content-end">
          <div className="text-dark text-sm d-flex align-items-center">
            <Button
              className="d-none d-sm-inline mx-2"
              onClick={onBuyProduct}
              disabled={!available}
              variant={available ? 'primary' : 'warning'}
            >
              {available ? 'Buy' : 'Sold'}
            </Button>
          </div>
        </div>
        <div className="position-relative ">
          <h5 className="text-base my-1 overflow-hidden">
            <div className="text-dark text-nowrap ">{meta.name}</div>
          </h5>
          <span className="text-primary text-md" style={{ cursor: 'pointer' }}>
            <InlineIcon
              icon={'mdi:cart-variant'}
              color={available ? 'green' : 'grey'}
            />{' '}
          </span>
          <span className="text-gray-600 text-sm">{price} SOL </span>
          <span className="text-gray-500 text-sm">(US ${total}) </span>
          <span className="text-danger text-sm text-uppercase ">
            {available ? '' : 'Sold'}{' '}
          </span>
        </div>
      </div>
    );
  },
);
