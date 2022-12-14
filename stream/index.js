const { read } = require('fs');
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {
    console.log("hello");
  }
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('firstTime called')
readableStream.push('secondTime called')

const transformStream = Stream.Transform()

transformStream._transform = (data, encoding, next) => {
  console.log(data.toString().toUpperCase());
  next()
}
process.stdin.pipe(transformStream);