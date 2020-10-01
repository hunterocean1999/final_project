const { mongooseToObject } = require('../../util/mongoose');
const Course = require("../models/Course");

class CourseController {

    // GET /new
    show(req, res, next) {
        //req.param.slug
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }
    create(req, res, next) {
        //req.param.slug
        res.render("courses/create");
    }
    store(req, res, next) {

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/home'))
            .catch(error => {});
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/list/stored/create'))
            .catch(next);
    }
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController;