const express = require('express');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const port = 3000
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
const route = require('./routes/index');
//connect to db
const db = require('./config/db')

db.connect();
app.use(flash());


app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(morgan('combined'));
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b

    }


}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));
//routes init
//route(app);
route(app);
route(app);

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  


app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
});