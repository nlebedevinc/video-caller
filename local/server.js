const express = require('express');
const path = require('path');


const server = express();
server.use('/src', express.static(path.resolve(__dirname + '/../src')));

server.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

const port = 8000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});