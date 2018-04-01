import _ from 'lodash';
import message from '../messages/messages';
import { cloudMultiUpload, cloudDelete } from './cloudinaryFileUpload';

export const uploadFile = async (req, res) => {
  let images = [];

  if (!_.isEmpty(req.files)) {
    // Paths to local upload folder
    const filesArr = req.files.map(el => el.path);
    const cloudUrls = await cloudMultiUpload(filesArr);

    images = cloudUrls.map(el => ({
      pid: el.public_id,
      url: el.url,
    }));
  }

  res.status(200)
    .json(images);
};

export const deleteFile = async (req, res) => {
  const deleteResult = await cloudDelete(req.body.pid);
  if (deleteResult.result === 'ok') {
    res.status(200)
      .json(message.success('File was deleted'));
  } else {
    res.status(500)
      .json(message.error(deleteResult.result));
  }
};
