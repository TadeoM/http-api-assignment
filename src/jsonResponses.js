const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
    response.end();
};

const respondXML = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'text/xml',
    }

    response.writeHead(status, headers);
    response.write(object);
    response.end();
};

const respondJSONMeta = (request, response, status) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response',
    };
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 200, xmlResponse);
    }

    return respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response, params) => {
    const responseJSON = {
        message: 'This is a unauthorized response',
    };
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 200, xmlResponse);
    }
    if(params.loggedIn || params.loggedIn !== true){
        responseJSON.message = 'Missing loggedIn query parameter set to true';
        responseJSON.id = 'unauthorized';
        
        return respondJSON(request, response, 401, responseJSON);
    }

    return respondJSON(request, response, 401, responseJSON);
};

const forbidden = (request, response) => {
    const responseJSON = {
        message: 'This is a forbidden response',
    };
    
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 403, xmlResponse);
    }

    return respondJSON(request, response, 403, responseJSON);
};

const internal = (request, response) => {
    const responseJSON = {
        message: 'This is a internal response',
    };
    
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 500, xmlResponse);
    }

    return respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
    const responseJSON = {
        message: 'This is a not implemented response',
    };
    
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 501, xmlResponse);
    }

    return respondJSON(request, response, 501, responseJSON);
};

const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This request does not have the required parameters',
    };
    
    if (!params.valid || params.valid !== true){
        responseJSON.message = 'Missing valid query parameter set to true';
        responseJSON.id = 'badRequest';
        
        return respondJSON(request, response, 400, responseJSON);
    }
    
    return respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for is not found.',
        id: 'notFound',
    }
    if (request.headers.accept === 'text/xml') {
        const xmlResponse = `<message>This is a successful response</message>`
        
        return respondXML(request, response, 404, xmlResponse);
    }

    return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
    console.log("notFoundMeta");
    return respondJSONMeta(request, response, 404);
};

module.exports = {
    success,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    internal,
    notImplemented,
    notFound,
    notFoundMeta,
};
