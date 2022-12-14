const fs = require("fs");

try {
    let a = 10;
    let b = 0;
    if (b === 0) {
        throw new Error("Devided by 0 error")
    }
} catch (error) {
    console.log(error.message)
}

process.on('uncaughtException', (err) => {
    console.log("Uncaught expection")
})

fs.readFile('input.txt', (error, data) => {
    if (error) {
        console.log("error")
    } else {
        console.log(data.toString)
    }
})