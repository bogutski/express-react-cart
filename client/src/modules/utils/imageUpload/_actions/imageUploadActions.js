import { post } from '../../../utils/httpRequest/httpMethods';

export function fileUpload(formData) {
  return () =>
    post(
      '/file',
      formData,
      'multipart/form-data',
    );
}

export function fileDeleteById() {
  return () => {};
}
