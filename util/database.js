const mongobd = require('mongodb')
const MongoClient = mongobd.MongoClient

let _db

const mongoConnect = (callback) => { 
     MongoClient.connect('mongodb+srv://maurina:WRxMudDQJd5ilZUA@cluster0-ouof1.mongodb.net/test?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected')
    _db = client.db()
    callback()
})
.catch(err => {
    console.log(err)
    throw err
})
}

const getDb = () => {
    if (_db){
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb