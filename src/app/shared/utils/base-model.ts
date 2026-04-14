import { ObjectBuilder, Params } from './base-builder';

export abstract class BaseModel<T> {
  static create<T extends BaseModel<T>>(this: new (...args: any[]) => T, params: Params<T>): T {
    const instance = new this(params);
    return instance.initBuilder(ObjectBuilder.new<T>());
  }

  protected abstract initBuilder(builder: ReturnType<typeof ObjectBuilder.new<T>>): T;
}
