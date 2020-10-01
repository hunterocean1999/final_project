const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { forwardAuthenticated } = require('../../config/auth');
const { home } = require('./HomeController');
// Load User model
class UsersController {

    // GET /new
    users(req, res, next) {

        res.render('login')
    }
    uregister(req, res, next) {

        res.render('register')
    }
    uregisterPost(req, res, next) {
        const { name, email, password, password2 } = req.body;
        let errors = [];
      
        if (!name || !email || !password || !password2) {
          res.render('register', {
            message: 'User already registered.',
            messageClass: 'alert-danger'
          });

        }
      
        if (password != password2) {
          res.render('register', {
            message: 'Repassword Không đúng',
            messageClass: 'alert-danger'
        });

        } else {
          User.findOne({ email: email }).then(user => {
            if (user) {
              res.render('register', {
                message: 'Email Đã Tồn Tại.',
                messageClass: 'alert-danger'
            });
              res.render('register', {
                errors,
                name,
                email,
                password,
                password2
              });
            } else {
              const newUser = new User({
                name,
                email,
                password
              });
      
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      res.render('register', {
                        message: 'User already registered.',
                        messageClass: 'alert-danger'
                    });
                      res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                });
              });
            }
          });
        }
      };
    
      post(req, res, next) {
        passport.authenticate('local', {
          successRedirect: '/home',
          failureRedirect: '/users/login',
          failureFlash: true
      })(req, res, next)
    };
    

}
module.exports = new UsersController;