import * as fromProducts from './products.actions';

describe('yProductss', () => {
  it('should return an action', () => {
    expect(fromProducts.loadProductsSuccess.type).toBe('[Product] Load Products Success');
  });
});
