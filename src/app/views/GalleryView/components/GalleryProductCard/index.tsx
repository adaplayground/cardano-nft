/**
 *
 * GalleryProductCard
 *
 */
import React, { memo } from 'react';
import { ImageMetaInfoType } from 'types';
import { Img } from 'app/components/Img';
import { Button } from 'react-bootstrap';

import { InlineIcon } from '@iconify/react';
import { useSolPrice } from 'metaplex/contexts/coingecko';

interface Props {
  meta: ImageMetaInfoType;
  buyProduct: (meta: ImageMetaInfoType) => void;
  price: number;
}

export const GalleryProductCard = memo(({ meta, buyProduct, price }: Props) => {
  const solPrice = useSolPrice();
  const total = parseFloat((solPrice * price).toString()).toFixed(2);
  let imageUrl = meta.image;
  if (meta.type !== 'gif' && meta.hasThumbnail) {
    imageUrl = `https://firebasestorage.googleapis.com/v0/b/solana-nft-io-thumbnails/o/${meta.assetId}_400x400.jpeg?alt=media`;
  }

  const onBuyProduct = () => {
    buyProduct(meta);
  };

  return (
    <div className="product " data-aos="zoom-in" data-aos-delay="0">
      <div className="product-image mb-0">
        <Img
          className="img-fluid bg-white hover-scale"
          src={imageUrl}
          alt={meta.name}
          width={400}
          height={400}
          onError={e => {
            // @ts-ignore
            e.target.onerror = null;
            // @ts-ignore
            e.target.src = meta.image;
          }}
        />
      </div>
      <div className="product-hover-overlay d-flex justify-content-end">
        <div className="text-dark text-sm d-flex align-items-center">
          <Button
            className="d-none d-sm-inline mx-2"
            onClick={onBuyProduct}
            variant={'primary'}
          >
            Buy
          </Button>
        </div>
      </div>
      <div className="position-relative ">
        <h6 className="text-base my-1 overflow-hidden">
          <div className="text-primary text-nowrap ">{meta.name}</div>
        </h6>
        <span className="text-primary text-md" style={{ cursor: 'pointer' }}>
          <InlineIcon icon={'mdi:cart-variant'} color={'green'} />{' '}
        </span>
        <span className="text-gray-600 text-sm">{price} SOL </span>
        <span className="text-gray-500 text-sm">(US ${total}) </span>
      </div>
    </div>
  );
});
