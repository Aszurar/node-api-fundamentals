import { Readable, Transform, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const newIndex = this.index++;

    setTimeout(() => {
      if (newIndex > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(newIndex));
        this.push(buf);
      }
    }, 500);
  }
}

class InvertNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const invertedNumber = Number(chunk) * -1;
    const buf = Buffer.from(String(invertedNumber));
    callback(null, buf);
  }
}

class MultiplyByTen extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk) * 10);
    callback();
  }
}

// new OneToHundredStream().pipe(process.stdout);
// new OneToHundredStream().pipe(new MultiplyByTen());
new OneToHundredStream()
  .pipe(new InvertNumber())
  .pipe(new MultiplyByTen());