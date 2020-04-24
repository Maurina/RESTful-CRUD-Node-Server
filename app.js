

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();

app.use(cors({
    origin: '*',
  }))
  


const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/admin', adminRoutes);




let port = process.env.PORT
if (port == null || port == ''){
    port = 8000
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
