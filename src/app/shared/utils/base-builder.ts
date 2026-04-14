/**
 * OnlyProps<T>
 * -------------
 * Filters a type to keep only "regular" properties,
 * excluding any methods (functions) from T.
 *
 * Example:
 * type Example = { id: number; name: string; getName(): string };
 * OnlyProps<Example> => { id: number; name: string }
 */
type OnlyProps<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

/**
 * RequiredKeys<T>
 * ----------------
 * Extracts only the required keys from a type T.
 *
 * Explanation:
 * - Iterate over each key in T.
 * - Check if Pick<T, K> can be empty ({} extends Pick<T, K> ?)
 *   -> if true, the key is optional, so return `never`.
 *   -> if false, the key is required, so keep K.
 *
 * Example:
 * type User = { id: number; name?: string };
 * RequiredKeys<User> => "id"
 */
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// type RequiredProps<T> = Pick<T, RequiredKeys<T>>;
export type Params<T> = OnlyProps<T> & Partial<Omit<T, keyof OnlyProps<T>>>;

/**
 * MissingKeys<Target, Supplied>
 * ------------------------------
 * Computes which required keys of Target are missing in Supplied.
 *
 * Usage:
 * - Target: the full type of the final object.
 * - Supplied: properties that have already been set in the builder.
 *
 * Example:
 * type Target = { id: number; name?: string; email: string };
 * type Supplied = { id: number };
 * MissingKeys<Target, Supplied> => "email"
 */
type MissingKeys<Target, Supplied> = Exclude<RequiredKeys<OnlyProps<Target>>, keyof Supplied>;

/**
 * IWith<Target, Supplied>
 * ------------------------
 * Interface for the Builder pattern.
 *
 * - with<K>(key, value): adds a new property to the builder.
 * - build(): returns the final object if all required keys are set,
 *   otherwise returns a tuple indicating missing properties.
 */
export interface IWith<Target, Supplied = {}> {
  with<K extends Exclude<keyof OnlyProps<Target>, keyof Supplied>>(
    key: K,
    value: OnlyProps<Target>[K],
  ): IWith<Target, Supplied & Pick<OnlyProps<Target>, K>>;

  build(): MissingKeys<Target, Supplied> extends never
    ? Target
    : ['ERROR: properties missing', MissingKeys<Target, Supplied>];
}

/**
 * Builder<Target, Supplied>
 * --------------------------
 * Implements the IWith interface.
 *
 * - Tracks a partial object `target`.
 * - `with` adds a property immutably and updates the type of supplied keys.
 * - `build` returns the final object typed as Target.
 */
class Builder<Target, Supplied = {}> implements IWith<Target, Supplied> {
  constructor(private target: Partial<OnlyProps<Target>>) {}

  with<K extends Exclude<keyof OnlyProps<Target>, keyof Supplied>>(
    key: K,
    value: OnlyProps<Target>[K],
  ): any {
    const newTarget = { ...this.target, [key]: value };
    return new Builder<Target, Supplied & Pick<OnlyProps<Target>, K>>(newTarget);
  }

  build(): Target {
    return this.target as Target;
  }
}

/**
 * ObjectBuilder
 * --------------
 * Factory class for creating new typed builders.
 */
export class ObjectBuilder {
  public static new<Target>(): IWith<Target, {}> {
    return new Builder<Target>({});
  }
}
