const Course = require('../models/Course');
const Customer = require('../models/Customer')
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ListController {

    // GET /new
    storeCreate(req, res, next) {
        //res.render('list/stored-courses');
        Course.find({})
            .then(courses => {
                res.render('list/stored-courses', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}
module.exports = new ListController;