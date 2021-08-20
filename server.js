const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const routes = require("./controllers")
var MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const PORT = process.env.PORT || 3001
const uri = process.env.MONGODB_URI || "mongodb://localhost/mmoTesting"

mongoose.connect(uri, {useNewUrlParser: true});

const store = new MongoDBStore({
    uri: uri,
    collection: 'sessions'
})

store.on('error', function (error) {
    console.log(error);
})

app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes)

app.listen(PORT, () => {
    console.log("Listening!")
})