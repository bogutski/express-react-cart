import { patch } from '../../utils/httpRequest/httpMethods';

export function updateShipping(userId, data) {
  return () =>
    patch(
      `/user/shipping/${userId}`,
      data,
    );
}

export function updateBilling(userId, data) {
  return () =>
    patch(
      `/user/billing/${userId}`,
      data,
    );
}
