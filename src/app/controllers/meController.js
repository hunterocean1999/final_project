
const Customer = require('../models/Customer')
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    // GET /new
    storeCreate(req, res, next) {
        //res.render('list/stored-courses');
        Customer.find({})
            .then(customers => {
                res.render('list/stored-customer', {
                    customers: mutipleMongooseToObject(customers)
                });
            })
            .catch(next);
    }
}
module.exports = new MeController;