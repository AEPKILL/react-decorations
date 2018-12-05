import isFunction from './is-function';

describe('utils/isFunction', () => {
  test('given a object,number,string,RegExp,class need return false', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction(2333)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(/---/)).toBe(false);
    expect(isFunction(class A {})).toBe(false);
  });

  test('givan a funcion or arrow function need return true', () => {
    expect(
      isFunction(function empty() {
        /** empty */
      })
    ).toBe(true);
    expect(isFunction(clas => clas)).toBe(true);
  });

  test('even funtion overwrite `toString` method also return true', () => {
    function overwriteToString() {
      /** empty */
    }
    overwriteToString.toString = () => `class A{}`;
    expect(isFunction(overwriteToString)).toBe(true);
  });

  test('even class overwrite `toString` method also return false', () => {
    expect(
      isFunction(
        // tslint:disable-next-line:max-classes-per-file
        class A {
          static toString() {
            return 'function A(){}';
          }
        }
      )
    ).toBe(false);
  });
});
