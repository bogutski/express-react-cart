import mongoose from 'mongoose';
import Vocabular from './vocabularModel';
import message from './../messages/messages';

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
        .json(message.error(err));
    });
};

export const vocabularCreate = (req, res, next) => {
  const vocabular = new Vocabular({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    terms: req.body.terms,
  });

  vocabular
    .save()
    .then((result) => {
      console.log(result);
      res.status(201)
        .json(message.success('Vocabular created'));
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err));
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
          .json(message.error('No vocabular for provided id'));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err.message));
    });
};

export const vocabularGetByParams = (req, res, next) => {
  console.log(req.body);
  Vocabular.find(req.body)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200)
          .json(doc);
      } else {
        res.status(404)
          .json(message.error('No vocabular for provided params'));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err.message));
    });
};

export const vocabularUpdateById = (req, res, next) => {
  const id = req.params.vocabularId;
  Vocabular.update({ _id: id }, { $set: req.body })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200)
          .json(message.success('Vocabular updated'));
      } else {
        res.status(400)
          .json(message.error('Vocabular not found'));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err));
    });
};

export const vocabularDeleteById = (req, res, next) => {
  const id = req.params.vocabularId;
  Vocabular.remove({ _id: id })
    .exec()
    .then((doc) => {
      if (doc.result.n) {
        res.status(200)
          .json(message.success('Vocabular deleted'));
      } else {
        res.status(400)
          .json(message.error('Vocabular not found'));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err));
    });
};

