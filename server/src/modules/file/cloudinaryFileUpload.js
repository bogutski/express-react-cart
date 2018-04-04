import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export function cloudMultiUpload(localFileUrlArr) {
  return Promise.all(localFileUrlArr
    .map(el => cloudinary.uploader.upload(el, result => result)));
}

export function cloudDelete(pid) {
  return cloudinary.v2.uploader.destroy(
    pid,
    { invalidate: true },
    result => result,
  );
}
