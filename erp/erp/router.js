 exports.register = (app) => {
    app.use('/api/user', require('./api/users'));
    app.use('/api/teams', require('./api/teams'));
    app.use('/api/services', require('./api/customary'));
    app.use('/api/projects', require('./api/projects'));
    app.use('/api/opps', require('./api/opportunity'));
    app.use('/api/salesCategory', require('./api/salesCategory'));
    app.use('/api/userSalesStages', require('./api/userSalesStages'));
    app.use('/api/clients', require('./api/clients'));
    app.use('/api/calenderEvents', require('./api/calenderEvents'));
};


