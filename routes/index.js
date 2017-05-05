module.exports = function(app) {
    require("./images.js")(app);
    require("./reddit.js")(app);
    require("./misc.js")(app);
}
