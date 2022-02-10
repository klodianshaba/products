import * as fromCategories from './categories.actions';

describe('yCategoriess', () => {
  it('should return an action', () => {
    expect(fromCategories.yCategoriess().type).toBe('[Categories] Y Categoriess');
  });
});
