import isFunction from './is-function';

describe('utils/isFunction', () => {
  test('given a object,number,string,RegExp,class need return false', () => {
    class A {}
    expect(isFunction({})).toBe(false);
    expect(isFunction(2333)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(/---/)).toBe(false);
    expect(isFunction(A)).toBe(false);
  });
  test('givan a funcion or arrow function need return true', () => {
    expect(
      isFunction(function empty() {
        /** empty */
      })
    ).toBe(true);
    expect(isFunction(clas => clas)).toBe(true);
  });
});
