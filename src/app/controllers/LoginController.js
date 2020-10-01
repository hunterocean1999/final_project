class LoginController {

    // GET /new
    welcom(req, res, next) {

        res.render('welcome')
    }
    login(req, res, next) {
        res.render('user/login');
    }

    register(req, res, next) {
        res.render('user/register');
    }

}
module.exports = new LoginController;