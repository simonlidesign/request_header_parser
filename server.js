var express = require('express');
var app = express();

app.get('/', (req, res) => {
    var regexpSoftware = /\(([^()]*)\)/;
    
    var json = {
        // http://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address
        'ipaddress': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        'language': req.headers['accept-language'].substring(0, 5),
        'software': req.headers['user-agent'].match(regexpSoftware)[1]
    }
    res.send(json);
});

app.listen(process.env.PORT || 8080);
