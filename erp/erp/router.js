var express = require('express');
 
exports.register = (app) => {
    
    app.use('/api/user', require('./api/users'));
    app.use('/api/tasks', require('./api/tasks'));
    app.use('/api/projects', require('./api/projects'));
    app.use('/api/opps', require('./api/opportunity'));
    
}


