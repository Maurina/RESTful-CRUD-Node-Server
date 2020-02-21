const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

let port = process.env.PORT
if (port == null || port == ''){
    port = 8080
} 



mongoose
.connect('mongodb+srv://maurina:WRxMudDQJd5ilZUA@cluster0-ouof1.mongodb.net/test?retryWrites=true&w=majority')
 .then( result => { 
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch(err => {
    console.log(err)
})
