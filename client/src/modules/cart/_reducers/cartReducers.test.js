import cart from './cartReducers';

describe('cart reducer', () => {
  it('has a default state', () => {
    expect(cart(undefined, {}))
      .toEqual({
        cart: [],
        cartVisible: false,
        totalCount: 0,
        totalPrice: 0,
      });
  });
});
