const Oder = require("../models/Oder");
const { mongooseToObject } = require('../../util/mongoose');

class CartController {

    // GET /new
    cart(req, res, next) {
        res.render('cart/cartList');
    }

    checkOut(req, res, next) {
        res.render('cart/checkOut');
    }

    order(req, res, next) {
        res.render('cart/order');
    }
    post(req, res, next) {
            const oder = new Oder(req.body);
            oder.save()
                .then(() => res.redirect('/'))
                .catch(error => {});
    }



}
module.exports = new CartController;

