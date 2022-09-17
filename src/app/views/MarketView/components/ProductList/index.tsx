/**
 *
 * ProductList
 *
 */
import React, { memo } from 'react';
import {
  CandyMachineSummaryInfoType,
  EnvironmentSummaryInfoType,
  MetaDataType,
} from 'types';
import { Col, Container, Row } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ProductCard } from 'app/components/ProductCard';
import { marketOffers } from 'conf/marketOffers';
import ReactMarkdown from 'react-markdown';

interface Props {
  productList: Array<MetaDataType>;
  viewImage: (meta: MetaDataType) => void;
  summaryInfo: EnvironmentSummaryInfoType;
}

export const ProductList = memo(
  ({ productList, viewImage, summaryInfo }: Props) => {
    const available = summaryInfo.summaries.filter(
      (s: CandyMachineSummaryInfoType) => s.available,
    );
    const statistics = `    ${available.length} of ${summaryInfo.summaries.length} available`;

    const getPrice = (product): [number, boolean, string] => {
      if ('attributes' in product) {
        const sha256Attr = product['attributes'].find(
          p => p.trait_type === 'sha256',
        );
        if (sha256Attr && sha256Attr.value) {
          const sha256 = sha256Attr.value;
          const summary = summaryInfo.summaries.find(s => s.sha256 === sha256);
          if (summary) {
            return [summary.price, summary.available, summary.sha256!];
          }
        }
      }
      return [0.01, false, ''];
    };

    return (
      <Container className={'mx-3 mt-3 mx-auto'}>
        <div className={'mb-5'}>
          {marketOffers.map(m => (
            <Row>
              <Col md={10} className="text-left m-5">
                <h2 className="display-4  font-weight-bold">{m.title}</h2>
                <div className="lead text-muted">
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              </Col>
            </Row>
          ))}
        </div>
        <Row>
          <Col md={10} className="text-left ">
            <h2 className="display-4 text-primary font-weight-bold">
              Currently Available Marvel Characters
            </h2>
            <div className="lead text-muted">
              <div className={' my-3'}>{statistics}</div>
            </div>
          </Col>
        </Row>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1000: 4 }}
        >
          <Masonry className="row">
            {productList.map((product, index) => {
              const [price, available, sha256] = getPrice(product);
              return (
                <Col key={index} className="item">
                  <ProductCard
                    meta={product}
                    buyProduct={viewImage}
                    price={price}
                    available={available}
                  />
                </Col>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    );
  },
);
