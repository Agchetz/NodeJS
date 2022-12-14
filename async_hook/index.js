const asyncHooks = require('async_hooks')
const fs = require('fs')
const util = require('util')

function debug(...args) {
    fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
}

init = function (asyncId, type, truggerAsyncId, resource) {
    debug(asyncId, type, truggerAsyncId,resource,"init")
}
before = function (asyncId) {
    debug(asyncId, "before")
}
after = function (asyncId) {
    debug(asyncId, "after")
}
destroy = function (asyncId) {
    debug(asyncId, "destroy")
}
promiseResolve = function (asyncId) {
    debug(asyncId, "promise")
}

const firstHook = asyncHooks.createHook({
    init, before, after, destroy, promiseResolve
}).enable();

setTimeout(() => {
   
}, 0)

setImmediate(() => {

})

setImmediate(() => {
    
})