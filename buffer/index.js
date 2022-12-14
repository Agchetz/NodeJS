let buf = Buffer.from('Manikandan')
console.log(buf)
console.log(buf[0]);
console.log(buf.subarray(0,4).toString());

console.log("---------------------");

let arrayBuf  = Buffer.from([1,2,3,4])
console.log(arrayBuf);
console.log(arrayBuf[2]);

console.log("---------------------");

let writeBuf = Buffer.alloc(10)
writeBuf.write("manikandan.sitti")
console.log(writeBuf.toString());

