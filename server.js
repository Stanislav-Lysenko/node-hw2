const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hbs = require('hbs')

const app = express();

const log = require('./routes/middleware/log');
const auth = require('./routes/middleware/auth');

const { getTasks} = require('./helpers/functions');

const loginRouter = require('./routes/api/login');
const logoutRouter = require('./routes/api/logout');
const editRouter = require('./routes/api/editnote');
const checkRouter = require('./routes/api/checknote');
const addRouter = require('./routes/api/addnote');
const removeRouter = require('./routes/api/removenote');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view options', {
    layout: 'layouts/layout'
});
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(log);

app.use('/api', loginRouter);
app.use('/api', logoutRouter);
app.use(auth);

app.use('/api', editRouter);
app.use('/api', checkRouter);
app.use('/api', addRouter);
app.use('/api', removeRouter);

app.get('/notfound', (req, res) => {
    res.render('notfound.hbs');
});

app.get('/error', (req, res) => {
    res.render('error.hbs');
});

app.get('/', (req, res) =>{
    res.render('notes.hbs', {
        user: req.user,
        tasks: req.user? getTasks(req.user.id) : []
    });
});

app.listen(3000);

