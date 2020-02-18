const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const errorController = require('./controllers/error')
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* app.use((req, res, next) => {
    User.findById('5e4c36fef5553746509851c7')
      .then(user => {
        req.user = user
        next();
      })
      .catch(err => console.log(err));
  }) */

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
.connect('mongodb+srv://maurina:WRxMudDQJd5ilZUA@cluster0-ouof1.mongodb.net/test?retryWrites=true&w=majority')
 .then( result => {
    /*User.findOne().then(user => {
        if (!user) {
            const user = new User({
                name: 'Me', 
                email: 'text@test.com',
                cart:{
                    items: []
                }
            })
            user.save()
        }
    }) */
    
    app.listen(8080)
})
.catch(err => {
    console.log(err)
})
