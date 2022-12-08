console.log(__dirname);
console.log(__filename);

setTimeout(() => {
    console.log("set timeout called")
}, 0)

setImmediate(() => {
    console.log("set immediate called")
})

let count = 0; 
const interval = setInterval(() => {
    if(count === 3){
        clearInterval(interval)
    }else{
        console.log("set Interval called - " + count++);
    }
}, 1000)

console.log("outside timer called")