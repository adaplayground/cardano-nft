import fs from 'fs';

const createDirIfNotExist = (dir: any) => {
  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
};

const getFilesize = (filename: string) => {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

const readFileInBuffer = (filename: string) => {
  const binary = fs.readFileSync(filename);
  let base64data = binary.toString('base64');
  return base64data;
};

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const sanitiseString = (str: string) =>
  str.replace(/[&\/\\#+()$~%.'":*?<>{}]/g, '');

export {
  createDirIfNotExist,
  getFilesize,
  readFileInBuffer,
  sleep,
  sanitiseString,
};
