import isGetter from './is-getter';

describe('utils/isFunction', () => {
  // we don't test more such as number, null and other
  // because we use isFunction and isFunction was pass these test

  test('not getter need return false', () => {
    expect(isGetter({ name: 'AEPKILL' }, 'name')).toBe(false);
    expect(
      isGetter(
        {
          name() {
            return 'AEPKILL';
          }
        },
        'name'
      )
    ).toBe(false);
  });

  test('when give a not exist property need return false', () => {
    expect(isGetter({ name: 'AEPKILL' }, 'names' as 'name')).toBe(false);
  });

  test(`give 'null' not to throw exception and return false`, () => {
    expect(() => isGetter(null, 'xxxx')).not.toThrow();
    expect(isGetter(null, 'xxx')).toBe(false);
  });

  test('getter need return true', () => {
    expect(
      isGetter(
        {
          get name() {
            return 'AEPKILL';
          }
        },
        'name'
      )
    ).toBe(true);
  });
});
