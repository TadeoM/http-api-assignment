const http = require('http');

const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);
    switch (request.url) {
        case '/':
            console.log("Getting index");
            htmlHandler.getIndex(request, response);
            break;
        case '/page2':
            htmlHandler.getIndex(request, response);
            break;
        case '/hello':
            console.log("Page not implemented");
            break;
        case '/time':
            console.log("Page not implemented");
            break;
        case '/helloJSON':
            console.log("Page not implemented");
            break;
        case '/timeJSON':
            console.log("Page not implemented");
            break;
        case '/dankmemes':
            console.log("Page not implemented");
            break;
        default:
            console.log("Default, probably no implemented");
            break;
    }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);