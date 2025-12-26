
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AssetType
 * 
 */
export type AssetType = $Result.DefaultSelection<Prisma.$AssetTypePayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NotificationLog
 * 
 */
export type NotificationLog = $Result.DefaultSelection<Prisma.$NotificationLogPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssetStatus: {
  AVAILABLE: 'AVAILABLE',
  IN_USE: 'IN_USE',
  MAINTENANCE: 'MAINTENANCE',
  RETIRED: 'RETIRED'
};

export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus]


export const Role: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TransactionAction: {
  CHECK_OUT: 'CHECK_OUT',
  CHECK_IN: 'CHECK_IN'
};

export type TransactionAction = (typeof TransactionAction)[keyof typeof TransactionAction]

}

export type AssetStatus = $Enums.AssetStatus

export const AssetStatus: typeof $Enums.AssetStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TransactionAction = $Enums.TransactionAction

export const TransactionAction: typeof $Enums.TransactionAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AssetTypes
 * const assetTypes = await prisma.assetType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AssetTypes
   * const assetTypes = await prisma.assetType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.assetType`: Exposes CRUD operations for the **AssetType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetTypes
    * const assetTypes = await prisma.assetType.findMany()
    * ```
    */
  get assetType(): Prisma.AssetTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationLog`: Exposes CRUD operations for the **NotificationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationLogs
    * const notificationLogs = await prisma.notificationLog.findMany()
    * ```
    */
  get notificationLog(): Prisma.NotificationLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AssetType: 'AssetType',
    Asset: 'Asset',
    User: 'User',
    NotificationLog: 'NotificationLog',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "assetType" | "asset" | "user" | "notificationLog" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AssetType: {
        payload: Prisma.$AssetTypePayload<ExtArgs>
        fields: Prisma.AssetTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          findFirst: {
            args: Prisma.AssetTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          findMany: {
            args: Prisma.AssetTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>[]
          }
          create: {
            args: Prisma.AssetTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          createMany: {
            args: Prisma.AssetTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>[]
          }
          delete: {
            args: Prisma.AssetTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          update: {
            args: Prisma.AssetTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          deleteMany: {
            args: Prisma.AssetTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>[]
          }
          upsert: {
            args: Prisma.AssetTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          aggregate: {
            args: Prisma.AssetTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetType>
          }
          groupBy: {
            args: Prisma.AssetTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AssetTypeCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NotificationLog: {
        payload: Prisma.$NotificationLogPayload<ExtArgs>
        fields: Prisma.NotificationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          findFirst: {
            args: Prisma.NotificationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          findMany: {
            args: Prisma.NotificationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[]
          }
          create: {
            args: Prisma.NotificationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          createMany: {
            args: Prisma.NotificationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[]
          }
          delete: {
            args: Prisma.NotificationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          update: {
            args: Prisma.NotificationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          deleteMany: {
            args: Prisma.NotificationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[]
          }
          upsert: {
            args: Prisma.NotificationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>
          }
          aggregate: {
            args: Prisma.NotificationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationLog>
          }
          groupBy: {
            args: Prisma.NotificationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationLogCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationLogCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    assetType?: AssetTypeOmit
    asset?: AssetOmit
    user?: UserOmit
    notificationLog?: NotificationLogOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssetTypeCountOutputType
   */

  export type AssetTypeCountOutputType = {
    assets: number
  }

  export type AssetTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetTypeCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * AssetTypeCountOutputType without action
   */
  export type AssetTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetTypeCountOutputType
     */
    select?: AssetTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetTypeCountOutputType without action
   */
  export type AssetTypeCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    transactions: number
    notifications: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AssetCountOutputTypeCountTransactionsArgs
    notifications?: boolean | AssetCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AssetType
   */

  export type AggregateAssetType = {
    _count: AssetTypeCountAggregateOutputType | null
    _avg: AssetTypeAvgAggregateOutputType | null
    _sum: AssetTypeSumAggregateOutputType | null
    _min: AssetTypeMinAggregateOutputType | null
    _max: AssetTypeMaxAggregateOutputType | null
  }

  export type AssetTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type AssetTypeSumAggregateOutputType = {
    id: number | null
  }

  export type AssetTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type AssetTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type AssetTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type AssetTypeAvgAggregateInputType = {
    id?: true
  }

  export type AssetTypeSumAggregateInputType = {
    id?: true
  }

  export type AssetTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AssetTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AssetTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type AssetTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetType to aggregate.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetTypes
    **/
    _count?: true | AssetTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetTypeMaxAggregateInputType
  }

  export type GetAssetTypeAggregateType<T extends AssetTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetType[P]>
      : GetScalarType<T[P], AggregateAssetType[P]>
  }




  export type AssetTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetTypeWhereInput
    orderBy?: AssetTypeOrderByWithAggregationInput | AssetTypeOrderByWithAggregationInput[]
    by: AssetTypeScalarFieldEnum[] | AssetTypeScalarFieldEnum
    having?: AssetTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetTypeCountAggregateInputType | true
    _avg?: AssetTypeAvgAggregateInputType
    _sum?: AssetTypeSumAggregateInputType
    _min?: AssetTypeMinAggregateInputType
    _max?: AssetTypeMaxAggregateInputType
  }

  export type AssetTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: AssetTypeCountAggregateOutputType | null
    _avg: AssetTypeAvgAggregateOutputType | null
    _sum: AssetTypeSumAggregateOutputType | null
    _min: AssetTypeMinAggregateOutputType | null
    _max: AssetTypeMaxAggregateOutputType | null
  }

  type GetAssetTypeGroupByPayload<T extends AssetTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AssetTypeGroupByOutputType[P]>
        }
      >
    >


  export type AssetTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    assets?: boolean | AssetType$assetsArgs<ExtArgs>
    _count?: boolean | AssetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetType"]>

  export type AssetTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["assetType"]>

  export type AssetTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["assetType"]>

  export type AssetTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type AssetTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["assetType"]>
  export type AssetTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetType$assetsArgs<ExtArgs>
    _count?: boolean | AssetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssetTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssetTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetType"
    objects: {
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["assetType"]>
    composites: {}
  }

  type AssetTypeGetPayload<S extends boolean | null | undefined | AssetTypeDefaultArgs> = $Result.GetResult<Prisma.$AssetTypePayload, S>

  type AssetTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetTypeCountAggregateInputType | true
    }

  export interface AssetTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetType'], meta: { name: 'AssetType' } }
    /**
     * Find zero or one AssetType that matches the filter.
     * @param {AssetTypeFindUniqueArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetTypeFindUniqueArgs>(args: SelectSubset<T, AssetTypeFindUniqueArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetTypeFindUniqueOrThrowArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindFirstArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetTypeFindFirstArgs>(args?: SelectSubset<T, AssetTypeFindFirstArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindFirstOrThrowArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetTypes
     * const assetTypes = await prisma.assetType.findMany()
     * 
     * // Get first 10 AssetTypes
     * const assetTypes = await prisma.assetType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetTypeWithIdOnly = await prisma.assetType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetTypeFindManyArgs>(args?: SelectSubset<T, AssetTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetType.
     * @param {AssetTypeCreateArgs} args - Arguments to create a AssetType.
     * @example
     * // Create one AssetType
     * const AssetType = await prisma.assetType.create({
     *   data: {
     *     // ... data to create a AssetType
     *   }
     * })
     * 
     */
    create<T extends AssetTypeCreateArgs>(args: SelectSubset<T, AssetTypeCreateArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetTypes.
     * @param {AssetTypeCreateManyArgs} args - Arguments to create many AssetTypes.
     * @example
     * // Create many AssetTypes
     * const assetType = await prisma.assetType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetTypeCreateManyArgs>(args?: SelectSubset<T, AssetTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetTypes and returns the data saved in the database.
     * @param {AssetTypeCreateManyAndReturnArgs} args - Arguments to create many AssetTypes.
     * @example
     * // Create many AssetTypes
     * const assetType = await prisma.assetType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetTypes and only return the `id`
     * const assetTypeWithIdOnly = await prisma.assetType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetType.
     * @param {AssetTypeDeleteArgs} args - Arguments to delete one AssetType.
     * @example
     * // Delete one AssetType
     * const AssetType = await prisma.assetType.delete({
     *   where: {
     *     // ... filter to delete one AssetType
     *   }
     * })
     * 
     */
    delete<T extends AssetTypeDeleteArgs>(args: SelectSubset<T, AssetTypeDeleteArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetType.
     * @param {AssetTypeUpdateArgs} args - Arguments to update one AssetType.
     * @example
     * // Update one AssetType
     * const assetType = await prisma.assetType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetTypeUpdateArgs>(args: SelectSubset<T, AssetTypeUpdateArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetTypes.
     * @param {AssetTypeDeleteManyArgs} args - Arguments to filter AssetTypes to delete.
     * @example
     * // Delete a few AssetTypes
     * const { count } = await prisma.assetType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetTypeDeleteManyArgs>(args?: SelectSubset<T, AssetTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetTypes
     * const assetType = await prisma.assetType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetTypeUpdateManyArgs>(args: SelectSubset<T, AssetTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetTypes and returns the data updated in the database.
     * @param {AssetTypeUpdateManyAndReturnArgs} args - Arguments to update many AssetTypes.
     * @example
     * // Update many AssetTypes
     * const assetType = await prisma.assetType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetTypes and only return the `id`
     * const assetTypeWithIdOnly = await prisma.assetType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetType.
     * @param {AssetTypeUpsertArgs} args - Arguments to update or create a AssetType.
     * @example
     * // Update or create a AssetType
     * const assetType = await prisma.assetType.upsert({
     *   create: {
     *     // ... data to create a AssetType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetType we want to update
     *   }
     * })
     */
    upsert<T extends AssetTypeUpsertArgs>(args: SelectSubset<T, AssetTypeUpsertArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeCountArgs} args - Arguments to filter AssetTypes to count.
     * @example
     * // Count the number of AssetTypes
     * const count = await prisma.assetType.count({
     *   where: {
     *     // ... the filter for the AssetTypes we want to count
     *   }
     * })
    **/
    count<T extends AssetTypeCountArgs>(
      args?: Subset<T, AssetTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetTypeAggregateArgs>(args: Subset<T, AssetTypeAggregateArgs>): Prisma.PrismaPromise<GetAssetTypeAggregateType<T>>

    /**
     * Group by AssetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetTypeGroupByArgs['orderBy'] }
        : { orderBy?: AssetTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetType model
   */
  readonly fields: AssetTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends AssetType$assetsArgs<ExtArgs> = {}>(args?: Subset<T, AssetType$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetType model
   */
  interface AssetTypeFieldRefs {
    readonly id: FieldRef<"AssetType", 'Int'>
    readonly name: FieldRef<"AssetType", 'String'>
    readonly description: FieldRef<"AssetType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssetType findUnique
   */
  export type AssetTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType findUniqueOrThrow
   */
  export type AssetTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType findFirst
   */
  export type AssetTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetTypes.
     */
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType findFirstOrThrow
   */
  export type AssetTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetTypes.
     */
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType findMany
   */
  export type AssetTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetTypes to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType create
   */
  export type AssetTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetType.
     */
    data: XOR<AssetTypeCreateInput, AssetTypeUncheckedCreateInput>
  }

  /**
   * AssetType createMany
   */
  export type AssetTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetTypes.
     */
    data: AssetTypeCreateManyInput | AssetTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetType createManyAndReturn
   */
  export type AssetTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AssetTypes.
     */
    data: AssetTypeCreateManyInput | AssetTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetType update
   */
  export type AssetTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetType.
     */
    data: XOR<AssetTypeUpdateInput, AssetTypeUncheckedUpdateInput>
    /**
     * Choose, which AssetType to update.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType updateMany
   */
  export type AssetTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetTypes.
     */
    data: XOR<AssetTypeUpdateManyMutationInput, AssetTypeUncheckedUpdateManyInput>
    /**
     * Filter which AssetTypes to update
     */
    where?: AssetTypeWhereInput
    /**
     * Limit how many AssetTypes to update.
     */
    limit?: number
  }

  /**
   * AssetType updateManyAndReturn
   */
  export type AssetTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * The data used to update AssetTypes.
     */
    data: XOR<AssetTypeUpdateManyMutationInput, AssetTypeUncheckedUpdateManyInput>
    /**
     * Filter which AssetTypes to update
     */
    where?: AssetTypeWhereInput
    /**
     * Limit how many AssetTypes to update.
     */
    limit?: number
  }

  /**
   * AssetType upsert
   */
  export type AssetTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetType to update in case it exists.
     */
    where: AssetTypeWhereUniqueInput
    /**
     * In case the AssetType found by the `where` argument doesn't exist, create a new AssetType with this data.
     */
    create: XOR<AssetTypeCreateInput, AssetTypeUncheckedCreateInput>
    /**
     * In case the AssetType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetTypeUpdateInput, AssetTypeUncheckedUpdateInput>
  }

  /**
   * AssetType delete
   */
  export type AssetTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter which AssetType to delete.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType deleteMany
   */
  export type AssetTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetTypes to delete
     */
    where?: AssetTypeWhereInput
    /**
     * Limit how many AssetTypes to delete.
     */
    limit?: number
  }

  /**
   * AssetType.assets
   */
  export type AssetType$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * AssetType without action
   */
  export type AssetTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetType
     */
    omit?: AssetTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    typeId: number | null
  }

  export type AssetSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    typeId: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    serialNumber: string | null
    status: $Enums.AssetStatus | null
    purchaseDate: Date | null
    price: Decimal | null
    returnDate: Date | null
    typeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    serialNumber: string | null
    status: $Enums.AssetStatus | null
    purchaseDate: Date | null
    price: Decimal | null
    returnDate: Date | null
    typeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    code: number
    name: number
    serialNumber: number
    status: number
    purchaseDate: number
    price: number
    returnDate: number
    typeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    id?: true
    price?: true
    typeId?: true
  }

  export type AssetSumAggregateInputType = {
    id?: true
    price?: true
    typeId?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    serialNumber?: true
    status?: true
    purchaseDate?: true
    price?: true
    returnDate?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    serialNumber?: true
    status?: true
    purchaseDate?: true
    price?: true
    returnDate?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    serialNumber?: true
    status?: true
    purchaseDate?: true
    price?: true
    returnDate?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: number
    code: string
    name: string
    serialNumber: string | null
    status: $Enums.AssetStatus
    purchaseDate: Date | null
    price: Decimal | null
    returnDate: Date | null
    typeId: number
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    serialNumber?: boolean
    status?: boolean
    purchaseDate?: boolean
    price?: boolean
    returnDate?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    transactions?: boolean | Asset$transactionsArgs<ExtArgs>
    notifications?: boolean | Asset$notificationsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    serialNumber?: boolean
    status?: boolean
    purchaseDate?: boolean
    price?: boolean
    returnDate?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    serialNumber?: boolean
    status?: boolean
    purchaseDate?: boolean
    price?: boolean
    returnDate?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    serialNumber?: boolean
    status?: boolean
    purchaseDate?: boolean
    price?: boolean
    returnDate?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "serialNumber" | "status" | "purchaseDate" | "price" | "returnDate" | "typeId" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    transactions?: boolean | Asset$transactionsArgs<ExtArgs>
    notifications?: boolean | Asset$notificationsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      type: Prisma.$AssetTypePayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      serialNumber: string | null
      status: $Enums.AssetStatus
      purchaseDate: Date | null
      price: Prisma.Decimal | null
      returnDate: Date | null
      typeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AssetTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetTypeDefaultArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Asset$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Asset$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'Int'>
    readonly code: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly serialNumber: FieldRef<"Asset", 'String'>
    readonly status: FieldRef<"Asset", 'AssetStatus'>
    readonly purchaseDate: FieldRef<"Asset", 'DateTime'>
    readonly price: FieldRef<"Asset", 'Decimal'>
    readonly returnDate: FieldRef<"Asset", 'DateTime'>
    readonly typeId: FieldRef<"Asset", 'Int'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.transactions
   */
  export type Asset$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Asset.notifications
   */
  export type Asset$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    where?: NotificationLogWhereInput
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    cursor?: NotificationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    department: string | null
    image: string | null
    fcmToken: string | null
    fcmSubscribedAt: Date | null
    fcmDeviceInfo: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    department: string | null
    image: string | null
    fcmToken: string | null
    fcmSubscribedAt: Date | null
    fcmDeviceInfo: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    department: number
    image: number
    fcmToken: number
    fcmSubscribedAt: number
    fcmDeviceInfo: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    department?: true
    image?: true
    fcmToken?: true
    fcmSubscribedAt?: true
    fcmDeviceInfo?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    department?: true
    image?: true
    fcmToken?: true
    fcmSubscribedAt?: true
    fcmDeviceInfo?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    department?: true
    image?: true
    fcmToken?: true
    fcmSubscribedAt?: true
    fcmDeviceInfo?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    department: string | null
    image: string | null
    fcmToken: string | null
    fcmSubscribedAt: Date | null
    fcmDeviceInfo: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    image?: boolean
    fcmToken?: boolean
    fcmSubscribedAt?: boolean
    fcmDeviceInfo?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    image?: boolean
    fcmToken?: boolean
    fcmSubscribedAt?: boolean
    fcmDeviceInfo?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    image?: boolean
    fcmToken?: boolean
    fcmSubscribedAt?: boolean
    fcmDeviceInfo?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    image?: boolean
    fcmToken?: boolean
    fcmSubscribedAt?: boolean
    fcmDeviceInfo?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "department" | "image" | "fcmToken" | "fcmSubscribedAt" | "fcmDeviceInfo" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      department: string | null
      image: string | null
      fcmToken: string | null
      fcmSubscribedAt: Date | null
      fcmDeviceInfo: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly department: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly fcmToken: FieldRef<"User", 'String'>
    readonly fcmSubscribedAt: FieldRef<"User", 'DateTime'>
    readonly fcmDeviceInfo: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    where?: NotificationLogWhereInput
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    cursor?: NotificationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NotificationLog
   */

  export type AggregateNotificationLog = {
    _count: NotificationLogCountAggregateOutputType | null
    _avg: NotificationLogAvgAggregateOutputType | null
    _sum: NotificationLogSumAggregateOutputType | null
    _min: NotificationLogMinAggregateOutputType | null
    _max: NotificationLogMaxAggregateOutputType | null
  }

  export type NotificationLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    assetId: number | null
  }

  export type NotificationLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    assetId: number | null
  }

  export type NotificationLogMinAggregateOutputType = {
    id: number | null
    type: string | null
    status: string | null
    message: string | null
    sentAt: Date | null
    userId: number | null
    assetId: number | null
  }

  export type NotificationLogMaxAggregateOutputType = {
    id: number | null
    type: string | null
    status: string | null
    message: string | null
    sentAt: Date | null
    userId: number | null
    assetId: number | null
  }

  export type NotificationLogCountAggregateOutputType = {
    id: number
    type: number
    status: number
    message: number
    sentAt: number
    userId: number
    assetId: number
    _all: number
  }


  export type NotificationLogAvgAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
  }

  export type NotificationLogSumAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
  }

  export type NotificationLogMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    message?: true
    sentAt?: true
    userId?: true
    assetId?: true
  }

  export type NotificationLogMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    message?: true
    sentAt?: true
    userId?: true
    assetId?: true
  }

  export type NotificationLogCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    message?: true
    sentAt?: true
    userId?: true
    assetId?: true
    _all?: true
  }

  export type NotificationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationLog to aggregate.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationLogs
    **/
    _count?: true | NotificationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationLogMaxAggregateInputType
  }

  export type GetNotificationLogAggregateType<T extends NotificationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationLog[P]>
      : GetScalarType<T[P], AggregateNotificationLog[P]>
  }




  export type NotificationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationLogWhereInput
    orderBy?: NotificationLogOrderByWithAggregationInput | NotificationLogOrderByWithAggregationInput[]
    by: NotificationLogScalarFieldEnum[] | NotificationLogScalarFieldEnum
    having?: NotificationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationLogCountAggregateInputType | true
    _avg?: NotificationLogAvgAggregateInputType
    _sum?: NotificationLogSumAggregateInputType
    _min?: NotificationLogMinAggregateInputType
    _max?: NotificationLogMaxAggregateInputType
  }

  export type NotificationLogGroupByOutputType = {
    id: number
    type: string
    status: string
    message: string | null
    sentAt: Date
    userId: number
    assetId: number
    _count: NotificationLogCountAggregateOutputType | null
    _avg: NotificationLogAvgAggregateOutputType | null
    _sum: NotificationLogSumAggregateOutputType | null
    _min: NotificationLogMinAggregateOutputType | null
    _max: NotificationLogMaxAggregateOutputType | null
  }

  type GetNotificationLogGroupByPayload<T extends NotificationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>
        }
      >
    >


  export type NotificationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    userId?: boolean
    assetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationLog"]>

  export type NotificationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    userId?: boolean
    assetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationLog"]>

  export type NotificationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    userId?: boolean
    assetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationLog"]>

  export type NotificationLogSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    userId?: boolean
    assetId?: boolean
  }

  export type NotificationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "message" | "sentAt" | "userId" | "assetId", ExtArgs["result"]["notificationLog"]>
  export type NotificationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type NotificationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type NotificationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $NotificationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      status: string
      message: string | null
      sentAt: Date
      userId: number
      assetId: number
    }, ExtArgs["result"]["notificationLog"]>
    composites: {}
  }

  type NotificationLogGetPayload<S extends boolean | null | undefined | NotificationLogDefaultArgs> = $Result.GetResult<Prisma.$NotificationLogPayload, S>

  type NotificationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationLogCountAggregateInputType | true
    }

  export interface NotificationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationLog'], meta: { name: 'NotificationLog' } }
    /**
     * Find zero or one NotificationLog that matches the filter.
     * @param {NotificationLogFindUniqueArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationLogFindUniqueArgs>(args: SelectSubset<T, NotificationLogFindUniqueArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationLogFindUniqueOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationLogFindFirstArgs>(args?: SelectSubset<T, NotificationLogFindFirstArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany()
     * 
     * // Get first 10 NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationLogFindManyArgs>(args?: SelectSubset<T, NotificationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationLog.
     * @param {NotificationLogCreateArgs} args - Arguments to create a NotificationLog.
     * @example
     * // Create one NotificationLog
     * const NotificationLog = await prisma.notificationLog.create({
     *   data: {
     *     // ... data to create a NotificationLog
     *   }
     * })
     * 
     */
    create<T extends NotificationLogCreateArgs>(args: SelectSubset<T, NotificationLogCreateArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationLogs.
     * @param {NotificationLogCreateManyArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationLogCreateManyArgs>(args?: SelectSubset<T, NotificationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationLogs and returns the data saved in the database.
     * @param {NotificationLogCreateManyAndReturnArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationLogs and only return the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationLog.
     * @param {NotificationLogDeleteArgs} args - Arguments to delete one NotificationLog.
     * @example
     * // Delete one NotificationLog
     * const NotificationLog = await prisma.notificationLog.delete({
     *   where: {
     *     // ... filter to delete one NotificationLog
     *   }
     * })
     * 
     */
    delete<T extends NotificationLogDeleteArgs>(args: SelectSubset<T, NotificationLogDeleteArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationLog.
     * @param {NotificationLogUpdateArgs} args - Arguments to update one NotificationLog.
     * @example
     * // Update one NotificationLog
     * const notificationLog = await prisma.notificationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationLogUpdateArgs>(args: SelectSubset<T, NotificationLogUpdateArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationLogs.
     * @param {NotificationLogDeleteManyArgs} args - Arguments to filter NotificationLogs to delete.
     * @example
     * // Delete a few NotificationLogs
     * const { count } = await prisma.notificationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationLogDeleteManyArgs>(args?: SelectSubset<T, NotificationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationLogs
     * const notificationLog = await prisma.notificationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationLogUpdateManyArgs>(args: SelectSubset<T, NotificationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationLogs and returns the data updated in the database.
     * @param {NotificationLogUpdateManyAndReturnArgs} args - Arguments to update many NotificationLogs.
     * @example
     * // Update many NotificationLogs
     * const notificationLog = await prisma.notificationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationLogs and only return the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationLog.
     * @param {NotificationLogUpsertArgs} args - Arguments to update or create a NotificationLog.
     * @example
     * // Update or create a NotificationLog
     * const notificationLog = await prisma.notificationLog.upsert({
     *   create: {
     *     // ... data to create a NotificationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationLog we want to update
     *   }
     * })
     */
    upsert<T extends NotificationLogUpsertArgs>(args: SelectSubset<T, NotificationLogUpsertArgs<ExtArgs>>): Prisma__NotificationLogClient<$Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogCountArgs} args - Arguments to filter NotificationLogs to count.
     * @example
     * // Count the number of NotificationLogs
     * const count = await prisma.notificationLog.count({
     *   where: {
     *     // ... the filter for the NotificationLogs we want to count
     *   }
     * })
    **/
    count<T extends NotificationLogCountArgs>(
      args?: Subset<T, NotificationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationLogAggregateArgs>(args: Subset<T, NotificationLogAggregateArgs>): Prisma.PrismaPromise<GetNotificationLogAggregateType<T>>

    /**
     * Group by NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationLogGroupByArgs['orderBy'] }
        : { orderBy?: NotificationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationLog model
   */
  readonly fields: NotificationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationLog model
   */
  interface NotificationLogFieldRefs {
    readonly id: FieldRef<"NotificationLog", 'Int'>
    readonly type: FieldRef<"NotificationLog", 'String'>
    readonly status: FieldRef<"NotificationLog", 'String'>
    readonly message: FieldRef<"NotificationLog", 'String'>
    readonly sentAt: FieldRef<"NotificationLog", 'DateTime'>
    readonly userId: FieldRef<"NotificationLog", 'Int'>
    readonly assetId: FieldRef<"NotificationLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotificationLog findUnique
   */
  export type NotificationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog findUniqueOrThrow
   */
  export type NotificationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog findFirst
   */
  export type NotificationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog findFirstOrThrow
   */
  export type NotificationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog findMany
   */
  export type NotificationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationLogs to fetch.
     */
    where?: NotificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?: NotificationLogOrderByWithRelationInput | NotificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationLogs.
     */
    skip?: number
    distinct?: NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[]
  }

  /**
   * NotificationLog create
   */
  export type NotificationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationLog.
     */
    data: XOR<NotificationLogCreateInput, NotificationLogUncheckedCreateInput>
  }

  /**
   * NotificationLog createMany
   */
  export type NotificationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationLog createManyAndReturn
   */
  export type NotificationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationLog update
   */
  export type NotificationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationLog.
     */
    data: XOR<NotificationLogUpdateInput, NotificationLogUncheckedUpdateInput>
    /**
     * Choose, which NotificationLog to update.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog updateMany
   */
  export type NotificationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationLogs.
     */
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyInput>
    /**
     * Filter which NotificationLogs to update
     */
    where?: NotificationLogWhereInput
    /**
     * Limit how many NotificationLogs to update.
     */
    limit?: number
  }

  /**
   * NotificationLog updateManyAndReturn
   */
  export type NotificationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * The data used to update NotificationLogs.
     */
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyInput>
    /**
     * Filter which NotificationLogs to update
     */
    where?: NotificationLogWhereInput
    /**
     * Limit how many NotificationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationLog upsert
   */
  export type NotificationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationLog to update in case it exists.
     */
    where: NotificationLogWhereUniqueInput
    /**
     * In case the NotificationLog found by the `where` argument doesn't exist, create a new NotificationLog with this data.
     */
    create: XOR<NotificationLogCreateInput, NotificationLogUncheckedCreateInput>
    /**
     * In case the NotificationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationLogUpdateInput, NotificationLogUncheckedUpdateInput>
  }

  /**
   * NotificationLog delete
   */
  export type NotificationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
    /**
     * Filter which NotificationLog to delete.
     */
    where: NotificationLogWhereUniqueInput
  }

  /**
   * NotificationLog deleteMany
   */
  export type NotificationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationLogs to delete
     */
    where?: NotificationLogWhereInput
    /**
     * Limit how many NotificationLogs to delete.
     */
    limit?: number
  }

  /**
   * NotificationLog without action
   */
  export type NotificationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    assetId: number | null
    userId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    assetId: number | null
    userId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    action: $Enums.TransactionAction | null
    date: Date | null
    notes: string | null
    assetId: number | null
    userId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    action: $Enums.TransactionAction | null
    date: Date | null
    notes: string | null
    assetId: number | null
    userId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    action: number
    date: number
    notes: number
    assetId: number
    userId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    assetId?: true
    userId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    assetId?: true
    userId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    action?: true
    date?: true
    notes?: true
    assetId?: true
    userId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    action?: true
    date?: true
    notes?: true
    assetId?: true
    userId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    action?: true
    date?: true
    notes?: true
    assetId?: true
    userId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    action: $Enums.TransactionAction
    date: Date
    notes: string | null
    assetId: number
    userId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    date?: boolean
    notes?: boolean
    assetId?: boolean
    userId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    date?: boolean
    notes?: boolean
    assetId?: boolean
    userId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    date?: boolean
    notes?: boolean
    assetId?: boolean
    userId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    action?: boolean
    date?: boolean
    notes?: boolean
    assetId?: boolean
    userId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "date" | "notes" | "assetId" | "userId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: $Enums.TransactionAction
      date: Date
      notes: string | null
      assetId: number
      userId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly action: FieldRef<"Transaction", 'TransactionAction'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly assetId: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssetTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type AssetTypeScalarFieldEnum = (typeof AssetTypeScalarFieldEnum)[keyof typeof AssetTypeScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    serialNumber: 'serialNumber',
    status: 'status',
    purchaseDate: 'purchaseDate',
    price: 'price',
    returnDate: 'returnDate',
    typeId: 'typeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    department: 'department',
    image: 'image',
    fcmToken: 'fcmToken',
    fcmSubscribedAt: 'fcmSubscribedAt',
    fcmDeviceInfo: 'fcmDeviceInfo',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    message: 'message',
    sentAt: 'sentAt',
    userId: 'userId',
    assetId: 'assetId'
  };

  export type NotificationLogScalarFieldEnum = (typeof NotificationLogScalarFieldEnum)[keyof typeof NotificationLogScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    action: 'action',
    date: 'date',
    notes: 'notes',
    assetId: 'assetId',
    userId: 'userId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AssetStatus'
   */
  export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>
    


  /**
   * Reference to a field of type 'AssetStatus[]'
   */
  export type ListEnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'TransactionAction'
   */
  export type EnumTransactionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionAction'>
    


  /**
   * Reference to a field of type 'TransactionAction[]'
   */
  export type ListEnumTransactionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AssetTypeWhereInput = {
    AND?: AssetTypeWhereInput | AssetTypeWhereInput[]
    OR?: AssetTypeWhereInput[]
    NOT?: AssetTypeWhereInput | AssetTypeWhereInput[]
    id?: IntFilter<"AssetType"> | number
    name?: StringFilter<"AssetType"> | string
    description?: StringNullableFilter<"AssetType"> | string | null
    assets?: AssetListRelationFilter
  }

  export type AssetTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    assets?: AssetOrderByRelationAggregateInput
  }

  export type AssetTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AssetTypeWhereInput | AssetTypeWhereInput[]
    OR?: AssetTypeWhereInput[]
    NOT?: AssetTypeWhereInput | AssetTypeWhereInput[]
    description?: StringNullableFilter<"AssetType"> | string | null
    assets?: AssetListRelationFilter
  }, "id" | "name">

  export type AssetTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: AssetTypeCountOrderByAggregateInput
    _avg?: AssetTypeAvgOrderByAggregateInput
    _max?: AssetTypeMaxOrderByAggregateInput
    _min?: AssetTypeMinOrderByAggregateInput
    _sum?: AssetTypeSumOrderByAggregateInput
  }

  export type AssetTypeScalarWhereWithAggregatesInput = {
    AND?: AssetTypeScalarWhereWithAggregatesInput | AssetTypeScalarWhereWithAggregatesInput[]
    OR?: AssetTypeScalarWhereWithAggregatesInput[]
    NOT?: AssetTypeScalarWhereWithAggregatesInput | AssetTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssetType"> | number
    name?: StringWithAggregatesFilter<"AssetType"> | string
    description?: StringNullableWithAggregatesFilter<"AssetType"> | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: IntFilter<"Asset"> | number
    code?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    serialNumber?: StringNullableFilter<"Asset"> | string | null
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    purchaseDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    price?: DecimalNullableFilter<"Asset"> | Decimal | DecimalJsLike | number | string | null
    returnDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    typeId?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    type?: XOR<AssetTypeScalarRelationFilter, AssetTypeWhereInput>
    transactions?: TransactionListRelationFilter
    notifications?: NotificationLogListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    returnDate?: SortOrderInput | SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: AssetTypeOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    notifications?: NotificationLogOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    name?: StringFilter<"Asset"> | string
    serialNumber?: StringNullableFilter<"Asset"> | string | null
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    purchaseDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    price?: DecimalNullableFilter<"Asset"> | Decimal | DecimalJsLike | number | string | null
    returnDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    typeId?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    type?: XOR<AssetTypeScalarRelationFilter, AssetTypeWhereInput>
    transactions?: TransactionListRelationFilter
    notifications?: NotificationLogListRelationFilter
  }, "id" | "code">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    returnDate?: SortOrderInput | SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asset"> | number
    code?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    status?: EnumAssetStatusWithAggregatesFilter<"Asset"> | $Enums.AssetStatus
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    price?: DecimalNullableWithAggregatesFilter<"Asset"> | Decimal | DecimalJsLike | number | string | null
    returnDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    typeId?: IntWithAggregatesFilter<"Asset"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    fcmToken?: StringNullableFilter<"User"> | string | null
    fcmSubscribedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    fcmDeviceInfo?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    transactions?: TransactionListRelationFilter
    notifications?: NotificationLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    fcmToken?: SortOrderInput | SortOrder
    fcmSubscribedAt?: SortOrderInput | SortOrder
    fcmDeviceInfo?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    notifications?: NotificationLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    fcmToken?: StringNullableFilter<"User"> | string | null
    fcmSubscribedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    fcmDeviceInfo?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    transactions?: TransactionListRelationFilter
    notifications?: NotificationLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    fcmToken?: SortOrderInput | SortOrder
    fcmSubscribedAt?: SortOrderInput | SortOrder
    fcmDeviceInfo?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    fcmToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    fcmSubscribedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    fcmDeviceInfo?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type NotificationLogWhereInput = {
    AND?: NotificationLogWhereInput | NotificationLogWhereInput[]
    OR?: NotificationLogWhereInput[]
    NOT?: NotificationLogWhereInput | NotificationLogWhereInput[]
    id?: IntFilter<"NotificationLog"> | number
    type?: StringFilter<"NotificationLog"> | string
    status?: StringFilter<"NotificationLog"> | string
    message?: StringNullableFilter<"NotificationLog"> | string | null
    sentAt?: DateTimeFilter<"NotificationLog"> | Date | string
    userId?: IntFilter<"NotificationLog"> | number
    assetId?: IntFilter<"NotificationLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type NotificationLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    user?: UserOrderByWithRelationInput
    asset?: AssetOrderByWithRelationInput
  }

  export type NotificationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationLogWhereInput | NotificationLogWhereInput[]
    OR?: NotificationLogWhereInput[]
    NOT?: NotificationLogWhereInput | NotificationLogWhereInput[]
    type?: StringFilter<"NotificationLog"> | string
    status?: StringFilter<"NotificationLog"> | string
    message?: StringNullableFilter<"NotificationLog"> | string | null
    sentAt?: DateTimeFilter<"NotificationLog"> | Date | string
    userId?: IntFilter<"NotificationLog"> | number
    assetId?: IntFilter<"NotificationLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type NotificationLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    _count?: NotificationLogCountOrderByAggregateInput
    _avg?: NotificationLogAvgOrderByAggregateInput
    _max?: NotificationLogMaxOrderByAggregateInput
    _min?: NotificationLogMinOrderByAggregateInput
    _sum?: NotificationLogSumOrderByAggregateInput
  }

  export type NotificationLogScalarWhereWithAggregatesInput = {
    AND?: NotificationLogScalarWhereWithAggregatesInput | NotificationLogScalarWhereWithAggregatesInput[]
    OR?: NotificationLogScalarWhereWithAggregatesInput[]
    NOT?: NotificationLogScalarWhereWithAggregatesInput | NotificationLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationLog"> | number
    type?: StringWithAggregatesFilter<"NotificationLog"> | string
    status?: StringWithAggregatesFilter<"NotificationLog"> | string
    message?: StringNullableWithAggregatesFilter<"NotificationLog"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"NotificationLog"> | Date | string
    userId?: IntWithAggregatesFilter<"NotificationLog"> | number
    assetId?: IntWithAggregatesFilter<"NotificationLog"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    action?: EnumTransactionActionFilter<"Transaction"> | $Enums.TransactionAction
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    assetId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    assetId?: SortOrder
    userId?: SortOrder
    asset?: AssetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    action?: EnumTransactionActionFilter<"Transaction"> | $Enums.TransactionAction
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    assetId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    assetId?: SortOrder
    userId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    action?: EnumTransactionActionWithAggregatesFilter<"Transaction"> | $Enums.TransactionAction
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    assetId?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type AssetTypeCreateInput = {
    name: string
    description?: string | null
    assets?: AssetCreateNestedManyWithoutTypeInput
  }

  export type AssetTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AssetTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUpdateManyWithoutTypeNestedInput
  }

  export type AssetTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AssetTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type AssetTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateInput = {
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AssetTypeCreateNestedOneWithoutAssetsInput
    transactions?: TransactionCreateNestedManyWithoutAssetInput
    notifications?: NotificationLogCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    typeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssetInput
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
    transactions?: TransactionUpdateManyWithoutAssetNestedInput
    notifications?: NotificationLogUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAssetNestedInput
    notifications?: NotificationLogUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    typeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    notifications?: NotificationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationLogCreateInput = {
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    asset: AssetCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationLogUncheckedCreateInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    userId: number
    assetId: number
  }

  export type NotificationLogUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    asset?: AssetUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationLogCreateManyInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    userId: number
    assetId: number
  }

  export type NotificationLogUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    asset: AssetCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    assetId: number
    userId: number
  }

  export type TransactionUpdateInput = {
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: AssetUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    assetId: number
    userId: number
  }

  export type TransactionUpdateManyMutationInput = {
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssetTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AssetTypeScalarRelationFilter = {
    is?: AssetTypeWhereInput
    isNot?: AssetTypeWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type NotificationLogListRelationFilter = {
    every?: NotificationLogWhereInput
    some?: NotificationLogWhereInput
    none?: NotificationLogWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    returnDate?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    typeId?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    returnDate?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    returnDate?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    typeId?: SortOrder
  }

  export type EnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    image?: SortOrder
    fcmToken?: SortOrder
    fcmSubscribedAt?: SortOrder
    fcmDeviceInfo?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    image?: SortOrder
    fcmToken?: SortOrder
    fcmSubscribedAt?: SortOrder
    fcmDeviceInfo?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    image?: SortOrder
    fcmToken?: SortOrder
    fcmSubscribedAt?: SortOrder
    fcmDeviceInfo?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type NotificationLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
  }

  export type NotificationLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
  }

  export type NotificationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
  }

  export type NotificationLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
  }

  export type NotificationLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
  }

  export type EnumTransactionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAction | EnumTransactionActionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionActionFilter<$PrismaModel> | $Enums.TransactionAction
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    assetId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    assetId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    assetId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTransactionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAction | EnumTransactionActionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionActionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionActionFilter<$PrismaModel>
    _max?: NestedEnumTransactionActionFilter<$PrismaModel>
  }

  export type AssetCreateNestedManyWithoutTypeInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AssetUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutTypeInput | AssetUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutTypeInput | AssetUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutTypeInput | AssetUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssetUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutTypeInput | AssetUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutTypeInput | AssetUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutTypeInput | AssetUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetTypeCreateNestedOneWithoutAssetsInput = {
    create?: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetTypeCreateOrConnectWithoutAssetsInput
    connect?: AssetTypeWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAssetInput = {
    create?: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput> | TransactionCreateWithoutAssetInput[] | TransactionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssetInput | TransactionCreateOrConnectWithoutAssetInput[]
    createMany?: TransactionCreateManyAssetInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationLogCreateNestedManyWithoutAssetInput = {
    create?: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput> | NotificationLogCreateWithoutAssetInput[] | NotificationLogUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutAssetInput | NotificationLogCreateOrConnectWithoutAssetInput[]
    createMany?: NotificationLogCreateManyAssetInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput> | TransactionCreateWithoutAssetInput[] | TransactionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssetInput | TransactionCreateOrConnectWithoutAssetInput[]
    createMany?: TransactionCreateManyAssetInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationLogUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput> | NotificationLogCreateWithoutAssetInput[] | NotificationLogUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutAssetInput | NotificationLogCreateOrConnectWithoutAssetInput[]
    createMany?: NotificationLogCreateManyAssetInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssetTypeUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetTypeCreateOrConnectWithoutAssetsInput
    upsert?: AssetTypeUpsertWithoutAssetsInput
    connect?: AssetTypeWhereUniqueInput
    update?: XOR<XOR<AssetTypeUpdateToOneWithWhereWithoutAssetsInput, AssetTypeUpdateWithoutAssetsInput>, AssetTypeUncheckedUpdateWithoutAssetsInput>
  }

  export type TransactionUpdateManyWithoutAssetNestedInput = {
    create?: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput> | TransactionCreateWithoutAssetInput[] | TransactionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssetInput | TransactionCreateOrConnectWithoutAssetInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAssetInput | TransactionUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: TransactionCreateManyAssetInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAssetInput | TransactionUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAssetInput | TransactionUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationLogUpdateManyWithoutAssetNestedInput = {
    create?: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput> | NotificationLogCreateWithoutAssetInput[] | NotificationLogUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutAssetInput | NotificationLogCreateOrConnectWithoutAssetInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutAssetInput | NotificationLogUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: NotificationLogCreateManyAssetInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutAssetInput | NotificationLogUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutAssetInput | NotificationLogUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput> | TransactionCreateWithoutAssetInput[] | TransactionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssetInput | TransactionCreateOrConnectWithoutAssetInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAssetInput | TransactionUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: TransactionCreateManyAssetInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAssetInput | TransactionUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAssetInput | TransactionUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationLogUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput> | NotificationLogCreateWithoutAssetInput[] | NotificationLogUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutAssetInput | NotificationLogCreateOrConnectWithoutAssetInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutAssetInput | NotificationLogUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: NotificationLogCreateManyAssetInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutAssetInput | NotificationLogUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutAssetInput | NotificationLogUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationLogCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput> | NotificationLogCreateWithoutUserInput[] | NotificationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutUserInput | NotificationLogCreateOrConnectWithoutUserInput[]
    createMany?: NotificationLogCreateManyUserInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput> | NotificationLogCreateWithoutUserInput[] | NotificationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutUserInput | NotificationLogCreateOrConnectWithoutUserInput[]
    createMany?: NotificationLogCreateManyUserInputEnvelope
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput> | NotificationLogCreateWithoutUserInput[] | NotificationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutUserInput | NotificationLogCreateOrConnectWithoutUserInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutUserInput | NotificationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationLogCreateManyUserInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutUserInput | NotificationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutUserInput | NotificationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput> | NotificationLogCreateWithoutUserInput[] | NotificationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationLogCreateOrConnectWithoutUserInput | NotificationLogCreateOrConnectWithoutUserInput[]
    upsert?: NotificationLogUpsertWithWhereUniqueWithoutUserInput | NotificationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationLogCreateManyUserInputEnvelope
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    disconnect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    delete?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    connect?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[]
    update?: NotificationLogUpdateWithWhereUniqueWithoutUserInput | NotificationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationLogUpdateManyWithWhereWithoutUserInput | NotificationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AssetCreateWithoutNotificationsInput, AssetUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutNotificationsInput
    connect?: AssetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AssetUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<AssetCreateWithoutNotificationsInput, AssetUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutNotificationsInput
    upsert?: AssetUpsertWithoutNotificationsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutNotificationsInput, AssetUpdateWithoutNotificationsInput>, AssetUncheckedUpdateWithoutNotificationsInput>
  }

  export type AssetCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput
    connect?: AssetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionActionFieldUpdateOperationsInput = {
    set?: $Enums.TransactionAction
  }

  export type AssetUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput
    upsert?: AssetUpsertWithoutTransactionsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutTransactionsInput, AssetUpdateWithoutTransactionsInput>, AssetUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumTransactionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAction | EnumTransactionActionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionActionFilter<$PrismaModel> | $Enums.TransactionAction
  }

  export type NestedEnumTransactionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAction | EnumTransactionActionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionAction[] | ListEnumTransactionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionActionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionActionFilter<$PrismaModel>
    _max?: NestedEnumTransactionActionFilter<$PrismaModel>
  }

  export type AssetCreateWithoutTypeInput = {
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAssetInput
    notifications?: NotificationLogCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutTypeInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssetInput
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutTypeInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput>
  }

  export type AssetCreateManyTypeInputEnvelope = {
    data: AssetCreateManyTypeInput | AssetCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithWhereUniqueWithoutTypeInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutTypeInput, AssetUncheckedUpdateWithoutTypeInput>
    create: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutTypeInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutTypeInput, AssetUncheckedUpdateWithoutTypeInput>
  }

  export type AssetUpdateManyWithWhereWithoutTypeInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutTypeInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: IntFilter<"Asset"> | number
    code?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    serialNumber?: StringNullableFilter<"Asset"> | string | null
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    purchaseDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    price?: DecimalNullableFilter<"Asset"> | Decimal | DecimalJsLike | number | string | null
    returnDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    typeId?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type AssetTypeCreateWithoutAssetsInput = {
    name: string
    description?: string | null
  }

  export type AssetTypeUncheckedCreateWithoutAssetsInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type AssetTypeCreateOrConnectWithoutAssetsInput = {
    where: AssetTypeWhereUniqueInput
    create: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
  }

  export type TransactionCreateWithoutAssetInput = {
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAssetInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    userId: number
  }

  export type TransactionCreateOrConnectWithoutAssetInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput>
  }

  export type TransactionCreateManyAssetInputEnvelope = {
    data: TransactionCreateManyAssetInput | TransactionCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type NotificationLogCreateWithoutAssetInput = {
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationLogUncheckedCreateWithoutAssetInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    userId: number
  }

  export type NotificationLogCreateOrConnectWithoutAssetInput = {
    where: NotificationLogWhereUniqueInput
    create: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput>
  }

  export type NotificationLogCreateManyAssetInputEnvelope = {
    data: NotificationLogCreateManyAssetInput | NotificationLogCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type AssetTypeUpsertWithoutAssetsInput = {
    update: XOR<AssetTypeUpdateWithoutAssetsInput, AssetTypeUncheckedUpdateWithoutAssetsInput>
    create: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    where?: AssetTypeWhereInput
  }

  export type AssetTypeUpdateToOneWithWhereWithoutAssetsInput = {
    where?: AssetTypeWhereInput
    data: XOR<AssetTypeUpdateWithoutAssetsInput, AssetTypeUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetTypeUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetTypeUncheckedUpdateWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutAssetInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAssetInput, TransactionUncheckedUpdateWithoutAssetInput>
    create: XOR<TransactionCreateWithoutAssetInput, TransactionUncheckedCreateWithoutAssetInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAssetInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAssetInput, TransactionUncheckedUpdateWithoutAssetInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAssetInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAssetInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    action?: EnumTransactionActionFilter<"Transaction"> | $Enums.TransactionAction
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    assetId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
  }

  export type NotificationLogUpsertWithWhereUniqueWithoutAssetInput = {
    where: NotificationLogWhereUniqueInput
    update: XOR<NotificationLogUpdateWithoutAssetInput, NotificationLogUncheckedUpdateWithoutAssetInput>
    create: XOR<NotificationLogCreateWithoutAssetInput, NotificationLogUncheckedCreateWithoutAssetInput>
  }

  export type NotificationLogUpdateWithWhereUniqueWithoutAssetInput = {
    where: NotificationLogWhereUniqueInput
    data: XOR<NotificationLogUpdateWithoutAssetInput, NotificationLogUncheckedUpdateWithoutAssetInput>
  }

  export type NotificationLogUpdateManyWithWhereWithoutAssetInput = {
    where: NotificationLogScalarWhereInput
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyWithoutAssetInput>
  }

  export type NotificationLogScalarWhereInput = {
    AND?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
    OR?: NotificationLogScalarWhereInput[]
    NOT?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[]
    id?: IntFilter<"NotificationLog"> | number
    type?: StringFilter<"NotificationLog"> | string
    status?: StringFilter<"NotificationLog"> | string
    message?: StringNullableFilter<"NotificationLog"> | string | null
    sentAt?: DateTimeFilter<"NotificationLog"> | Date | string
    userId?: IntFilter<"NotificationLog"> | number
    assetId?: IntFilter<"NotificationLog"> | number
  }

  export type TransactionCreateWithoutUserInput = {
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    asset: AssetCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    assetId: number
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationLogCreateWithoutUserInput = {
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    asset: AssetCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationLogUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    assetId: number
  }

  export type NotificationLogCreateOrConnectWithoutUserInput = {
    where: NotificationLogWhereUniqueInput
    create: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput>
  }

  export type NotificationLogCreateManyUserInputEnvelope = {
    data: NotificationLogCreateManyUserInput | NotificationLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationLogUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationLogWhereUniqueInput
    update: XOR<NotificationLogUpdateWithoutUserInput, NotificationLogUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationLogCreateWithoutUserInput, NotificationLogUncheckedCreateWithoutUserInput>
  }

  export type NotificationLogUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationLogWhereUniqueInput
    data: XOR<NotificationLogUpdateWithoutUserInput, NotificationLogUncheckedUpdateWithoutUserInput>
  }

  export type NotificationLogUpdateManyWithWhereWithoutUserInput = {
    where: NotificationLogScalarWhereInput
    data: XOR<NotificationLogUpdateManyMutationInput, NotificationLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AssetCreateWithoutNotificationsInput = {
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AssetTypeCreateNestedOneWithoutAssetsInput
    transactions?: TransactionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutNotificationsInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    typeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutNotificationsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutNotificationsInput, AssetUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetUpsertWithoutNotificationsInput = {
    update: XOR<AssetUpdateWithoutNotificationsInput, AssetUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AssetCreateWithoutNotificationsInput, AssetUncheckedCreateWithoutNotificationsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutNotificationsInput, AssetUncheckedUpdateWithoutNotificationsInput>
  }

  export type AssetUpdateWithoutNotificationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
    transactions?: TransactionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutTransactionsInput = {
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AssetTypeCreateNestedOneWithoutAssetsInput
    notifications?: NotificationLogCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutTransactionsInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    typeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutTransactionsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    notifications?: NotificationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    department?: string | null
    image?: string | null
    fcmToken?: string | null
    fcmSubscribedAt?: Date | string | null
    fcmDeviceInfo?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type AssetUpsertWithoutTransactionsInput = {
    update: XOR<AssetUpdateWithoutTransactionsInput, AssetUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutTransactionsInput, AssetUncheckedUpdateWithoutTransactionsInput>
  }

  export type AssetUpdateWithoutTransactionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
    notifications?: NotificationLogUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationLogUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    fcmSubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmDeviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetCreateManyTypeInput = {
    id?: number
    code: string
    name: string
    serialNumber?: string | null
    status?: $Enums.AssetStatus
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    returnDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateWithoutTypeInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAssetNestedInput
    notifications?: NotificationLogUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAssetNestedInput
    notifications?: NotificationLogUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAssetInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    userId: number
  }

  export type NotificationLogCreateManyAssetInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    userId: number
  }

  export type TransactionUpdateWithoutAssetInput = {
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationLogUpdateWithoutAssetInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationLogUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationLogUncheckedUpdateManyWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    action: $Enums.TransactionAction
    date?: Date | string
    notes?: string | null
    assetId: number
  }

  export type NotificationLogCreateManyUserInput = {
    id?: number
    type: string
    status: string
    message?: string | null
    sentAt?: Date | string
    assetId: number
  }

  export type TransactionUpdateWithoutUserInput = {
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: AssetUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumTransactionActionFieldUpdateOperationsInput | $Enums.TransactionAction
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationLogUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}