var url = require("url");
var http = require('follow-redirects').http;
var reddit_base_url = "https://www.reddit.com";

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.redirect("/r/popular");
    });
    
    app.get('/r/:subreddit', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/.json");
    });

    app.get('/r/:subreddit/?count=:count&after=:after_id', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/.json" + "?count=" + req.params.count + "&after=" + req.params.after_id);
    });
    
    app.get('/r/:subreddit/comments/:id/:name', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/" + "comments/" + req.params.id + "/" + req.params.name + "/.json");
    });
    
    app.get('/r/:subreddit/top', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/top/.json");
    });
    
    app.get('/r/:subreddit/new', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/new/.json");
    });
    
    app.get("/r/:subreddit/rising", function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/rising/.json");
    });
    
    app.get("/r/:subreddit/controversial", function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/controversial/.json");
    });
    
    app.get("/r/:subreddit/gilded", function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/r/" + req.params.subreddit + "/gilded/.json");
    });
    
    app.get('/u/:username', function(req, res) {
        handleRedditRequest(req, res, reddit_base_url + "/u/" + req.params.username + "/.json");
    });

    function handleRedditRequest(req, res, path) {
        console.log("[R] reaching " + path);

        var url_parts = url.parse(path, true);
        var options = {
            host: url_parts.hostname,
            path: url_parts.pathname
        };

        var callback = function(response) {
            var body = '';

            response.on('data', function(chunk){
                body += chunk;
            });

            response.on('end', function(){
                var fbResponse = JSON.parse(body);
                res.json(fbResponse);
            });
        };
        var request = http.request(options, callback);
        request.on("error", function(e) {
            res.status(404);
            res.json({
                error: "Not Found",
                errorMessage: "Couldnt Reach the reddit servers"
            });
        });

        request.end();
    }
};