console.log("customer 1 made request");
setTimeout(callBack,3000,3,1)

console.log("customer 2 made request");
setTimeout(callBack,5000,5,2)

console.log("customer 3 made request");
setTimeout(callBack,1000,1,3)

function callBack(n, customer){
    console.log("response is ready after "+ n +" seconds for customer "+ customer)
}