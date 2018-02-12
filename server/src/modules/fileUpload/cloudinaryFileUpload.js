import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: '-',
  api_key: '-',
  api_secret: '-',
});

cloudinary.uploader.upload(el, (result) => {
  console.log(result.url);
});

const cloudUpload = [];

export default cloudUpload;
