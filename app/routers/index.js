const noteRouters = require('./note_routers');

module.exports = function(app, db){
    noteRouters(app, db);
}