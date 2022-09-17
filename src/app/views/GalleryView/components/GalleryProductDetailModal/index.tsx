/**
 *
 * GalleryProductDetailModal
 *
 */
import React, { memo } from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap';
import { InlineIcon } from '@iconify/react';
import { MetaAttributeType, ImageMetaInfoType } from 'types';
import Magnifier from 'react-magnifier';

import { useConfetti } from 'app/components/Confetti';
import { useSolPrice } from 'metaplex/contexts/coingecko';

interface Props {
  mode: 'buy' | 'view' | 'diy';
  onConfirm: () => void;
  onCancel: () => void;
  modalShow: boolean;
  okText: string;
  cancelText: string;
  meta: ImageMetaInfoType | null;
  price: number | undefined;
  showConfetti: boolean;
}

export const GalleryProductDetailView = memo(
  ({
    mode,
    meta,
    onConfirm,
    onCancel,
    modalShow,
    okText,
    cancelText,
    showConfetti,
    price,
  }: Props) => {
    const attributes: Array<MetaAttributeType> = [];
    const solPrice = useSolPrice();
    const confetti = useConfetti();
    const [imageUrl, setImageUrl] = React.useState<string>('');
    let total = '';
    if (price) {
      total = parseFloat((solPrice * price).toString()).toFixed(2);
    }

    if (meta && meta.attributes) {
      meta.attributes.forEach(a => {
        if (a.trait_type.toLowerCase() !== 'sha256') {
          // @ts-ignore
          attributes.push(a);
        }
      });
    }

    React.useEffect(() => {
      if (meta) {
        let imageUrl = meta!.image;
        if (meta!.type !== 'gif' && meta!.hasThumbnail) {
          imageUrl = `https://firebasestorage.googleapis.com/v0/b/solana-nft-io-thumbnails/o/${
            meta!.assetId
          }_400x400.jpeg?alt=media`;
        }
        setImageUrl(imageUrl);
      }
    }, [meta]);

    React.useEffect(() => {
      if (showConfetti) {
        confetti.dropConfetti();
      }
    }, [showConfetti]);

    return meta ? (
      <Modal
        show={modalShow}
        // @ts-ignore
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={'d-flex align-items-center'}>
              <InlineIcon
                className="mr-2 text-danger"
                icon={'mdi:cart-variant'}
              />
              <div className={'px-2 text-primary'}>Buy NFT</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div
                  className={
                    'd-flex flex-column align-items-center justify-content-center'
                  }
                >
                  <Magnifier
                    mgShowOverflow={false}
                    mgWidth={200}
                    mgHeight={200}
                    className="img-fluid mt-2"
                    src={imageUrl}
                    // @ts-ignore
                    alt={meta!.name}
                    zoomFactor={1.2}
                    style={{ cursor: 'pointer' }}
                  />
                  <div
                    className={'pt-2'}
                  >{`W:${meta.width}px  <-->  H:${meta.height}px`}</div>
                </div>
              </Col>
              <Col
                lg="5"
                xl="7"
                style={{ maxHeight: '55vh', overflowY: 'auto' }}
              >
                <div className={'d-flex flex-column  px-2'}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="inputGroup-name"
                      style={{ width: '110px' }}
                    >
                      Name
                    </InputGroup.Text>
                    <FormControl
                      className={'bg-white'}
                      aria-label="Name"
                      aria-describedby="inputGroup-name"
                      value={meta!.name}
                      disabled
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="inputGroup-desc"
                      style={{ width: '110px' }}
                    >
                      Description
                    </InputGroup.Text>
                    <FormControl
                      as={'textarea'}
                      rows={5}
                      className={'bg-white'}
                      aria-label="Description"
                      aria-describedby="inputGroup-desc"
                      value={meta!.description}
                      disabled
                    />
                  </InputGroup>
                  {attributes.map((a: MetaAttributeType, index) => (
                    <InputGroup className="mb-3" key={index}>
                      <InputGroup.Text
                        id="inputGroup-attr-1"
                        style={{ width: '110px' }}
                      >
                        {a.trait_type}
                      </InputGroup.Text>
                      <FormControl
                        aria-label="Attribute 1"
                        aria-describedby="inputGroup-attr-1"
                        value={a.value}
                        disabled
                        className={'bg-white'}
                      />
                    </InputGroup>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <span className="text-gray-600 text-sm">{price} SOL </span>
          <span className="text-gray-500 text-sm">(US ${total}) </span>
          <Button onClick={onConfirm} variant="primary">
            {okText}
          </Button>
          <Button onClick={onCancel} variant="secondary">
            {cancelText}
          </Button>
        </Modal.Footer>
      </Modal>
    ) : null;
  },
);
