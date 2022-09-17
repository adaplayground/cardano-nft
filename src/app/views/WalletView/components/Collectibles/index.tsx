/**
 *
 * Collectibles
 *
 */
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MetaDataType } from 'types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { CollectibleCard } from 'app/components/CollectibleCard/Loadable';
interface Props {
  collectibles: Array<MetaDataType>;
  viewImage: (meta: MetaDataType) => void;
}

export const Collectibles = memo(({ collectibles, viewImage }: Props) => {
  return (
    <Container>
      <Row>
        <Col lg="10" xl="8" className="text-center mx-auto">
          <h2 className="display-4 m-3">Your Collectibles</h2>
        </Col>
      </Row>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1000: 4 }}
      >
        <Masonry className="row">
          {collectibles.map((product, index) => (
            <Col key={index} className="item">
              <CollectibleCard meta={product} viewImage={viewImage} />
            </Col>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
});
