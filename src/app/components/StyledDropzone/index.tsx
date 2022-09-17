import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Col, Container, Row } from 'react-bootstrap';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/png', maxFiles: 1 });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <Container style={{ cursor: 'pointer' }}>
      <Row>
        <Col lg="8" xl="6" className="text-center mx-auto">
          <div
            {...getRootProps({
              // @ts-ignore
              style,
            })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop one PNG image here, or click to select the file</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StyledDropzone;
