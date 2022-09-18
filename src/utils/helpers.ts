import aes from 'crypto-js/aes';
import utf8 from 'crypto-js/enc-utf8';

const asePassphrase =
  '5YWKbD2DgQjLttKe5BSJMTJyqN5dJpRmfR3vFWVVEqZZfnG32kYeVmCc7RR9bjGU';

const formatDateOnly = (d: Date) =>
  d.getFullYear() +
  '_' +
  ('0' + (d.getMonth() + 1)).slice(-2) +
  '_' +
  ('0' + d.getDate()).slice(-2);
const dateString = (d: Date) =>
  d.getFullYear() +
  '_' +
  ('0' + (d.getMonth() + 1)).slice(-2) +
  '_' +
  ('0' + d.getDate()).slice(-2) +
  '_' +
  ('0' + d.getHours()).slice(-2) +
  '_' +
  ('0' + d.getMinutes()).slice(-2) +
  '_' +
  ('0' + d.getSeconds()).slice(-2) +
  '_' +
  ('0' + d.getMilliseconds()).slice(-3);

const formatDate = (d: Date) =>
  d.getFullYear() +
  '_' +
  ('0' + (d.getMonth() + 1)).slice(-2) +
  '_' +
  ('0' + d.getDate()).slice(-2) +
  '_' +
  ('0' + d.getHours()).slice(-2) +
  '_' +
  ('0' + d.getMinutes()).slice(-2) +
  '_' +
  ('0' + d.getSeconds()).slice(-2) +
  '_' +
  ('0' + d.getMilliseconds()).slice(-3);

const encryptString = (key: any) => {
  return aes.encrypt(key.toString(), asePassphrase).toString();
};

const decryptString = (value: any) => {
  const decrypted = aes.decrypt(value, asePassphrase);
  return decrypted.toString(utf8);
};

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const sanitiseString = (str: string) =>
  str.replace(/[&\/\\#+()$~%.'":*?<>{}!\-_]/g, '');

export {
  dateString,
  formatDate,
  encryptString,
  decryptString,
  randomIntFromInterval,
  sanitiseString,
  formatDateOnly,
};
