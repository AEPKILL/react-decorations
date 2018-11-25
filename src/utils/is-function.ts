const FUNCION_TYPE_STRING = typeof isFunction;
/**
 * 判断是否是一个函数
 *
 * @export
 * @template T
 * @param {T} fnLike
 * @returns {boolean}
 */
export default function isFunction<T>(fnLike: T): boolean {
  return typeof fnLike === FUNCION_TYPE_STRING;
}
