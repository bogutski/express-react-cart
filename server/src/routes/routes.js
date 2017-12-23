import { Router } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Index' });
});

router.post('/product', (req, res) => {
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

router.get('/products', (req, res) => {
  Product.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/1', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default router;
