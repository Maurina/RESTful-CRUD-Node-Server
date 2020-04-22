const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  const product = new Product( {
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    imageUrl:req.body.imageUrl,
    source: req.body.source

  });
  product
  .save()
  .then(result => {
    console.log('Created New Product')
    res.send('Created Product.  Check Database')
  })
  .catch(error => console.log(error))
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const date = req.body.date;
  const description = req.body.description;
  const source = req.body.source
  const product = new Product({
    title: title,
    date: date,
    description: description,
    imageUrl: imageUrl,
    source: source,
  });
  product
    .save()
    .then(result => {
      console.log('Created Product');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.body.productId
  const updatedTitle = req.body.title
  const updatedDate = req.body.date
  const updatedDescription = req.body.description
  const updatedImageUrl = req.body.imageUrl
  const updatedSource = req.body.source

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle
      product.date = updatedDate
      product.description = updatedDescription
      product.imageUrl = updatedImageUrl
      product.source = updatedSource
      return product.save()
    })
    .then(result => {
      console.log('Updated Product')
    })
    .catch(err => console.log(err));
};

/* exports.putEditCard('/name/update/:id', (req, res, next) => {
  let id = {
    _id: ObjectID(req.params.id)
  };

  dbase.collection("name").update({_id: id}, {$set:{'first_name': req.body.first_name, 'last_name': req.body.last_name}}, (err, result) => {
    if(err) {
      throw err;
    }
    res.send('user updated sucessfully');
  });
}); */

exports.putEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedDate = req.body.date;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedSource = req.body.source;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.date = updatedDate;
      product.description = updatedDescription;
      product.imageUrl = updatedImageUrl;
      product.source = updatedSource;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.json(products)
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.send('Deleted Product.  Check the database');
    })
    .catch(err => console.log(err));
};
