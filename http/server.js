const http = require('http')

function startServer(route, handle){
    function onRequest(request, response){
        var dataReceived = "";
        const path = request.url;
        
        request.on('data', (chunk)=>{
            dataReceived += chunk;
        })

        request.on('end',()=>{
            route(handle, path, response, dataReceived)
        })

        //console.log("Request received for " + path);
        
    }

    http.createServer(onRequest).listen(8080);
    console.log("Server running in port 8080");
}
exports.startServer = startServer;