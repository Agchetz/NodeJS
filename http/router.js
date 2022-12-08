function route(handle, pathname, response, dataReceived){
    console.log(pathname)
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, dataReceived);
    }else{
        response.writeHead(400, {"Content-Type": "text/pain"});
        response.write("Error 404 page not found")
        response.end();
        console.log("No handler")
    }
}

exports.route = route;