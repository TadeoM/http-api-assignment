const http = require('http');
const url = require('url');

const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    'GET': {
        '/': htmlHandler.getIndex,
        '/style.css': htmlHandler.getCSS,
        //'/updateUser': jsonHandler.updateUser,
        notFound: jsonHandler.notFound,
    },
    'HEAD': {
        //'/getUsers': jsonHandler.getUsersMeta,
        notFound: jsonHandler.notFoundMeta,
    },
};

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);

    //console.dir(request.method);
    //console.dir(parsedUrl);
    
    if (urlStruct[request.method][parsedUrl.pathname]){
        //console.log("FOUND SOMETHING");
        urlStruct[request.method][parsedUrl.pathname](request,response);
    } else {
        //console.log("NOT FOUND");
        urlStruct['HEAD'].notFound(request, response);
    }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);