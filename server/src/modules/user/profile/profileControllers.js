import message from '../../messages/messages';
import User from './../userModel';

export async function updateShipping(req, res) {
  const id = req.params.userId;

  User.update({ _id: id }, { $set: { shipping: req.body } })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200)
          .json(message.success('Shipping updated'));
      } else {
        res.status(400)
          .json(message.error('User not found'));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .json(message.error(err));
    });
}

export async function updateBilling(req, res) {
}
