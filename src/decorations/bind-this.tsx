export interface BindThisOptions {
  excludes: Array<symbol | string>;
}
export function BindThis({ excludes }: BindThisOptions) {
  return function bind_this_decorator<
    // tslint:disable-next-line:no-any
    T extends { new (...args: any[]): React.Component }
  >(Construcor: T): T {
    return class extends Construcor {
      // tslint:disable-next-line:no-any
      constructor(...args: any[]) {
        super(...args);
        for (const name of Object.getOwnPropertyNames(Construcor.prototype)) {
          if (
            !!Object.getOwnPropertyDescriptor(Construcor.prototype, 'name')
              .get &&
            typeof Construcor.prototype[name] === 'function' &&
            excludes.indexOf(name) === -1
          ) {
            console.log(this, name);
            this[name] = this[name].bind(this);
          }
        }
      }
    };
  };
}
