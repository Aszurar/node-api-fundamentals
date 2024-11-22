import { Readable } from "node:stream";


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

fetch('http://localhost:3333', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
}).then(res => res.text()).then(data => console.log(data));