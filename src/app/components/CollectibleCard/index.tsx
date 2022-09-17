/**
 *
 * CollectibleCard
 *
 */
import * as React from 'react';
import { MetaDataType } from 'types';
import { Button } from 'react-bootstrap';
import { Img } from 'app/components/Img';
import { InlineIcon } from '@iconify/react';

interface Props {
  meta: MetaDataType;
  viewImage: (meta: MetaDataType) => void;
}

export function CollectibleCard({ meta, viewImage }: Props) {
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
            className="d-none d-sm-inline"
            onClick={() => viewImage(meta)}
          >
            View
          </Button>
        </div>
      </div>
      <div className="position-relative d-flex justify-content-between p-2">
        <h5 className="text-base mb-1">
          <div className="text-dark">
            {meta.authenticated ? (
              <InlineIcon icon={'mdi:certificate'} color={'orange'} />
            ) : null}
            {meta.name}
          </div>
        </h5>
        <span className="text-secondary text-uppercase text-sm">
          {meta.properties?.category}
        </span>
      </div>
    </div>
  );
}
