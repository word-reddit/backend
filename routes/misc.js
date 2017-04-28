module.exports = function(app) {
    app.get('/redirect/:url', function(req, res) {
        res.redirect(req.params.url);
    });  
};