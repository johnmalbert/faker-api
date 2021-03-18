const express = require("express");
const faker = require("faker");

const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = [
            {street : faker.address.streetName()},
            {city : faker.address.city()},
            {state : faker.address.state()},
            {zipCode :  faker.address.zipCode()},
            {country : faker.address.country()}
        ];
    }
}

const newUser = new User();
console.log(newUser);

const newCompany = new Company();
console.log(newCompany);

app.get("/api/users/new", (req, res) => {
    res.json( newUser );
})

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany );
})
app.get("/api/user/company", (req, res) => {
    res.json( [{company: newCompany}, {user: newUser}] );
})

const server = app.listen(8001, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
