/**
 *
 * TutorialView
 *
 */
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';

type VideoType = {
  url: string;
  name: string;
  key: string;
};

const videoList: Array<VideoType> = [
  {
    key: 'n6fRxWvxN2w',
    name: '1. Apply phantom Wallet',
    url: 'https://www.youtube.com/watch?v=n6fRxWvxN2w',
  },
  {
    key: 'ymOjyVynYmM',
    name: '2. Connect wallet',
    url: 'https://www.youtube.com/watch?v=ymOjyVynYmM',
  },
  {
    key: 'wve2q94abnw',
    name: '3. Art gallery',
    url: 'https://www.youtube.com/watch?v=wve2q94abnw',
  },
  {
    key: 'z6O2yujWGps',
    name: '4. Buy NFT',
    url: 'https://www.youtube.com/watch?v=z6O2yujWGps',
  },
  {
    key: 'mJ6LP4n0-30',
    name: '5. Buy with candy machine',
    url: 'https://www.youtube.com/watch?v=mJ6LP4n0-30',
  },
  {
    key: 'kZSqvRy-ZKk',
    name: '6. DIY with image',
    url: 'https://www.youtube.com/watch?v=kZSqvRy-ZKk',
  },
  {
    key: 'RTEysVXlsxg',
    name: '7. DIY with meta',
    url: 'https://www.youtube.com/watch?v=RTEysVXlsxg',
  },
  {
    key: 'J1pNVy2bWrs',
    name: '8. Solana NFT Playground',
    url: 'https://www.youtube.com/watch?v=J1pNVy2bWrs',
  },
];

const TutorialVideo = (video: VideoType) => (
  <div className="player-wrapper">
    <div className="hero-content">
      <h3 className="mb-3 text-warning text-uppercase">{video.name}</h3>
    </div>
    <ReactPlayer url={video.url} className="react-player" width={480} />
  </div>
);

export const TutorialView = memo(() => {
  return (
    <div className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">Video Tutorials and Knowledge Sharing</h1>
          </div>
        </Container>
      </section>

      <section
        style={{
          minHeight: 'calc(100vh - 295px)',
        }}
      >
        <Container>
          <style jsx>
            {`
              .player-wrapper {
                position: relative;
              }

              .react-player {
                position: absolute;
                top: 0;
                left: 0;
              }
            `}
          </style>
          <Row>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[0].url}
                name={videoList[0].name}
                key={videoList[0].key}
              />
            </Col>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[1].url}
                name={videoList[1].name}
                key={videoList[1].key}
              />
            </Col>
          </Row>
          <Row>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[2].url}
                name={videoList[2].name}
                key={videoList[2].key}
              />
            </Col>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[3].url}
                name={videoList[3].name}
                key={videoList[3].key}
              />
            </Col>
          </Row>

          <Row>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[4].url}
                name={videoList[4].name}
                key={videoList[4].key}
              />
            </Col>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[5].url}
                name={videoList[5].name}
                key={videoList[5].key}
              />
            </Col>
          </Row>

          <Row>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[6].url}
                name={videoList[6].name}
                key={videoList[6].key}
              />
            </Col>
            <Col md="5" className={'m-3'}>
              <TutorialVideo
                url={videoList[7].url}
                name={videoList[7].name}
                key={videoList[7].key}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
});
