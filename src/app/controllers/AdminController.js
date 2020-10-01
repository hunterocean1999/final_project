class AdminController {

    // GET /new
    admin(req, res, next) {
        res.render('admin');
    }
}
module.exports = new AdminController;