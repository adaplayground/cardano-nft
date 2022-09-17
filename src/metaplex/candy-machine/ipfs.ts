import fetch from 'node-fetch';
import { create } from 'ipfs-http-client';
import logger from 'metaplex/utils/logger';

export interface ipfsCreds {
  projectId: string;
  secretKey: string;
}

export let ipfsConfig: ipfsCreds = {
  projectId: '',
  secretKey: '',
};

export const initIpfs = (cred: ipfsCreds) => {
  ipfsConfig.projectId = cred.projectId;
  ipfsConfig.secretKey = cred.secretKey;
};

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function ipfsUpload(
  ipfsCredentials: ipfsCreds,
  image: string,
  manifestBuffer: Buffer,
) {
  const tokenIfps = `${ipfsCredentials.projectId}:${ipfsCredentials.secretKey}`;
  // @ts-ignore
  const ipfs = create('https://ipfs.infura.io:5001');

  const uploadToIpfs = async source => {
    const { cid } = await ipfs.add(source).catch();
    return cid;
  };
  const buffer = Buffer.from(image, 'base64');
  // @ts-ignore
  const mediaHash = await uploadToIpfs(buffer);
  logger.debug('mediaHash:', mediaHash);
  const mediaUrl = `https://ipfs.io/ipfs/${mediaHash}`;
  logger.debug('mediaUrl:', mediaUrl);
  const authIFPS = Buffer.from(tokenIfps).toString('base64');
  await fetch(`https://ipfs.infura.io:5001/api/v0/pin/add?arg=${mediaHash}`, {
    headers: {
      Authorization: `Basic ${authIFPS}`,
    },
    method: 'POST',
  });
  await sleep(1000);
  logger.info('uploaded image for file');

  const manifestJson = JSON.parse(manifestBuffer.toString('utf8'));
  manifestJson.image = mediaUrl;
  manifestJson.properties.files = manifestJson.properties.files.map(f => {
    return { ...f, uri: mediaUrl };
  });

  const manifestHash = await uploadToIpfs(
    Buffer.from(JSON.stringify(manifestJson)),
  );
  await fetch(
    `https://ipfs.infura.io:5001/api/v0/pin/add?arg=${manifestHash}`,
    {
      headers: {
        Authorization: `Basic ${authIFPS}`,
      },
      method: 'POST',
    },
  );

  await sleep(1000);
  const link = `https://ipfs.io/ipfs/${manifestHash}`;
  logger.info('uploaded manifest: ', link);

  return link;
}

export async function ipfsUploadWithMediaLink(
  ipfsCredentials: ipfsCreds,
  mediaUrl: string,
  manifestBuffer: Buffer,
) {
  const tokenIfps = `${ipfsCredentials.projectId}:${ipfsCredentials.secretKey}`;
  // @ts-ignore
  const ipfs = create('https://ipfs.infura.io:5001');

  const uploadToIpfs = async source => {
    const { cid } = await ipfs.add(source).catch();
    return cid;
  };

  const authIFPS = Buffer.from(tokenIfps).toString('base64');

  const manifestJson = JSON.parse(manifestBuffer.toString('utf8'));
  manifestJson.image = mediaUrl;
  manifestJson.properties.files = manifestJson.properties.files.map(f => {
    return { ...f, uri: mediaUrl };
  });

  const manifestHash = await uploadToIpfs(
    Buffer.from(JSON.stringify(manifestJson)),
  );
  await fetch(
    `https://ipfs.infura.io:5001/api/v0/pin/add?arg=${manifestHash}`,
    {
      headers: {
        Authorization: `Basic ${authIFPS}`,
      },
      method: 'POST',
    },
  );

  await sleep(1000);
  const link = `https://ipfs.io/ipfs/${manifestHash}`;
  logger.info('uploaded manifest: ', link);

  return link;
}
