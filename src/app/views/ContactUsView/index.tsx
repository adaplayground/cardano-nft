/**
 *
 * ContactUsView
 *
 */
import React, { memo, useState } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import { InlineIcon } from '@iconify/react';
import { saveEmail } from 'store/nftFireStore';

interface Props {
}

export const ContactUsView = memo((props: Props) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const onSend = async () => {
    const status = await saveEmail(firstName, lastName, email, message);
    if (status) {
      setShowToast(true);
      setMessage('');
    } else {
      setShowErrorToast(true);
    }
  };

  return (
    <div className={'my-2'}>
      <section className="hero pt-6 pb-3">
        <Container>
          <div className="hero-content">
            <h1 className="mb-5">Get In Touch</h1>
          </div>

          <div className="hero-content">
            <h3 className="mb-5 text-warning">{`This site is one of our prove of concept projects on solana blockchain ,if you have a brilliant idea and
            need some professionals' help to turn your ideas into reality ,please contact us at service@solana-nft.io !`}</h3>
          </div>
        </Container>
      </section>

      <section
        style={{
          minHeight: 'calc(100vh - 295px)',
        }}
      >
        <Container>
          <Row>
            <Col lg="4">
              <ul className="list-inline h3 mb-6 mb-lg-0">
                <li className="list-inline-item mr-4">
                  <a href={'https://twitter.com/solplayground'}>
                    <InlineIcon
                      icon={'mdi:twitter'}
                      color={'#08a0e9'}
                      fontSize={48}
                    />
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a href={'mailto:service@solana-nft.io'}>
                    <InlineIcon
                      icon={'mdi:email-outline'}
                      color={'red'}
                      fontSize={48}
                    />
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="8" xl="6" className="mx-auto">
              <Form>
                <Row>
                  <Col sm="6">
                    <Form.Group>
                      <Form.Label>Your firstname *</Form.Label>
                      <Form.Control
                        className="form-control-underlined"
                        type="text"
                        name="nameContact"
                        id="name"
                        required={true}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group>
                      <Form.Label>Your lastname *</Form.Label>
                      <Form.Control
                        className="form-control-underlined"
                        type="text"
                        name="surnameContact"
                        id="surname"
                        required={true}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Your email *</Form.Label>
                  <Form.Control
                    className="form-control-underlined"
                    type="email"
                    name="emailContact"
                    id="email"
                    required={true}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Your message for us *</Form.Label>
                  <Form.Control
                    className="form-control-underlined"
                    name="messageContact"
                    as="textarea"
                    id="message"
                    required={true}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  className="mt-3"
                  onClick={onSend}
                >
                  Send message
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className={'d-flex justify-content-center'}>
              <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
                bg={'success'}
                className={'text-white'}
              >
                <Toast.Body>
                  Successfully sent your message. Thank you.
                </Toast.Body>
              </Toast>
              <Toast
                onClose={() => setShowErrorToast(false)}
                show={showErrorToast}
                delay={3000}
                autohide
                bg={'danger'}
                className={'text-white'}
              >
                <Toast.Body>
                  Sorry,failed to send the message,please try again later
                </Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
});
