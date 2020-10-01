const { mongooseToObject } = require('../../util/mongoose');
const User = require("../models/User");

class AccountController {

    // GET /new
    inpostAccount(req, res, next) {
        
        res.render("paymen");
    }
    paymenAccount(req, res, next) {
            const user = new User(req.body);
            user.save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }
    editAccount(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('account/editAccount', {
                user: mongooseToObject(user)
            }))
            .catch(next);
    }
    updateAccount(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ac/account/create'))
            .catch(next);
    }
    deleteAccount(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
   
}

module.exports = new AccountController;