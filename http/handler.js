const queryString = require('querystring')

function home(response){
    const html = 
    `<html>
        <body>
            <form action='/review' method='post'>
                <input type="text" name="username">
                <input type="submit" value="submit">
            </form>
        </body>
    </html>`
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html)
    response.end()
    console.log("Home handler")
}

function review(response, ReviewData){
    console.log('review handler')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(queryString.parse(ReviewData).username)
    response.end();
}

exports.home = home;
exports.review = review;