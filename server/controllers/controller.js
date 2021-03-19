const User = require('../models/User');
const Company = require('../models/Company');

module.exports = {
    getUser: (req,res) =>  {
        let newUser = new User();
        console.log(newUser);
        res.json( newUser );
    },
    getCompany: (req,res) =>  {
        let newCompany = new Company();
        res.json( newCompany );
    },
    getUserAndCo: (req, res) => {
        let newCompany = new Company();
        let newUser = new User();
        res.json( [newUser, newCompany]);
    }
}