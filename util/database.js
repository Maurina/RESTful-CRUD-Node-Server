const mongobd = require('mongodb')
const MongoClient = mongobd.MongoClient

const mongoConnect = (callback) => { 
     MongoClient.connect('mongodb+srv://maurina:WRxMudDQJd5ilZUA@cluster0-ouof1.mongodb.net/test?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected')
    callback(client)
})
.catch(err => {
    console.log(err)
})
}
