/**
 *
 * MessageBox
 *
 */
import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { InlineIcon } from '@iconify/react';

interface Props {
  title?: string;
  message: string;
  icon: string;
  onOk: () => void;
  modalShow: boolean;
  onCancel: () => void;
  iconColor: string;
}

export function MessageBox({
                             title,
                             message,
                             icon,
                             onOk,
                             iconColor,
                             modalShow,
                             onCancel,
                           }: Props) {
  return (
    <Modal
      show={modalShow}
      // @ts-ignore
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className={'d-flex align-items-center'}>
            <InlineIcon className="h2 mr-2" icon={icon} color={iconColor}/>
            <div className={'px-2'}>{title}</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onOk} variant="primary">
          Ok
        </Button>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
