import isFunction from './is-function';
/**
 * check if a property is a getter in the object instance
 *
 * @export
 * @param {object} obj
 * @param {(symbol | string)} name
 * @returns {boolean}
 */
export default function isGetter<T>(obj: T, name: keyof T): boolean {
  if (obj == null) {
    return false;
  }
  const descriptor = Object.getOwnPropertyDescriptor(obj, name);
  if (descriptor) {
    return isFunction(Object.getOwnPropertyDescriptor(obj, name).get);
  }
  return false;
}
