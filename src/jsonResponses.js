const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
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

    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This request has the required parameters',
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
    console.log(notFound);

    return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
    console.log(notFoundMeta);
    return respondJSONMeta(request, response, 404);
};

module.exports = {
    notFound,
    notFoundMeta,
};
