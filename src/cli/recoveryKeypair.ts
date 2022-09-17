import base58 from 'bs58';
const keypair: Array<number> = [];
const byte_array = base58.decode(
  '32sGvCR9u4LpPUn4P6xHcZidFje9zT3SE5UycSMRawwm75Be3iXF7Ua6HTnVqpB1UoXsYVfF3Q7uKYHCoyxKpAnZ',
);
byte_array.forEach(a => keypair.push(a));

console.log(keypair);
