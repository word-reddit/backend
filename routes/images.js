var url = require("url");
var http = require('follow-redirects').http;

module.exports = function(app) {
    
    app.get('/img/:url', function(req, res) {
        var url_parts = url.parse(req.params.url, true);
        var query = url_parts.query;
        var options = {
            host: url_parts.hostname,
            path: url_parts.pathname
        };
    
        console.log("[IMG] Serving " + url_parts.hostname + url_parts.pathname);
    
        var callback = function(response) {
            if (response.statusCode === 200) {
                res.writeHead(200, {
                    'Content-Type': response.headers['content-type']
                });
                response.pipe(res);
            }
            else {
                res.writeHead(response.statusCode);
                res.end();
            }
        };
    
        http.request(options, callback).end();
    });
    
}