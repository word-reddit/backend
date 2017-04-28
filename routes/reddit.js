module.exports = function(app) {
    app.get('/', function (req, res) {
        res.redirect("/r/popular");
    });
    
    app.get('/r/:subreddit', function(req, res) {
        
    });
    
    app.get('/r/:subreddit/comments/:id/:name', function(req, res) {
        
    });
    
    app.get('/r/:subreddit/top', function(req, res) {
        
    });
    
    app.get('/r/:subreddit/new', function(req, res) {
        
    });
    
    app.get("/r/:subreddit/rising", function(req, res) {
        
    });
    
    app.get("/r/:subreddit/controversial", function(req, res) {
        
    });
    
    app.get("/r/:subreddit/gilded", function(req, res) {
        
    });
    
    app.get('/u/:username', function(req, res) {
        
    });
}