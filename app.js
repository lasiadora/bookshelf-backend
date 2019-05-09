const 
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

/* Routes */
const 
    indexRouter = require('./routes/index'),
    bookRouter = require('./routes/book'),
    booksRouter = require('./routes/books');
/* End of Routes */

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/book', bookRouter);
app.use('/books', booksRouter);

module.exports = app;
