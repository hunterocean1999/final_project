const User = require('../models/User')
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AcController {

    // GET /new
    storeCreate(req, res, next) {
        //res.render('list/stored-courses');
        User.find({})
            .then(users => {
                res.render('list/stored-account', {
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    }
}
module.exports = new AcController;