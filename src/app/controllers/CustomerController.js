const { mongooseToObject } = require('../../util/mongoose');
const Customer = require("../models/Customer");

class CustomerController {

    // GET /new
    inpost(req, res, next) {
        
        res.render("paymen");
    }
    paymen(req, res, next) {
            const customer = new Customer(req.body);
            customer.save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }
   
}

module.exports = new CustomerController;