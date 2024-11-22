const buf = Buffer.from('oi');
const buf2 = Buffer.from('Lucas');

console.log(buf); // => representa o buffer em hexadecimal
console.log(buf2); // => representa o buffer em hexadecimal
console.log("oi", buf); 
console.log("Lucas", buf2); 
console.log(buf.toJSON()); // => representação na base decimal
console.log(buf2.toJSON()); // => representação na base decimal
