const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  }
  /* userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  } */
});

module.exports = mongoose.model('Product', productSchema);
