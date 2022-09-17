/**
 *
 * BlogView
 *
 */
import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

interface Props {}

export const BlogView = memo((props: Props) => {
  return (
    <Container className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">Blog</h1>
            <div>
              <div className="lead text-muted mb-0"></div>
            </div>
          </div>
        </Container>
      </section>
      <section
        className="pb-5"
        style={{
          minHeight: 'calc(100vh - 295px)',
        }}
      >
        <Container>
          <h1 className="mb-5 text-primary text-uppercase">
            Under construction
          </h1>
        </Container>
      </section>
    </Container>
  );
});
