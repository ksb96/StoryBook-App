const path = require('path')
const express = require('express')
const dontenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo');
const hbs = require('express-handlebars')
const connectDB = require('./config/db')
const favicon = require('serve-favicon')


//package.json
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// "start": "cross-env NODE_ENV=production node app",
// "dev": "cross-env NODE_ENV=development nodemon app"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// deplo
// "start": "node app.js"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//load config files
dontenv.config({
    path: './config/config.env'
}) //repo for global var
require('./config/passport')(passport)

//call DB
connectDB()

//init the app
const app = express()

//favicon 
app.use(favicon(path.join(__dirname, 'public', 'reading-book.ico')))

//shows what http methods, for response or so
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//mini-helpers
const {
    stripTags,
    truncate,
    editIcon,
    select
} = require('./helpers/hbs')

//handlebars
app.engine('.hbs', hbs.engine({
    helpers: {
        stripTags,
        truncate,
        editIcon,
        select
    },
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// !=handlebars 4.04
// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
// app.set('view engine', '.hbs')

//session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
    }),
}))
//store: new MongoStore({ mongooseConnection: mongoose.connection})

//Middleware's block

//methoe-override middleware
app.use(bodyParser.urlencoded())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))

//body-parser middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//express-global var (middleware)
app.use(function(req, res, next){
    //access user from within the template 
    res.locals.user = req.user || null
    next()
})

//END

// static folder
app.use(express.static(path.join(__dirname, 'public')))

//route
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

//connection block
const PORT = process.env.PORT || 5000
app.listen(
    PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
