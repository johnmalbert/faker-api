const controller = require('../controllers/controller');

module.exports = app => {
    app.get('/api/users/new', controller.getUser),
    app.get('/api/companies/new', controller.getCompany),
    app.get('/api/user/company', controller.getUserAndCo)
}