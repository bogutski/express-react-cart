import mongoose from 'mongoose';
import Product from './productModel';

export const productGetAll = (req, res, next) => {
  Product.find()
    .select('-__v')
    .exec()
    .then((docs) => {
      res.status(200)
        .json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json({
          message: {
            text: err,
            type: 'error',
          },
        });
    });
};

export const productCreate = (req, res, next) => {
  console.log(req.body);
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    // image: ' - ', // req.file.path && null,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201)
        .json({
          message: {
            text: 'Product created',
            type: 'success',
          },
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json({
          error: err,
        });
    });
};

export const productGetById = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200)
          .json(doc);
      } else {
        res.status(404)
          .json({
            message: {
              text: 'No product for provided id',
              type: 'error',
            },
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json({ error: err });
    });
};

export const productUpdateById = (req, res, next) => {
  const id = req.params.productId;
  Product.update({ _id: id }, { $set: req.body })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200)
          .json({
            message: {
              text: 'Product updated',
              type: 'success',
            },
          });
      } else {
        res.status(400)
          .json({
            message: {
              text: 'Product not found',
              type: 'error',
            },
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json({
          message: {
            text: err,
            type: 'error',
          },
        });
    });
};

export const productDeleteById = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((doc) => {
      if (doc.result.n) {
        res.status(200)
          .json({
            message: {
              text: 'Product deleted',
              type: 'success',
            },
          });
      } else {
        res.status(400)
          .json({
            message: {
              text: 'Product not found',
              type: 'error',
            },
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json({
          message: {
            text: err,
            type: 'error',
          },
        });
    });
};

