/**
 *u
 * FaqView
 *
 */
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ReactMarkdown from 'react-markdown';
import { faqContent } from 'conf/faq';
import { FaqItemType, FaqSectionType } from 'types';

interface Props {}

export const FaqView = memo((props: Props) => {
  const getRows = (items: Array<FaqItemType>) => {
    const rows: Array<any> = [];
    const len = items.length;

    let columns: Array<FaqItemType> = [];
    for (let i = 0; i < len; i++) {
      const faqItem = items[i];

      if (faqItem.fullWidth) {
        rows.push(
          <Row key={faqItem.title}>
            <Col md={12}>
              <h5>{faqItem.title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{faqItem.content}</ReactMarkdown>
              </div>
            </Col>
          </Row>,
        );
      } else if (columns.length == 3) {
        rows.push(
          <Row key={columns[0].title}>
            <Col md={6}>
              <h5>{columns[0].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[0].content}</ReactMarkdown>
              </div>
              <h5>{columns[1].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[1].content}</ReactMarkdown>
              </div>
            </Col>
            <Col md={6}>
              <h5>{columns[2].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[2].content}</ReactMarkdown>
              </div>
              <h5>{faqItem.title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{faqItem.content}</ReactMarkdown>
              </div>
            </Col>
          </Row>,
        );
        columns = [];
      } else {
        columns.push(faqItem);
      }
    }

    switch (columns.length) {
      case 1:
        rows.push(
          <Row key={columns[0].title}>
            <Col md={6}>
              <h5>{columns[0].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[0].content}</ReactMarkdown>
              </div>
            </Col>
          </Row>,
        );
        break;
      case 2:
        rows.push(
          <Row key={columns[0].title}>
            <Col md={6}>
              <h5>{columns[0].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[0].content}</ReactMarkdown>
              </div>
              <h5>{columns[1].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[1].content}</ReactMarkdown>
              </div>
            </Col>
          </Row>,
        );
        break;
      case 3:
        rows.push(
          <Row key={columns[0].title}>
            <Col md={6}>
              <h5>{columns[0].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[0].content}</ReactMarkdown>
              </div>
              <h5>{columns[1].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[1].content}</ReactMarkdown>
              </div>
            </Col>
            <Col md={6}>
              <h5>{columns[2].title}</h5>
              <div className="text-muted mb-4">
                <ReactMarkdown>{columns[2].content}</ReactMarkdown>
              </div>
            </Col>
          </Row>,
        );
        break;
    }

    return rows;
  };

  return (
    <Container className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">F.A.Q.s</h1>
            <div>
              <div className="lead text-muted mb-0">
                <ReactMarkdown>
                  Solana is an open source project implementing a new,
                  high-performance, permissionless blockchain.
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          {faqContent.map((faqSection: FaqSectionType) => (
            <div className="py-4" key={faqSection.title}>
              <h2 className="mb-5 text-primary">{faqSection.title}</h2>

              {getRows(faqSection.items)}
            </div>
          ))}
        </Container>
      </section>
    </Container>
  );
});
