let done = false;

const promise = new Promise((resolve,reject) => {
    if(done){
        resolve('Promises Resolved');
    }else{
        reject('Promise Rejected')
    }
})

promise.then((success) => {
    console.log(success)
},(reject) => {
    console.log(reject)
}).catch((error) => {
    console.log("error received ")
})