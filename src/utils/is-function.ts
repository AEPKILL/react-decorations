const FUNCION_TYPE_STRING = typeof isFunction;
/**
 * 判断是否是一个函数
 *
 * @export
 * @template T
 * @param {T} fnLike
 * @returns {boolean}
 * @example
 * class A {} // not a function
 * function A {} // function
 * const A = () => 2333 // function
 */
// tslint:disable-next-line:no-any
export default function isFunction(fnLike: any): boolean {
  if (typeof fnLike === FUNCION_TYPE_STRING) {
    const fnString = fnLike.toString();
    // equal with fnString.startWith('class'), but `startWith` dont work on all browser and i don't want to use polyfill.
    // `const fn = class => class` SyntaxError
    return !(
      fnString[0] === 'c' &&
      fnString[1] === 'l' &&
      fnString[2] === 'a' &&
      fnString[3] === 's' &&
      fnString[4] === 's'
    );
  }
  return false;
}
