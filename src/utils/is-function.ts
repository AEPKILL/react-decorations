const FUNCION_TYPE_STRING = typeof isFunction;
/**
 * check if an object is a function
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
    // don't use fnLine.toString(), maybe it was overwrite `toString` method
    const fnString = Function.prototype.toString.call(fnLike);
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
