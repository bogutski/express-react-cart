import mongoose from 'mongoose';
import Vocabular from './vocabularModel';

export const vocabularGetAll = (req, res, next) => {
  Vocabular.find()
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

export const vocabularCreate = (req, res, next) => {
  console.log(req.body);
  const vocabular = new Vocabular({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });

  vocabular
    .save()
    .then((result) => {
      console.log(result);
      res.status(201)
        .json({
          message: {
            text: 'Vocabular created',
            type: 'success',
          },
        });
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

export const vocabularGetById = (req, res, next) => {
  const id = req.params.vocabularId;
  Vocabular.findById(id)
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
              text: 'No vocabular for provided id',
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

export const vocabularUpdateById = (req, res, next) => {
  const id = req.params.vocabularId;
  Vocabular.update({ _id: id }, { $set: req.body })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200)
          .json({
            message: {
              text: 'Vocabular updated',
              type: 'success',
            },
          });
      } else {
        res.status(400)
          .json({
            message: {
              text: 'Vocabular not found',
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

export const vocabularDeleteById = (req, res, next) => {
  const id = req.params.vocabularId;
  Vocabular.remove({ _id: id })
    .exec()
    .then((doc) => {
      if (doc.result.n) {
        res.status(200)
          .json({
            message: {
              text: 'Vocabular deleted',
              type: 'success',
            },
          });
      } else {
        res.status(400)
          .json({
            message: {
              text: 'Vocabular not found',
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

