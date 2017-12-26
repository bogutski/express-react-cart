import mongoose from 'mongoose';
import Product from './productModel';

const productGetAll = (req, res, next) => {
  Product.find()
    .select('-__v')
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const productCreate = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const productGetById = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'No product for provided id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const productUpdateById = (req, res, next) => {
  const id = req.params.productId;
  Product.update({ _id: id }, { $set: req.body })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'Product updated',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const productDeleteById = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'Product deleted',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export { productGetAll, productCreate, productGetById, productUpdateById, productDeleteById };
