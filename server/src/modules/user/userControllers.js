import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './userModel';

export const userGetAll = (req, res, next) => {
  User.find()
    .select('-__v')
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ message: { text: err, type: 'error' } });
    });
};

export const userCreate = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((doc) => {
      if (doc.length > 0) {
        /* eslint no-throw-literal: 0 */
        throw 'Mail exist';
      }

      bcrypt.hash(req.body.password, 10, (bcryptError, hash) => {
        if (bcryptError) {
          return res.status(500).json({ message: { text: bcryptError, type: 'error' } });
        }

        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          password: hash,
        });

        user
          .save()
          .then((result) => {
            res.status(201).json({
              message: { text: 'User created', type: 'success' },
            });
          })
          .catch((userError) => {
            res.status(500).json({
              message: { text: userError, type: 'error' },
            });
          });
      });
    })
    .catch((error) => {
      if (error === 'Mail exist') {
        res.status(409).json({
          message: { text: 'Mail exist', type: 'error' },
        });
      }
    });
};

export const userLogin = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user.length) {
        res.status(401).json({
          message: { text: 'Auth failed. Email', type: 'error' },
        });
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          res.status(401).json({
            message: { text: 'Auth failed. Email', type: 'error' },
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: '1h',
            },
          );
          return res.status(200).json({
            message: { text: 'Auth success', type: 'success' },
            token,
            userId: user[0]._id,
          });
        }

        res.status(401).json({
          message: { text: 'Auth failed', type: 'error' },
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: { text: err, type: 'error' } });
    });
};

export const userGetById = (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select('-__v -password')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: { text: 'No user for provided id', type: 'error' } });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: { text: err, type: 'error' } });
    });
};

export const userUpdateById = (req, res, next) => {
  const id = req.params.userId;
  User.update({ _id: id }, { $set: req.body })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json({
          message: { text: 'User updated', type: 'success' },
        });
      } else {
        res.status(400).json({
          message: { text: 'User not found', type: 'error' },
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: { text: err, type: 'error' } });
    });
};

export const userDeleteById = (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then((doc) => {
      if (doc.result.n) {
        res.status(200).json({
          message: { text: 'User deleted', type: 'success' },
        });
      } else {
        res.status(400).json({
          message: { text: 'User not found', type: 'error' },
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: { text: err, type: 'error' } });
    });
};
