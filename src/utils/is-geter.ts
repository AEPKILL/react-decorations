import isFunction from './is-function';
/**
 * 判断对象的属性是否是一个 geter 属性
 *
 * @export
 * @param {object} obj
 * @param {(symbol | string)} name
 * @returns {boolean}
 */
export default function isGeter<T>(obj: T, name: keyof T): boolean {
  if (obj == null) {
    return false;
  }
  const descriptor = Object.getOwnPropertyDescriptor(obj, name);
  if (descriptor) {
    return isFunction(Object.getOwnPropertyDescriptor(obj, name).get);
  }
  return false;
}
