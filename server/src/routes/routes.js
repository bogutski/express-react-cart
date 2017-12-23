import { Router } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product';

const router = Router();

router.get('/', (req, res) => {
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
});

router.post('/', (req, res) => {
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
});

router.get('/:productId', (req, res) => {
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
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;

  const updateObject = {
    name: req.body.name,
    price: req.body.price,
  };

  console.log(id);
  console.log(req.body);
  console.log(updateObject);

  // Product.update({ _id: id }, {
  //   $set: updateObject,
  // }).exec()
  //   .then(() => res.status(200).json({ message: 'Product updated' }))
  //   .catch(err => res.status(500).json({ error: err }));
});

export default router;
