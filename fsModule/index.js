const fs = require('fs');

fs.readFile('contentFile.txt', (error,data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data.toString());
    }
})
const content = "manikandan is a good boy";
fs.writeFile('output.txt',content, err => {
    if(err){
        console.log(err)
    }
})

fs.appendFile('output.txt', "Tomorrow is saturday.", err=>{})

fs.readdirSync(__dirname).map(fileName => {
    console.log(fileName)
  })

fs.rename('output.txt','out.txt',err=>{})

console.log("------------------------------------");

const createReadStream = fs.createReadStream("input.txt");
let datas = '';
createReadStream.on('data', (value) => {
    datas += value;
})

createReadStream.on('end', ()=>{
    console.log(datas);
    console.log("------------------------------------");
})

const writeStream = fs.createWriteStream('temp.txt');
writeStream.write(`createReadStream.on('end', ()=>{
    console.log(datas);
})`);

writeStream.end();
writeStream.on('finish', ()=>{
    console.log("Write completed open temp.txt");
    console.log("------------------------------------");
})


// var data = fs.readFileSync('contentFile.txt');
// console.log("Sync read: "+ data.toString())

// console.log("Sync end!!!")