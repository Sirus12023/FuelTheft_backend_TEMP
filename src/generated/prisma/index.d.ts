
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
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model SensorReading
 * 
 */
export type SensorReading = $Result.DefaultSelection<Prisma.$SensorReadingPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model SummaryMetrics
 * 
 */
export type SummaryMetrics = $Result.DefaultSelection<Prisma.$SummaryMetricsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AlertType: {
  THEFT: 'THEFT',
  REFUEL: 'REFUEL',
  LOW_FUEL: 'LOW_FUEL',
  SENSOR_HEALTH: 'SENSOR_HEALTH',
  NORMAL: 'NORMAL',
  UNKNOWN: 'UNKNOWN'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const LogLevel: {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel]

}

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type LogLevel = $Enums.LogLevel

export const LogLevel: typeof $Enums.LogLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
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
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorReading`: Exposes CRUD operations for the **SensorReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorReadings
    * const sensorReadings = await prisma.sensorReading.findMany()
    * ```
    */
  get sensorReading(): Prisma.SensorReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summaryMetrics`: Exposes CRUD operations for the **SummaryMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SummaryMetrics
    * const summaryMetrics = await prisma.summaryMetrics.findMany()
    * ```
    */
  get summaryMetrics(): Prisma.SummaryMetricsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Vehicle: 'Vehicle',
    Driver: 'Driver',
    Route: 'Route',
    Sensor: 'Sensor',
    SensorReading: 'SensorReading',
    Alert: 'Alert',
    History: 'History',
    SummaryMetrics: 'SummaryMetrics'
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
      modelProps: "vehicle" | "driver" | "route" | "sensor" | "sensorReading" | "alert" | "history" | "summaryMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      SensorReading: {
        payload: Prisma.$SensorReadingPayload<ExtArgs>
        fields: Prisma.SensorReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findFirst: {
            args: Prisma.SensorReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findMany: {
            args: Prisma.SensorReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          create: {
            args: Prisma.SensorReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          createMany: {
            args: Prisma.SensorReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          delete: {
            args: Prisma.SensorReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          update: {
            args: Prisma.SensorReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          deleteMany: {
            args: Prisma.SensorReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          upsert: {
            args: Prisma.SensorReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          aggregate: {
            args: Prisma.SensorReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorReading>
          }
          groupBy: {
            args: Prisma.SensorReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorReadingCountArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      SummaryMetrics: {
        payload: Prisma.$SummaryMetricsPayload<ExtArgs>
        fields: Prisma.SummaryMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          findFirst: {
            args: Prisma.SummaryMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          findMany: {
            args: Prisma.SummaryMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>[]
          }
          create: {
            args: Prisma.SummaryMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          createMany: {
            args: Prisma.SummaryMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>[]
          }
          delete: {
            args: Prisma.SummaryMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          update: {
            args: Prisma.SummaryMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          deleteMany: {
            args: Prisma.SummaryMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SummaryMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>[]
          }
          upsert: {
            args: Prisma.SummaryMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryMetricsPayload>
          }
          aggregate: {
            args: Prisma.SummaryMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummaryMetrics>
          }
          groupBy: {
            args: Prisma.SummaryMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryMetricsCountAggregateOutputType> | number
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
    vehicle?: VehicleOmit
    driver?: DriverOmit
    route?: RouteOmit
    sensor?: SensorOmit
    sensorReading?: SensorReadingOmit
    alert?: AlertOmit
    history?: HistoryOmit
    summaryMetrics?: SummaryMetricsOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    histories: number
    summaries: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | VehicleCountOutputTypeCountHistoriesArgs
    summaries?: boolean | VehicleCountOutputTypeCountSummariesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryMetricsWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    vehicles: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | RouteCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    readings: number
    alerts: number
    histories: number
  }

  export type SensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | SensorCountOutputTypeCountReadingsArgs
    alerts?: boolean | SensorCountOutputTypeCountAlertsArgs
    histories?: boolean | SensorCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    tankSize: number | null
    mileageEst: number | null
  }

  export type VehicleSumAggregateOutputType = {
    tankSize: number | null
    mileageEst: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    registrationNo: string | null
    model: string | null
    tankSize: number | null
    mileageEst: number | null
    createdAt: Date | null
    routeId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    registrationNo: string | null
    model: string | null
    tankSize: number | null
    mileageEst: number | null
    createdAt: Date | null
    routeId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    registrationNo: number
    model: number
    tankSize: number
    mileageEst: number
    createdAt: number
    routeId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    tankSize?: true
    mileageEst?: true
  }

  export type VehicleSumAggregateInputType = {
    tankSize?: true
    mileageEst?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    tankSize?: true
    mileageEst?: true
    createdAt?: true
    routeId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    tankSize?: true
    mileageEst?: true
    createdAt?: true
    routeId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    tankSize?: true
    mileageEst?: true
    createdAt?: true
    routeId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    registrationNo: string
    model: string | null
    tankSize: number | null
    mileageEst: number | null
    createdAt: Date
    routeId: string | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    tankSize?: boolean
    mileageEst?: boolean
    createdAt?: boolean
    routeId?: boolean
    driver?: boolean | Vehicle$driverArgs<ExtArgs>
    route?: boolean | Vehicle$routeArgs<ExtArgs>
    sensor?: boolean | Vehicle$sensorArgs<ExtArgs>
    histories?: boolean | Vehicle$historiesArgs<ExtArgs>
    summaries?: boolean | Vehicle$summariesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    tankSize?: boolean
    mileageEst?: boolean
    createdAt?: boolean
    routeId?: boolean
    route?: boolean | Vehicle$routeArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    tankSize?: boolean
    mileageEst?: boolean
    createdAt?: boolean
    routeId?: boolean
    route?: boolean | Vehicle$routeArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    tankSize?: boolean
    mileageEst?: boolean
    createdAt?: boolean
    routeId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationNo" | "model" | "tankSize" | "mileageEst" | "createdAt" | "routeId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Vehicle$driverArgs<ExtArgs>
    route?: boolean | Vehicle$routeArgs<ExtArgs>
    sensor?: boolean | Vehicle$sensorArgs<ExtArgs>
    histories?: boolean | Vehicle$historiesArgs<ExtArgs>
    summaries?: boolean | Vehicle$summariesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | Vehicle$routeArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | Vehicle$routeArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs> | null
      route: Prisma.$RoutePayload<ExtArgs> | null
      sensor: Prisma.$SensorPayload<ExtArgs> | null
      histories: Prisma.$HistoryPayload<ExtArgs>[]
      summaries: Prisma.$SummaryMetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationNo: string
      model: string | null
      tankSize: number | null
      mileageEst: number | null
      createdAt: Date
      routeId: string | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends Vehicle$driverArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    route<T extends Vehicle$routeArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$routeArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sensor<T extends Vehicle$sensorArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$sensorArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    histories<T extends Vehicle$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summaries<T extends Vehicle$summariesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$summariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly registrationNo: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly tankSize: FieldRef<"Vehicle", 'Int'>
    readonly mileageEst: FieldRef<"Vehicle", 'Float'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly routeId: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.driver
   */
  export type Vehicle$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Vehicle.route
   */
  export type Vehicle$routeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
  }

  /**
   * Vehicle.sensor
   */
  export type Vehicle$sensorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
  }

  /**
   * Vehicle.histories
   */
  export type Vehicle$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Vehicle.summaries
   */
  export type Vehicle$summariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    where?: SummaryMetricsWhereInput
    orderBy?: SummaryMetricsOrderByWithRelationInput | SummaryMetricsOrderByWithRelationInput[]
    cursor?: SummaryMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryMetricsScalarFieldEnum | SummaryMetricsScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    licenseNo: string | null
    createdAt: Date | null
    vehicleId: string | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    licenseNo: string | null
    createdAt: Date | null
    vehicleId: string | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    licenseNo: number
    createdAt: number
    vehicleId: number
    _all: number
  }


  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    createdAt?: true
    vehicleId?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    createdAt?: true
    vehicleId?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    createdAt?: true
    vehicleId?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    phone: string
    licenseNo: string
    createdAt: Date
    vehicleId: string
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    createdAt?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    createdAt?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    createdAt?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    createdAt?: boolean
    vehicleId?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "licenseNo" | "createdAt" | "vehicleId", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      licenseNo: string
      createdAt: Date
      vehicleId: string
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly licenseNo: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly vehicleId: FieldRef<"Driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    name: string | null
    startPoint: string | null
    endPoint: string | null
    createdAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startPoint: string | null
    endPoint: string | null
    createdAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    startPoint: number
    endPoint: number
    createdAt: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    startPoint?: true
    endPoint?: true
    createdAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    startPoint?: true
    endPoint?: true
    createdAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    startPoint?: true
    endPoint?: true
    createdAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    name: string
    startPoint: string
    endPoint: string
    createdAt: Date
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startPoint?: boolean
    endPoint?: boolean
    createdAt?: boolean
    vehicles?: boolean | Route$vehiclesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startPoint?: boolean
    endPoint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startPoint?: boolean
    endPoint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    startPoint?: boolean
    endPoint?: boolean
    createdAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startPoint" | "endPoint" | "createdAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | Route$vehiclesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startPoint: string
      endPoint: string
      createdAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends Route$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Route$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly name: FieldRef<"Route", 'String'>
    readonly startPoint: FieldRef<"Route", 'String'>
    readonly endPoint: FieldRef<"Route", 'String'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.vehicles
   */
  export type Route$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorMinAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    isActive: boolean | null
    installedAt: Date | null
    lastSeen: Date | null
    vehicleId: string | null
  }

  export type SensorMaxAggregateOutputType = {
    id: string | null
    sensorCode: string | null
    isActive: boolean | null
    installedAt: Date | null
    lastSeen: Date | null
    vehicleId: string | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    sensorCode: number
    isActive: number
    installedAt: number
    lastSeen: number
    vehicleId: number
    _all: number
  }


  export type SensorMinAggregateInputType = {
    id?: true
    sensorCode?: true
    isActive?: true
    installedAt?: true
    lastSeen?: true
    vehicleId?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    sensorCode?: true
    isActive?: true
    installedAt?: true
    lastSeen?: true
    vehicleId?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    sensorCode?: true
    isActive?: true
    installedAt?: true
    lastSeen?: true
    vehicleId?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: string
    sensorCode: string
    isActive: boolean
    installedAt: Date
    lastSeen: Date | null
    vehicleId: string
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    isActive?: boolean
    installedAt?: boolean
    lastSeen?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    histories?: boolean | Sensor$historiesArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    isActive?: boolean
    installedAt?: boolean
    lastSeen?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorCode?: boolean
    isActive?: boolean
    installedAt?: boolean
    lastSeen?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectScalar = {
    id?: boolean
    sensorCode?: boolean
    isActive?: boolean
    installedAt?: boolean
    lastSeen?: boolean
    vehicleId?: boolean
  }

  export type SensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorCode" | "isActive" | "installedAt" | "lastSeen" | "vehicleId", ExtArgs["result"]["sensor"]>
  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    histories?: boolean | Sensor$historiesArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type SensorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      readings: Prisma.$SensorReadingPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      histories: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorCode: string
      isActive: boolean
      installedAt: Date
      lastSeen: Date | null
      vehicleId: string
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sensors and returns the data saved in the database.
     * @param {SensorCreateManyAndReturnArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors and returns the data updated in the database.
     * @param {SensorUpdateManyAndReturnArgs} args - Arguments to update many Sensors.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
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
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readings<T extends Sensor$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Sensor$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    histories<T extends Sensor$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'String'>
    readonly sensorCode: FieldRef<"Sensor", 'String'>
    readonly isActive: FieldRef<"Sensor", 'Boolean'>
    readonly installedAt: FieldRef<"Sensor", 'DateTime'>
    readonly lastSeen: FieldRef<"Sensor", 'DateTime'>
    readonly vehicleId: FieldRef<"Sensor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sensor createManyAndReturn
   */
  export type SensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
  }

  /**
   * Sensor updateManyAndReturn
   */
  export type SensorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number
  }

  /**
   * Sensor.readings
   */
  export type Sensor$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    cursor?: SensorReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * Sensor.alerts
   */
  export type Sensor$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Sensor.histories
   */
  export type Sensor$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model SensorReading
   */

  export type AggregateSensorReading = {
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  export type SensorReadingAvgAggregateOutputType = {
    fuelLevel: number | null
    distanceKm: number | null
    locationLat: number | null
    locationLong: number | null
    speed: number | null
    odometer: number | null
    deviceVoltage: number | null
  }

  export type SensorReadingSumAggregateOutputType = {
    fuelLevel: number | null
    distanceKm: number | null
    locationLat: number | null
    locationLong: number | null
    speed: number | null
    odometer: number | null
    deviceVoltage: number | null
  }

  export type SensorReadingMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    fuelLevel: number | null
    distanceKm: number | null
    locationLat: number | null
    locationLong: number | null
    speed: number | null
    ignitionStatus: string | null
    odometer: number | null
    deviceVoltage: number | null
    isOverSpeed: boolean | null
    processed: boolean | null
    sensorId: string | null
  }

  export type SensorReadingMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    fuelLevel: number | null
    distanceKm: number | null
    locationLat: number | null
    locationLong: number | null
    speed: number | null
    ignitionStatus: string | null
    odometer: number | null
    deviceVoltage: number | null
    isOverSpeed: boolean | null
    processed: boolean | null
    sensorId: string | null
  }

  export type SensorReadingCountAggregateOutputType = {
    id: number
    timestamp: number
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus: number
    odometer: number
    deviceVoltage: number
    isOverSpeed: number
    processed: number
    sensorId: number
    _all: number
  }


  export type SensorReadingAvgAggregateInputType = {
    fuelLevel?: true
    distanceKm?: true
    locationLat?: true
    locationLong?: true
    speed?: true
    odometer?: true
    deviceVoltage?: true
  }

  export type SensorReadingSumAggregateInputType = {
    fuelLevel?: true
    distanceKm?: true
    locationLat?: true
    locationLong?: true
    speed?: true
    odometer?: true
    deviceVoltage?: true
  }

  export type SensorReadingMinAggregateInputType = {
    id?: true
    timestamp?: true
    fuelLevel?: true
    distanceKm?: true
    locationLat?: true
    locationLong?: true
    speed?: true
    ignitionStatus?: true
    odometer?: true
    deviceVoltage?: true
    isOverSpeed?: true
    processed?: true
    sensorId?: true
  }

  export type SensorReadingMaxAggregateInputType = {
    id?: true
    timestamp?: true
    fuelLevel?: true
    distanceKm?: true
    locationLat?: true
    locationLong?: true
    speed?: true
    ignitionStatus?: true
    odometer?: true
    deviceVoltage?: true
    isOverSpeed?: true
    processed?: true
    sensorId?: true
  }

  export type SensorReadingCountAggregateInputType = {
    id?: true
    timestamp?: true
    fuelLevel?: true
    distanceKm?: true
    locationLat?: true
    locationLong?: true
    speed?: true
    ignitionStatus?: true
    odometer?: true
    deviceVoltage?: true
    isOverSpeed?: true
    processed?: true
    sensorId?: true
    _all?: true
  }

  export type SensorReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReading to aggregate.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorReadings
    **/
    _count?: true | SensorReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorReadingMaxAggregateInputType
  }

  export type GetSensorReadingAggregateType<T extends SensorReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorReading[P]>
      : GetScalarType<T[P], AggregateSensorReading[P]>
  }




  export type SensorReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithAggregationInput | SensorReadingOrderByWithAggregationInput[]
    by: SensorReadingScalarFieldEnum[] | SensorReadingScalarFieldEnum
    having?: SensorReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorReadingCountAggregateInputType | true
    _avg?: SensorReadingAvgAggregateInputType
    _sum?: SensorReadingSumAggregateInputType
    _min?: SensorReadingMinAggregateInputType
    _max?: SensorReadingMaxAggregateInputType
  }

  export type SensorReadingGroupByOutputType = {
    id: string
    timestamp: Date
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus: string | null
    odometer: number | null
    deviceVoltage: number | null
    isOverSpeed: boolean | null
    processed: boolean
    sensorId: string
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  type GetSensorReadingGroupByPayload<T extends SensorReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
            : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
        }
      >
    >


  export type SensorReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    fuelLevel?: boolean
    distanceKm?: boolean
    locationLat?: boolean
    locationLong?: boolean
    speed?: boolean
    ignitionStatus?: boolean
    odometer?: boolean
    deviceVoltage?: boolean
    isOverSpeed?: boolean
    processed?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    fuelLevel?: boolean
    distanceKm?: boolean
    locationLat?: boolean
    locationLong?: boolean
    speed?: boolean
    ignitionStatus?: boolean
    odometer?: boolean
    deviceVoltage?: boolean
    isOverSpeed?: boolean
    processed?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    fuelLevel?: boolean
    distanceKm?: boolean
    locationLat?: boolean
    locationLong?: boolean
    speed?: boolean
    ignitionStatus?: boolean
    odometer?: boolean
    deviceVoltage?: boolean
    isOverSpeed?: boolean
    processed?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectScalar = {
    id?: boolean
    timestamp?: boolean
    fuelLevel?: boolean
    distanceKm?: boolean
    locationLat?: boolean
    locationLong?: boolean
    speed?: boolean
    ignitionStatus?: boolean
    odometer?: boolean
    deviceVoltage?: boolean
    isOverSpeed?: boolean
    processed?: boolean
    sensorId?: boolean
  }

  export type SensorReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "fuelLevel" | "distanceKm" | "locationLat" | "locationLong" | "speed" | "ignitionStatus" | "odometer" | "deviceVoltage" | "isOverSpeed" | "processed" | "sensorId", ExtArgs["result"]["sensorReading"]>
  export type SensorReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $SensorReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorReading"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      fuelLevel: number
      distanceKm: number
      locationLat: number
      locationLong: number
      speed: number
      ignitionStatus: string | null
      odometer: number | null
      deviceVoltage: number | null
      isOverSpeed: boolean | null
      processed: boolean
      sensorId: string
    }, ExtArgs["result"]["sensorReading"]>
    composites: {}
  }

  type SensorReadingGetPayload<S extends boolean | null | undefined | SensorReadingDefaultArgs> = $Result.GetResult<Prisma.$SensorReadingPayload, S>

  type SensorReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorReadingCountAggregateInputType | true
    }

  export interface SensorReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorReading'], meta: { name: 'SensorReading' } }
    /**
     * Find zero or one SensorReading that matches the filter.
     * @param {SensorReadingFindUniqueArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorReadingFindUniqueArgs>(args: SelectSubset<T, SensorReadingFindUniqueArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorReadingFindUniqueOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorReadingFindFirstArgs>(args?: SelectSubset<T, SensorReadingFindFirstArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany()
     * 
     * // Get first 10 SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorReadingFindManyArgs>(args?: SelectSubset<T, SensorReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorReading.
     * @param {SensorReadingCreateArgs} args - Arguments to create a SensorReading.
     * @example
     * // Create one SensorReading
     * const SensorReading = await prisma.sensorReading.create({
     *   data: {
     *     // ... data to create a SensorReading
     *   }
     * })
     * 
     */
    create<T extends SensorReadingCreateArgs>(args: SelectSubset<T, SensorReadingCreateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorReadings.
     * @param {SensorReadingCreateManyArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorReadingCreateManyArgs>(args?: SelectSubset<T, SensorReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorReadings and returns the data saved in the database.
     * @param {SensorReadingCreateManyAndReturnArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorReading.
     * @param {SensorReadingDeleteArgs} args - Arguments to delete one SensorReading.
     * @example
     * // Delete one SensorReading
     * const SensorReading = await prisma.sensorReading.delete({
     *   where: {
     *     // ... filter to delete one SensorReading
     *   }
     * })
     * 
     */
    delete<T extends SensorReadingDeleteArgs>(args: SelectSubset<T, SensorReadingDeleteArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorReading.
     * @param {SensorReadingUpdateArgs} args - Arguments to update one SensorReading.
     * @example
     * // Update one SensorReading
     * const sensorReading = await prisma.sensorReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorReadingUpdateArgs>(args: SelectSubset<T, SensorReadingUpdateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorReadings.
     * @param {SensorReadingDeleteManyArgs} args - Arguments to filter SensorReadings to delete.
     * @example
     * // Delete a few SensorReadings
     * const { count } = await prisma.sensorReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorReadingDeleteManyArgs>(args?: SelectSubset<T, SensorReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorReadingUpdateManyArgs>(args: SelectSubset<T, SensorReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings and returns the data updated in the database.
     * @param {SensorReadingUpdateManyAndReturnArgs} args - Arguments to update many SensorReadings.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorReading.
     * @param {SensorReadingUpsertArgs} args - Arguments to update or create a SensorReading.
     * @example
     * // Update or create a SensorReading
     * const sensorReading = await prisma.sensorReading.upsert({
     *   create: {
     *     // ... data to create a SensorReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorReading we want to update
     *   }
     * })
     */
    upsert<T extends SensorReadingUpsertArgs>(args: SelectSubset<T, SensorReadingUpsertArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingCountArgs} args - Arguments to filter SensorReadings to count.
     * @example
     * // Count the number of SensorReadings
     * const count = await prisma.sensorReading.count({
     *   where: {
     *     // ... the filter for the SensorReadings we want to count
     *   }
     * })
    **/
    count<T extends SensorReadingCountArgs>(
      args?: Subset<T, SensorReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorReadingAggregateArgs>(args: Subset<T, SensorReadingAggregateArgs>): Prisma.PrismaPromise<GetSensorReadingAggregateType<T>>

    /**
     * Group by SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingGroupByArgs} args - Group by arguments.
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
      T extends SensorReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorReadingGroupByArgs['orderBy'] }
        : { orderBy?: SensorReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorReading model
   */
  readonly fields: SensorReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SensorReading model
   */
  interface SensorReadingFieldRefs {
    readonly id: FieldRef<"SensorReading", 'String'>
    readonly timestamp: FieldRef<"SensorReading", 'DateTime'>
    readonly fuelLevel: FieldRef<"SensorReading", 'Float'>
    readonly distanceKm: FieldRef<"SensorReading", 'Float'>
    readonly locationLat: FieldRef<"SensorReading", 'Float'>
    readonly locationLong: FieldRef<"SensorReading", 'Float'>
    readonly speed: FieldRef<"SensorReading", 'Float'>
    readonly ignitionStatus: FieldRef<"SensorReading", 'String'>
    readonly odometer: FieldRef<"SensorReading", 'Float'>
    readonly deviceVoltage: FieldRef<"SensorReading", 'Float'>
    readonly isOverSpeed: FieldRef<"SensorReading", 'Boolean'>
    readonly processed: FieldRef<"SensorReading", 'Boolean'>
    readonly sensorId: FieldRef<"SensorReading", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SensorReading findUnique
   */
  export type SensorReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findUniqueOrThrow
   */
  export type SensorReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findFirst
   */
  export type SensorReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findFirstOrThrow
   */
  export type SensorReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findMany
   */
  export type SensorReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReadings to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading create
   */
  export type SensorReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorReading.
     */
    data: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
  }

  /**
   * SensorReading createMany
   */
  export type SensorReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorReading createManyAndReturn
   */
  export type SensorReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading update
   */
  export type SensorReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorReading.
     */
    data: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
    /**
     * Choose, which SensorReading to update.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading updateMany
   */
  export type SensorReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
  }

  /**
   * SensorReading updateManyAndReturn
   */
  export type SensorReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading upsert
   */
  export type SensorReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorReading to update in case it exists.
     */
    where: SensorReadingWhereUniqueInput
    /**
     * In case the SensorReading found by the `where` argument doesn't exist, create a new SensorReading with this data.
     */
    create: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
    /**
     * In case the SensorReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
  }

  /**
   * SensorReading delete
   */
  export type SensorReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter which SensorReading to delete.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading deleteMany
   */
  export type SensorReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReadings to delete
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to delete.
     */
    limit?: number
  }

  /**
   * SensorReading without action
   */
  export type SensorReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    locationLat: number | null
    locationLong: number | null
  }

  export type AlertSumAggregateOutputType = {
    locationLat: number | null
    locationLong: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    type: $Enums.AlertType | null
    description: string | null
    locationLat: number | null
    locationLong: number | null
    sensorId: string | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    type: $Enums.AlertType | null
    description: string | null
    locationLat: number | null
    locationLong: number | null
    sensorId: string | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    timestamp: number
    type: number
    description: number
    locationLat: number
    locationLong: number
    sensorId: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    locationLat?: true
    locationLong?: true
  }

  export type AlertSumAggregateInputType = {
    locationLat?: true
    locationLong?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    locationLat?: true
    locationLong?: true
    sensorId?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    locationLat?: true
    locationLong?: true
    sensorId?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    locationLat?: true
    locationLong?: true
    sensorId?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    timestamp: Date
    type: $Enums.AlertType
    description: string | null
    locationLat: number
    locationLong: number
    sensorId: string
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    locationLat?: boolean
    locationLong?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    locationLat?: boolean
    locationLong?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    locationLat?: boolean
    locationLong?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    locationLat?: boolean
    locationLong?: boolean
    sensorId?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "type" | "description" | "locationLat" | "locationLong" | "sensorId", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      type: $Enums.AlertType
      description: string | null
      locationLat: number
      locationLong: number
      sensorId: string
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly timestamp: FieldRef<"Alert", 'DateTime'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly description: FieldRef<"Alert", 'String'>
    readonly locationLat: FieldRef<"Alert", 'Float'>
    readonly locationLong: FieldRef<"Alert", 'Float'>
    readonly sensorId: FieldRef<"Alert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    fuelLevel: number | null
    fuelDropLitres: number | null
    locationLat: number | null
    locationLong: number | null
  }

  export type HistorySumAggregateOutputType = {
    fuelLevel: number | null
    fuelDropLitres: number | null
    locationLat: number | null
    locationLong: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    type: $Enums.AlertType | null
    description: string | null
    fuelLevel: number | null
    fuelDropLitres: number | null
    vehicleId: string | null
    sensorId: string | null
    locationLat: number | null
    locationLong: number | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    type: $Enums.AlertType | null
    description: string | null
    fuelLevel: number | null
    fuelDropLitres: number | null
    vehicleId: string | null
    sensorId: string | null
    locationLat: number | null
    locationLong: number | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    timestamp: number
    type: number
    description: number
    fuelLevel: number
    fuelDropLitres: number
    vehicleId: number
    sensorId: number
    locationLat: number
    locationLong: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    fuelLevel?: true
    fuelDropLitres?: true
    locationLat?: true
    locationLong?: true
  }

  export type HistorySumAggregateInputType = {
    fuelLevel?: true
    fuelDropLitres?: true
    locationLat?: true
    locationLong?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    fuelLevel?: true
    fuelDropLitres?: true
    vehicleId?: true
    sensorId?: true
    locationLat?: true
    locationLong?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    fuelLevel?: true
    fuelDropLitres?: true
    vehicleId?: true
    sensorId?: true
    locationLat?: true
    locationLong?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    description?: true
    fuelLevel?: true
    fuelDropLitres?: true
    vehicleId?: true
    sensorId?: true
    locationLat?: true
    locationLong?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: string
    timestamp: Date
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres: number | null
    vehicleId: string
    sensorId: string
    locationLat: number
    locationLong: number
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    fuelLevel?: boolean
    fuelDropLitres?: boolean
    vehicleId?: boolean
    sensorId?: boolean
    locationLat?: boolean
    locationLong?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    fuelLevel?: boolean
    fuelDropLitres?: boolean
    vehicleId?: boolean
    sensorId?: boolean
    locationLat?: boolean
    locationLong?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    fuelLevel?: boolean
    fuelDropLitres?: boolean
    vehicleId?: boolean
    sensorId?: boolean
    locationLat?: boolean
    locationLong?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    timestamp?: boolean
    type?: boolean
    description?: boolean
    fuelLevel?: boolean
    fuelDropLitres?: boolean
    vehicleId?: boolean
    sensorId?: boolean
    locationLat?: boolean
    locationLong?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "type" | "description" | "fuelLevel" | "fuelDropLitres" | "vehicleId" | "sensorId" | "locationLat" | "locationLong", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      type: $Enums.AlertType
      description: string
      fuelLevel: number
      fuelDropLitres: number | null
      vehicleId: string
      sensorId: string
      locationLat: number
      locationLong: number
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'String'>
    readonly timestamp: FieldRef<"History", 'DateTime'>
    readonly type: FieldRef<"History", 'AlertType'>
    readonly description: FieldRef<"History", 'String'>
    readonly fuelLevel: FieldRef<"History", 'Float'>
    readonly fuelDropLitres: FieldRef<"History", 'Float'>
    readonly vehicleId: FieldRef<"History", 'String'>
    readonly sensorId: FieldRef<"History", 'String'>
    readonly locationLat: FieldRef<"History", 'Float'>
    readonly locationLong: FieldRef<"History", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model SummaryMetrics
   */

  export type AggregateSummaryMetrics = {
    _count: SummaryMetricsCountAggregateOutputType | null
    _avg: SummaryMetricsAvgAggregateOutputType | null
    _sum: SummaryMetricsSumAggregateOutputType | null
    _min: SummaryMetricsMinAggregateOutputType | null
    _max: SummaryMetricsMaxAggregateOutputType | null
  }

  export type SummaryMetricsAvgAggregateOutputType = {
    sFuelLevel: number | null
    eFuelLevel: number | null
    totalFuelConsumed: number | null
    totalFuelFills: number | null
    totalFuelDrops: number | null
    kmpl: number | null
    totalDistanceKm: number | null
    totalRunningHours: number | null
    totalIdleHours: number | null
    totalStoppageHours: number | null
  }

  export type SummaryMetricsSumAggregateOutputType = {
    sFuelLevel: number | null
    eFuelLevel: number | null
    totalFuelConsumed: number | null
    totalFuelFills: number | null
    totalFuelDrops: number | null
    kmpl: number | null
    totalDistanceKm: number | null
    totalRunningHours: number | null
    totalIdleHours: number | null
    totalStoppageHours: number | null
  }

  export type SummaryMetricsMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    fromDate: Date | null
    toDate: Date | null
    sFuelLevel: number | null
    eFuelLevel: number | null
    totalFuelConsumed: number | null
    totalFuelFills: number | null
    totalFuelDrops: number | null
    kmpl: number | null
    totalDistanceKm: number | null
    totalRunningHours: number | null
    totalIdleHours: number | null
    totalStoppageHours: number | null
    dropAlert: boolean | null
    fillAlert: boolean | null
  }

  export type SummaryMetricsMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    fromDate: Date | null
    toDate: Date | null
    sFuelLevel: number | null
    eFuelLevel: number | null
    totalFuelConsumed: number | null
    totalFuelFills: number | null
    totalFuelDrops: number | null
    kmpl: number | null
    totalDistanceKm: number | null
    totalRunningHours: number | null
    totalIdleHours: number | null
    totalStoppageHours: number | null
    dropAlert: boolean | null
    fillAlert: boolean | null
  }

  export type SummaryMetricsCountAggregateOutputType = {
    id: number
    vehicleId: number
    fromDate: number
    toDate: number
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert: number
    fillAlert: number
    _all: number
  }


  export type SummaryMetricsAvgAggregateInputType = {
    sFuelLevel?: true
    eFuelLevel?: true
    totalFuelConsumed?: true
    totalFuelFills?: true
    totalFuelDrops?: true
    kmpl?: true
    totalDistanceKm?: true
    totalRunningHours?: true
    totalIdleHours?: true
    totalStoppageHours?: true
  }

  export type SummaryMetricsSumAggregateInputType = {
    sFuelLevel?: true
    eFuelLevel?: true
    totalFuelConsumed?: true
    totalFuelFills?: true
    totalFuelDrops?: true
    kmpl?: true
    totalDistanceKm?: true
    totalRunningHours?: true
    totalIdleHours?: true
    totalStoppageHours?: true
  }

  export type SummaryMetricsMinAggregateInputType = {
    id?: true
    vehicleId?: true
    fromDate?: true
    toDate?: true
    sFuelLevel?: true
    eFuelLevel?: true
    totalFuelConsumed?: true
    totalFuelFills?: true
    totalFuelDrops?: true
    kmpl?: true
    totalDistanceKm?: true
    totalRunningHours?: true
    totalIdleHours?: true
    totalStoppageHours?: true
    dropAlert?: true
    fillAlert?: true
  }

  export type SummaryMetricsMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    fromDate?: true
    toDate?: true
    sFuelLevel?: true
    eFuelLevel?: true
    totalFuelConsumed?: true
    totalFuelFills?: true
    totalFuelDrops?: true
    kmpl?: true
    totalDistanceKm?: true
    totalRunningHours?: true
    totalIdleHours?: true
    totalStoppageHours?: true
    dropAlert?: true
    fillAlert?: true
  }

  export type SummaryMetricsCountAggregateInputType = {
    id?: true
    vehicleId?: true
    fromDate?: true
    toDate?: true
    sFuelLevel?: true
    eFuelLevel?: true
    totalFuelConsumed?: true
    totalFuelFills?: true
    totalFuelDrops?: true
    kmpl?: true
    totalDistanceKm?: true
    totalRunningHours?: true
    totalIdleHours?: true
    totalStoppageHours?: true
    dropAlert?: true
    fillAlert?: true
    _all?: true
  }

  export type SummaryMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryMetrics to aggregate.
     */
    where?: SummaryMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryMetrics to fetch.
     */
    orderBy?: SummaryMetricsOrderByWithRelationInput | SummaryMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SummaryMetrics
    **/
    _count?: true | SummaryMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SummaryMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SummaryMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMetricsMaxAggregateInputType
  }

  export type GetSummaryMetricsAggregateType<T extends SummaryMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateSummaryMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummaryMetrics[P]>
      : GetScalarType<T[P], AggregateSummaryMetrics[P]>
  }




  export type SummaryMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryMetricsWhereInput
    orderBy?: SummaryMetricsOrderByWithAggregationInput | SummaryMetricsOrderByWithAggregationInput[]
    by: SummaryMetricsScalarFieldEnum[] | SummaryMetricsScalarFieldEnum
    having?: SummaryMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryMetricsCountAggregateInputType | true
    _avg?: SummaryMetricsAvgAggregateInputType
    _sum?: SummaryMetricsSumAggregateInputType
    _min?: SummaryMetricsMinAggregateInputType
    _max?: SummaryMetricsMaxAggregateInputType
  }

  export type SummaryMetricsGroupByOutputType = {
    id: string
    vehicleId: string
    fromDate: Date
    toDate: Date
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert: boolean
    fillAlert: boolean
    _count: SummaryMetricsCountAggregateOutputType | null
    _avg: SummaryMetricsAvgAggregateOutputType | null
    _sum: SummaryMetricsSumAggregateOutputType | null
    _min: SummaryMetricsMinAggregateOutputType | null
    _max: SummaryMetricsMaxAggregateOutputType | null
  }

  type GetSummaryMetricsGroupByPayload<T extends SummaryMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryMetricsGroupByOutputType[P]>
        }
      >
    >


  export type SummaryMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    fromDate?: boolean
    toDate?: boolean
    sFuelLevel?: boolean
    eFuelLevel?: boolean
    totalFuelConsumed?: boolean
    totalFuelFills?: boolean
    totalFuelDrops?: boolean
    kmpl?: boolean
    totalDistanceKm?: boolean
    totalRunningHours?: boolean
    totalIdleHours?: boolean
    totalStoppageHours?: boolean
    dropAlert?: boolean
    fillAlert?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryMetrics"]>

  export type SummaryMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    fromDate?: boolean
    toDate?: boolean
    sFuelLevel?: boolean
    eFuelLevel?: boolean
    totalFuelConsumed?: boolean
    totalFuelFills?: boolean
    totalFuelDrops?: boolean
    kmpl?: boolean
    totalDistanceKm?: boolean
    totalRunningHours?: boolean
    totalIdleHours?: boolean
    totalStoppageHours?: boolean
    dropAlert?: boolean
    fillAlert?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryMetrics"]>

  export type SummaryMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    fromDate?: boolean
    toDate?: boolean
    sFuelLevel?: boolean
    eFuelLevel?: boolean
    totalFuelConsumed?: boolean
    totalFuelFills?: boolean
    totalFuelDrops?: boolean
    kmpl?: boolean
    totalDistanceKm?: boolean
    totalRunningHours?: boolean
    totalIdleHours?: boolean
    totalStoppageHours?: boolean
    dropAlert?: boolean
    fillAlert?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryMetrics"]>

  export type SummaryMetricsSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    fromDate?: boolean
    toDate?: boolean
    sFuelLevel?: boolean
    eFuelLevel?: boolean
    totalFuelConsumed?: boolean
    totalFuelFills?: boolean
    totalFuelDrops?: boolean
    kmpl?: boolean
    totalDistanceKm?: boolean
    totalRunningHours?: boolean
    totalIdleHours?: boolean
    totalStoppageHours?: boolean
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type SummaryMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "fromDate" | "toDate" | "sFuelLevel" | "eFuelLevel" | "totalFuelConsumed" | "totalFuelFills" | "totalFuelDrops" | "kmpl" | "totalDistanceKm" | "totalRunningHours" | "totalIdleHours" | "totalStoppageHours" | "dropAlert" | "fillAlert", ExtArgs["result"]["summaryMetrics"]>
  export type SummaryMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type SummaryMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type SummaryMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $SummaryMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SummaryMetrics"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      fromDate: Date
      toDate: Date
      sFuelLevel: number
      eFuelLevel: number
      totalFuelConsumed: number
      totalFuelFills: number
      totalFuelDrops: number
      kmpl: number
      totalDistanceKm: number
      totalRunningHours: number
      totalIdleHours: number
      totalStoppageHours: number
      dropAlert: boolean
      fillAlert: boolean
    }, ExtArgs["result"]["summaryMetrics"]>
    composites: {}
  }

  type SummaryMetricsGetPayload<S extends boolean | null | undefined | SummaryMetricsDefaultArgs> = $Result.GetResult<Prisma.$SummaryMetricsPayload, S>

  type SummaryMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SummaryMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummaryMetricsCountAggregateInputType | true
    }

  export interface SummaryMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SummaryMetrics'], meta: { name: 'SummaryMetrics' } }
    /**
     * Find zero or one SummaryMetrics that matches the filter.
     * @param {SummaryMetricsFindUniqueArgs} args - Arguments to find a SummaryMetrics
     * @example
     * // Get one SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryMetricsFindUniqueArgs>(args: SelectSubset<T, SummaryMetricsFindUniqueArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SummaryMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SummaryMetricsFindUniqueOrThrowArgs} args - Arguments to find a SummaryMetrics
     * @example
     * // Get one SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SummaryMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsFindFirstArgs} args - Arguments to find a SummaryMetrics
     * @example
     * // Get one SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryMetricsFindFirstArgs>(args?: SelectSubset<T, SummaryMetricsFindFirstArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SummaryMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsFindFirstOrThrowArgs} args - Arguments to find a SummaryMetrics
     * @example
     * // Get one SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SummaryMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findMany()
     * 
     * // Get first 10 SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryMetricsWithIdOnly = await prisma.summaryMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryMetricsFindManyArgs>(args?: SelectSubset<T, SummaryMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SummaryMetrics.
     * @param {SummaryMetricsCreateArgs} args - Arguments to create a SummaryMetrics.
     * @example
     * // Create one SummaryMetrics
     * const SummaryMetrics = await prisma.summaryMetrics.create({
     *   data: {
     *     // ... data to create a SummaryMetrics
     *   }
     * })
     * 
     */
    create<T extends SummaryMetricsCreateArgs>(args: SelectSubset<T, SummaryMetricsCreateArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SummaryMetrics.
     * @param {SummaryMetricsCreateManyArgs} args - Arguments to create many SummaryMetrics.
     * @example
     * // Create many SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryMetricsCreateManyArgs>(args?: SelectSubset<T, SummaryMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SummaryMetrics and returns the data saved in the database.
     * @param {SummaryMetricsCreateManyAndReturnArgs} args - Arguments to create many SummaryMetrics.
     * @example
     * // Create many SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SummaryMetrics and only return the `id`
     * const summaryMetricsWithIdOnly = await prisma.summaryMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SummaryMetrics.
     * @param {SummaryMetricsDeleteArgs} args - Arguments to delete one SummaryMetrics.
     * @example
     * // Delete one SummaryMetrics
     * const SummaryMetrics = await prisma.summaryMetrics.delete({
     *   where: {
     *     // ... filter to delete one SummaryMetrics
     *   }
     * })
     * 
     */
    delete<T extends SummaryMetricsDeleteArgs>(args: SelectSubset<T, SummaryMetricsDeleteArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SummaryMetrics.
     * @param {SummaryMetricsUpdateArgs} args - Arguments to update one SummaryMetrics.
     * @example
     * // Update one SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryMetricsUpdateArgs>(args: SelectSubset<T, SummaryMetricsUpdateArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SummaryMetrics.
     * @param {SummaryMetricsDeleteManyArgs} args - Arguments to filter SummaryMetrics to delete.
     * @example
     * // Delete a few SummaryMetrics
     * const { count } = await prisma.summaryMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryMetricsDeleteManyArgs>(args?: SelectSubset<T, SummaryMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryMetricsUpdateManyArgs>(args: SelectSubset<T, SummaryMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryMetrics and returns the data updated in the database.
     * @param {SummaryMetricsUpdateManyAndReturnArgs} args - Arguments to update many SummaryMetrics.
     * @example
     * // Update many SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SummaryMetrics and only return the `id`
     * const summaryMetricsWithIdOnly = await prisma.summaryMetrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends SummaryMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, SummaryMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SummaryMetrics.
     * @param {SummaryMetricsUpsertArgs} args - Arguments to update or create a SummaryMetrics.
     * @example
     * // Update or create a SummaryMetrics
     * const summaryMetrics = await prisma.summaryMetrics.upsert({
     *   create: {
     *     // ... data to create a SummaryMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SummaryMetrics we want to update
     *   }
     * })
     */
    upsert<T extends SummaryMetricsUpsertArgs>(args: SelectSubset<T, SummaryMetricsUpsertArgs<ExtArgs>>): Prisma__SummaryMetricsClient<$Result.GetResult<Prisma.$SummaryMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SummaryMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsCountArgs} args - Arguments to filter SummaryMetrics to count.
     * @example
     * // Count the number of SummaryMetrics
     * const count = await prisma.summaryMetrics.count({
     *   where: {
     *     // ... the filter for the SummaryMetrics we want to count
     *   }
     * })
    **/
    count<T extends SummaryMetricsCountArgs>(
      args?: Subset<T, SummaryMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SummaryMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SummaryMetricsAggregateArgs>(args: Subset<T, SummaryMetricsAggregateArgs>): Prisma.PrismaPromise<GetSummaryMetricsAggregateType<T>>

    /**
     * Group by SummaryMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryMetricsGroupByArgs} args - Group by arguments.
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
      T extends SummaryMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryMetricsGroupByArgs['orderBy'] }
        : { orderBy?: SummaryMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SummaryMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SummaryMetrics model
   */
  readonly fields: SummaryMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SummaryMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SummaryMetrics model
   */
  interface SummaryMetricsFieldRefs {
    readonly id: FieldRef<"SummaryMetrics", 'String'>
    readonly vehicleId: FieldRef<"SummaryMetrics", 'String'>
    readonly fromDate: FieldRef<"SummaryMetrics", 'DateTime'>
    readonly toDate: FieldRef<"SummaryMetrics", 'DateTime'>
    readonly sFuelLevel: FieldRef<"SummaryMetrics", 'Float'>
    readonly eFuelLevel: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalFuelConsumed: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalFuelFills: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalFuelDrops: FieldRef<"SummaryMetrics", 'Float'>
    readonly kmpl: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalDistanceKm: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalRunningHours: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalIdleHours: FieldRef<"SummaryMetrics", 'Float'>
    readonly totalStoppageHours: FieldRef<"SummaryMetrics", 'Float'>
    readonly dropAlert: FieldRef<"SummaryMetrics", 'Boolean'>
    readonly fillAlert: FieldRef<"SummaryMetrics", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SummaryMetrics findUnique
   */
  export type SummaryMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SummaryMetrics to fetch.
     */
    where: SummaryMetricsWhereUniqueInput
  }

  /**
   * SummaryMetrics findUniqueOrThrow
   */
  export type SummaryMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SummaryMetrics to fetch.
     */
    where: SummaryMetricsWhereUniqueInput
  }

  /**
   * SummaryMetrics findFirst
   */
  export type SummaryMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SummaryMetrics to fetch.
     */
    where?: SummaryMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryMetrics to fetch.
     */
    orderBy?: SummaryMetricsOrderByWithRelationInput | SummaryMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryMetrics.
     */
    cursor?: SummaryMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryMetrics.
     */
    distinct?: SummaryMetricsScalarFieldEnum | SummaryMetricsScalarFieldEnum[]
  }

  /**
   * SummaryMetrics findFirstOrThrow
   */
  export type SummaryMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SummaryMetrics to fetch.
     */
    where?: SummaryMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryMetrics to fetch.
     */
    orderBy?: SummaryMetricsOrderByWithRelationInput | SummaryMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryMetrics.
     */
    cursor?: SummaryMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryMetrics.
     */
    distinct?: SummaryMetricsScalarFieldEnum | SummaryMetricsScalarFieldEnum[]
  }

  /**
   * SummaryMetrics findMany
   */
  export type SummaryMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SummaryMetrics to fetch.
     */
    where?: SummaryMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryMetrics to fetch.
     */
    orderBy?: SummaryMetricsOrderByWithRelationInput | SummaryMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SummaryMetrics.
     */
    cursor?: SummaryMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryMetrics.
     */
    skip?: number
    distinct?: SummaryMetricsScalarFieldEnum | SummaryMetricsScalarFieldEnum[]
  }

  /**
   * SummaryMetrics create
   */
  export type SummaryMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a SummaryMetrics.
     */
    data: XOR<SummaryMetricsCreateInput, SummaryMetricsUncheckedCreateInput>
  }

  /**
   * SummaryMetrics createMany
   */
  export type SummaryMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SummaryMetrics.
     */
    data: SummaryMetricsCreateManyInput | SummaryMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SummaryMetrics createManyAndReturn
   */
  export type SummaryMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many SummaryMetrics.
     */
    data: SummaryMetricsCreateManyInput | SummaryMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryMetrics update
   */
  export type SummaryMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a SummaryMetrics.
     */
    data: XOR<SummaryMetricsUpdateInput, SummaryMetricsUncheckedUpdateInput>
    /**
     * Choose, which SummaryMetrics to update.
     */
    where: SummaryMetricsWhereUniqueInput
  }

  /**
   * SummaryMetrics updateMany
   */
  export type SummaryMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SummaryMetrics.
     */
    data: XOR<SummaryMetricsUpdateManyMutationInput, SummaryMetricsUncheckedUpdateManyInput>
    /**
     * Filter which SummaryMetrics to update
     */
    where?: SummaryMetricsWhereInput
    /**
     * Limit how many SummaryMetrics to update.
     */
    limit?: number
  }

  /**
   * SummaryMetrics updateManyAndReturn
   */
  export type SummaryMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * The data used to update SummaryMetrics.
     */
    data: XOR<SummaryMetricsUpdateManyMutationInput, SummaryMetricsUncheckedUpdateManyInput>
    /**
     * Filter which SummaryMetrics to update
     */
    where?: SummaryMetricsWhereInput
    /**
     * Limit how many SummaryMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryMetrics upsert
   */
  export type SummaryMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the SummaryMetrics to update in case it exists.
     */
    where: SummaryMetricsWhereUniqueInput
    /**
     * In case the SummaryMetrics found by the `where` argument doesn't exist, create a new SummaryMetrics with this data.
     */
    create: XOR<SummaryMetricsCreateInput, SummaryMetricsUncheckedCreateInput>
    /**
     * In case the SummaryMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryMetricsUpdateInput, SummaryMetricsUncheckedUpdateInput>
  }

  /**
   * SummaryMetrics delete
   */
  export type SummaryMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
    /**
     * Filter which SummaryMetrics to delete.
     */
    where: SummaryMetricsWhereUniqueInput
  }

  /**
   * SummaryMetrics deleteMany
   */
  export type SummaryMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryMetrics to delete
     */
    where?: SummaryMetricsWhereInput
    /**
     * Limit how many SummaryMetrics to delete.
     */
    limit?: number
  }

  /**
   * SummaryMetrics without action
   */
  export type SummaryMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryMetrics
     */
    select?: SummaryMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryMetrics
     */
    omit?: SummaryMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryMetricsInclude<ExtArgs> | null
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


  export const VehicleScalarFieldEnum: {
    id: 'id',
    registrationNo: 'registrationNo',
    model: 'model',
    tankSize: 'tankSize',
    mileageEst: 'mileageEst',
    createdAt: 'createdAt',
    routeId: 'routeId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    licenseNo: 'licenseNo',
    createdAt: 'createdAt',
    vehicleId: 'vehicleId'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startPoint: 'startPoint',
    endPoint: 'endPoint',
    createdAt: 'createdAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    sensorCode: 'sensorCode',
    isActive: 'isActive',
    installedAt: 'installedAt',
    lastSeen: 'lastSeen',
    vehicleId: 'vehicleId'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const SensorReadingScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    fuelLevel: 'fuelLevel',
    distanceKm: 'distanceKm',
    locationLat: 'locationLat',
    locationLong: 'locationLong',
    speed: 'speed',
    ignitionStatus: 'ignitionStatus',
    odometer: 'odometer',
    deviceVoltage: 'deviceVoltage',
    isOverSpeed: 'isOverSpeed',
    processed: 'processed',
    sensorId: 'sensorId'
  };

  export type SensorReadingScalarFieldEnum = (typeof SensorReadingScalarFieldEnum)[keyof typeof SensorReadingScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    type: 'type',
    description: 'description',
    locationLat: 'locationLat',
    locationLong: 'locationLong',
    sensorId: 'sensorId'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    type: 'type',
    description: 'description',
    fuelLevel: 'fuelLevel',
    fuelDropLitres: 'fuelDropLitres',
    vehicleId: 'vehicleId',
    sensorId: 'sensorId',
    locationLat: 'locationLat',
    locationLong: 'locationLong'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const SummaryMetricsScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    fromDate: 'fromDate',
    toDate: 'toDate',
    sFuelLevel: 'sFuelLevel',
    eFuelLevel: 'eFuelLevel',
    totalFuelConsumed: 'totalFuelConsumed',
    totalFuelFills: 'totalFuelFills',
    totalFuelDrops: 'totalFuelDrops',
    kmpl: 'kmpl',
    totalDistanceKm: 'totalDistanceKm',
    totalRunningHours: 'totalRunningHours',
    totalIdleHours: 'totalIdleHours',
    totalStoppageHours: 'totalStoppageHours',
    dropAlert: 'dropAlert',
    fillAlert: 'fillAlert'
  };

  export type SummaryMetricsScalarFieldEnum = (typeof SummaryMetricsScalarFieldEnum)[keyof typeof SummaryMetricsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    
  /**
   * Deep Input Types
   */


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    registrationNo?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    tankSize?: IntNullableFilter<"Vehicle"> | number | null
    mileageEst?: FloatNullableFilter<"Vehicle"> | number | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    routeId?: StringNullableFilter<"Vehicle"> | string | null
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    sensor?: XOR<SensorNullableScalarRelationFilter, SensorWhereInput> | null
    histories?: HistoryListRelationFilter
    summaries?: SummaryMetricsListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrderInput | SortOrder
    tankSize?: SortOrderInput | SortOrder
    mileageEst?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    routeId?: SortOrderInput | SortOrder
    driver?: DriverOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    sensor?: SensorOrderByWithRelationInput
    histories?: HistoryOrderByRelationAggregateInput
    summaries?: SummaryMetricsOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registrationNo?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    model?: StringNullableFilter<"Vehicle"> | string | null
    tankSize?: IntNullableFilter<"Vehicle"> | number | null
    mileageEst?: FloatNullableFilter<"Vehicle"> | number | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    routeId?: StringNullableFilter<"Vehicle"> | string | null
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    sensor?: XOR<SensorNullableScalarRelationFilter, SensorWhereInput> | null
    histories?: HistoryListRelationFilter
    summaries?: SummaryMetricsListRelationFilter
  }, "id" | "registrationNo">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrderInput | SortOrder
    tankSize?: SortOrderInput | SortOrder
    mileageEst?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    routeId?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    registrationNo?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    tankSize?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    mileageEst?: FloatNullableWithAggregatesFilter<"Vehicle"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    routeId?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    licenseNo?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    vehicleId?: StringFilter<"Driver"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    createdAt?: SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    licenseNo?: string
    vehicleId?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id" | "phone" | "licenseNo" | "vehicleId">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    createdAt?: SortOrder
    vehicleId?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    licenseNo?: StringWithAggregatesFilter<"Driver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"Driver"> | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    name?: StringFilter<"Route"> | string
    startPoint?: StringFilter<"Route"> | string
    endPoint?: StringFilter<"Route"> | string
    createdAt?: DateTimeFilter<"Route"> | Date | string
    vehicles?: VehicleListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startPoint?: SortOrder
    endPoint?: SortOrder
    createdAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    startPoint?: StringFilter<"Route"> | string
    endPoint?: StringFilter<"Route"> | string
    createdAt?: DateTimeFilter<"Route"> | Date | string
    vehicles?: VehicleListRelationFilter
  }, "id" | "name">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startPoint?: SortOrder
    endPoint?: SortOrder
    createdAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    name?: StringWithAggregatesFilter<"Route"> | string
    startPoint?: StringWithAggregatesFilter<"Route"> | string
    endPoint?: StringWithAggregatesFilter<"Route"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorCode?: StringFilter<"Sensor"> | string
    isActive?: BoolFilter<"Sensor"> | boolean
    installedAt?: DateTimeFilter<"Sensor"> | Date | string
    lastSeen?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    vehicleId?: StringFilter<"Sensor"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    readings?: SensorReadingListRelationFilter
    alerts?: AlertListRelationFilter
    histories?: HistoryListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    isActive?: SortOrder
    installedAt?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    readings?: SensorReadingOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    histories?: HistoryOrderByRelationAggregateInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sensorCode?: string
    vehicleId?: string
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    isActive?: BoolFilter<"Sensor"> | boolean
    installedAt?: DateTimeFilter<"Sensor"> | Date | string
    lastSeen?: DateTimeNullableFilter<"Sensor"> | Date | string | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    readings?: SensorReadingListRelationFilter
    alerts?: AlertListRelationFilter
    histories?: HistoryListRelationFilter
  }, "id" | "sensorCode" | "vehicleId">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    isActive?: SortOrder
    installedAt?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sensor"> | string
    sensorCode?: StringWithAggregatesFilter<"Sensor"> | string
    isActive?: BoolWithAggregatesFilter<"Sensor"> | boolean
    installedAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Sensor"> | Date | string | null
    vehicleId?: StringWithAggregatesFilter<"Sensor"> | string
  }

  export type SensorReadingWhereInput = {
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    fuelLevel?: FloatFilter<"SensorReading"> | number
    distanceKm?: FloatFilter<"SensorReading"> | number
    locationLat?: FloatFilter<"SensorReading"> | number
    locationLong?: FloatFilter<"SensorReading"> | number
    speed?: FloatFilter<"SensorReading"> | number
    ignitionStatus?: StringNullableFilter<"SensorReading"> | string | null
    odometer?: FloatNullableFilter<"SensorReading"> | number | null
    deviceVoltage?: FloatNullableFilter<"SensorReading"> | number | null
    isOverSpeed?: BoolNullableFilter<"SensorReading"> | boolean | null
    processed?: BoolFilter<"SensorReading"> | boolean
    sensorId?: StringFilter<"SensorReading"> | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type SensorReadingOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    ignitionStatus?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    deviceVoltage?: SortOrderInput | SortOrder
    isOverSpeed?: SortOrderInput | SortOrder
    processed?: SortOrder
    sensorId?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type SensorReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    fuelLevel?: FloatFilter<"SensorReading"> | number
    distanceKm?: FloatFilter<"SensorReading"> | number
    locationLat?: FloatFilter<"SensorReading"> | number
    locationLong?: FloatFilter<"SensorReading"> | number
    speed?: FloatFilter<"SensorReading"> | number
    ignitionStatus?: StringNullableFilter<"SensorReading"> | string | null
    odometer?: FloatNullableFilter<"SensorReading"> | number | null
    deviceVoltage?: FloatNullableFilter<"SensorReading"> | number | null
    isOverSpeed?: BoolNullableFilter<"SensorReading"> | boolean | null
    processed?: BoolFilter<"SensorReading"> | boolean
    sensorId?: StringFilter<"SensorReading"> | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type SensorReadingOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    ignitionStatus?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    deviceVoltage?: SortOrderInput | SortOrder
    isOverSpeed?: SortOrderInput | SortOrder
    processed?: SortOrder
    sensorId?: SortOrder
    _count?: SensorReadingCountOrderByAggregateInput
    _avg?: SensorReadingAvgOrderByAggregateInput
    _max?: SensorReadingMaxOrderByAggregateInput
    _min?: SensorReadingMinOrderByAggregateInput
    _sum?: SensorReadingSumOrderByAggregateInput
  }

  export type SensorReadingScalarWhereWithAggregatesInput = {
    AND?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    OR?: SensorReadingScalarWhereWithAggregatesInput[]
    NOT?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SensorReading"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SensorReading"> | Date | string
    fuelLevel?: FloatWithAggregatesFilter<"SensorReading"> | number
    distanceKm?: FloatWithAggregatesFilter<"SensorReading"> | number
    locationLat?: FloatWithAggregatesFilter<"SensorReading"> | number
    locationLong?: FloatWithAggregatesFilter<"SensorReading"> | number
    speed?: FloatWithAggregatesFilter<"SensorReading"> | number
    ignitionStatus?: StringNullableWithAggregatesFilter<"SensorReading"> | string | null
    odometer?: FloatNullableWithAggregatesFilter<"SensorReading"> | number | null
    deviceVoltage?: FloatNullableWithAggregatesFilter<"SensorReading"> | number | null
    isOverSpeed?: BoolNullableWithAggregatesFilter<"SensorReading"> | boolean | null
    processed?: BoolWithAggregatesFilter<"SensorReading"> | boolean
    sensorId?: StringWithAggregatesFilter<"SensorReading"> | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    description?: StringNullableFilter<"Alert"> | string | null
    locationLat?: FloatFilter<"Alert"> | number
    locationLong?: FloatFilter<"Alert"> | number
    sensorId?: StringFilter<"Alert"> | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    sensorId?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    description?: StringNullableFilter<"Alert"> | string | null
    locationLat?: FloatFilter<"Alert"> | number
    locationLong?: FloatFilter<"Alert"> | number
    sensorId?: StringFilter<"Alert"> | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    sensorId?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    description?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    locationLat?: FloatWithAggregatesFilter<"Alert"> | number
    locationLong?: FloatWithAggregatesFilter<"Alert"> | number
    sensorId?: StringWithAggregatesFilter<"Alert"> | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: StringFilter<"History"> | string
    timestamp?: DateTimeFilter<"History"> | Date | string
    type?: EnumAlertTypeFilter<"History"> | $Enums.AlertType
    description?: StringFilter<"History"> | string
    fuelLevel?: FloatFilter<"History"> | number
    fuelDropLitres?: FloatNullableFilter<"History"> | number | null
    vehicleId?: StringFilter<"History"> | string
    sensorId?: StringFilter<"History"> | string
    locationLat?: FloatFilter<"History"> | number
    locationLong?: FloatFilter<"History"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    sensorId?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    sensor?: SensorOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    timestamp?: DateTimeFilter<"History"> | Date | string
    type?: EnumAlertTypeFilter<"History"> | $Enums.AlertType
    description?: StringFilter<"History"> | string
    fuelLevel?: FloatFilter<"History"> | number
    fuelDropLitres?: FloatNullableFilter<"History"> | number | null
    vehicleId?: StringFilter<"History"> | string
    sensorId?: StringFilter<"History"> | string
    locationLat?: FloatFilter<"History"> | number
    locationLong?: FloatFilter<"History"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    sensorId?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"History"> | string
    timestamp?: DateTimeWithAggregatesFilter<"History"> | Date | string
    type?: EnumAlertTypeWithAggregatesFilter<"History"> | $Enums.AlertType
    description?: StringWithAggregatesFilter<"History"> | string
    fuelLevel?: FloatWithAggregatesFilter<"History"> | number
    fuelDropLitres?: FloatNullableWithAggregatesFilter<"History"> | number | null
    vehicleId?: StringWithAggregatesFilter<"History"> | string
    sensorId?: StringWithAggregatesFilter<"History"> | string
    locationLat?: FloatWithAggregatesFilter<"History"> | number
    locationLong?: FloatWithAggregatesFilter<"History"> | number
  }

  export type SummaryMetricsWhereInput = {
    AND?: SummaryMetricsWhereInput | SummaryMetricsWhereInput[]
    OR?: SummaryMetricsWhereInput[]
    NOT?: SummaryMetricsWhereInput | SummaryMetricsWhereInput[]
    id?: StringFilter<"SummaryMetrics"> | string
    vehicleId?: StringFilter<"SummaryMetrics"> | string
    fromDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    toDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    sFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    eFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    totalFuelConsumed?: FloatFilter<"SummaryMetrics"> | number
    totalFuelFills?: FloatFilter<"SummaryMetrics"> | number
    totalFuelDrops?: FloatFilter<"SummaryMetrics"> | number
    kmpl?: FloatFilter<"SummaryMetrics"> | number
    totalDistanceKm?: FloatFilter<"SummaryMetrics"> | number
    totalRunningHours?: FloatFilter<"SummaryMetrics"> | number
    totalIdleHours?: FloatFilter<"SummaryMetrics"> | number
    totalStoppageHours?: FloatFilter<"SummaryMetrics"> | number
    dropAlert?: BoolFilter<"SummaryMetrics"> | boolean
    fillAlert?: BoolFilter<"SummaryMetrics"> | boolean
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type SummaryMetricsOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
    dropAlert?: SortOrder
    fillAlert?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type SummaryMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SummaryMetricsWhereInput | SummaryMetricsWhereInput[]
    OR?: SummaryMetricsWhereInput[]
    NOT?: SummaryMetricsWhereInput | SummaryMetricsWhereInput[]
    vehicleId?: StringFilter<"SummaryMetrics"> | string
    fromDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    toDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    sFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    eFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    totalFuelConsumed?: FloatFilter<"SummaryMetrics"> | number
    totalFuelFills?: FloatFilter<"SummaryMetrics"> | number
    totalFuelDrops?: FloatFilter<"SummaryMetrics"> | number
    kmpl?: FloatFilter<"SummaryMetrics"> | number
    totalDistanceKm?: FloatFilter<"SummaryMetrics"> | number
    totalRunningHours?: FloatFilter<"SummaryMetrics"> | number
    totalIdleHours?: FloatFilter<"SummaryMetrics"> | number
    totalStoppageHours?: FloatFilter<"SummaryMetrics"> | number
    dropAlert?: BoolFilter<"SummaryMetrics"> | boolean
    fillAlert?: BoolFilter<"SummaryMetrics"> | boolean
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type SummaryMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
    dropAlert?: SortOrder
    fillAlert?: SortOrder
    _count?: SummaryMetricsCountOrderByAggregateInput
    _avg?: SummaryMetricsAvgOrderByAggregateInput
    _max?: SummaryMetricsMaxOrderByAggregateInput
    _min?: SummaryMetricsMinOrderByAggregateInput
    _sum?: SummaryMetricsSumOrderByAggregateInput
  }

  export type SummaryMetricsScalarWhereWithAggregatesInput = {
    AND?: SummaryMetricsScalarWhereWithAggregatesInput | SummaryMetricsScalarWhereWithAggregatesInput[]
    OR?: SummaryMetricsScalarWhereWithAggregatesInput[]
    NOT?: SummaryMetricsScalarWhereWithAggregatesInput | SummaryMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SummaryMetrics"> | string
    vehicleId?: StringWithAggregatesFilter<"SummaryMetrics"> | string
    fromDate?: DateTimeWithAggregatesFilter<"SummaryMetrics"> | Date | string
    toDate?: DateTimeWithAggregatesFilter<"SummaryMetrics"> | Date | string
    sFuelLevel?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    eFuelLevel?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalFuelConsumed?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalFuelFills?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalFuelDrops?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    kmpl?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalDistanceKm?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalRunningHours?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalIdleHours?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    totalStoppageHours?: FloatWithAggregatesFilter<"SummaryMetrics"> | number
    dropAlert?: BoolWithAggregatesFilter<"SummaryMetrics"> | boolean
    fillAlert?: BoolWithAggregatesFilter<"SummaryMetrics"> | boolean
  }

  export type VehicleCreateInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverCreateNestedOneWithoutVehicleInput
    route?: RouteCreateNestedOneWithoutVehiclesInput
    sensor?: SensorCreateNestedOneWithoutVehicleInput
    histories?: HistoryCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
    driver?: DriverUncheckedCreateNestedOneWithoutVehicleInput
    sensor?: SensorUncheckedCreateNestedOneWithoutVehicleInput
    histories?: HistoryUncheckedCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutVehicleNestedInput
    route?: RouteUpdateOneWithoutVehiclesNestedInput
    sensor?: SensorUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    driver?: DriverUncheckedUpdateOneWithoutVehicleNestedInput
    sensor?: SensorUncheckedUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverCreateInput = {
    id?: string
    name: string
    phone: string
    licenseNo: string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    licenseNo: string
    createdAt?: Date | string
    vehicleId: string
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type DriverCreateManyInput = {
    id?: string
    name: string
    phone: string
    licenseNo: string
    createdAt?: Date | string
    vehicleId: string
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteCreateInput = {
    id?: string
    name: string
    startPoint: string
    endPoint: string
    createdAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    name: string
    startPoint: string
    endPoint: string
    createdAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    name: string
    startPoint: string
    endPoint: string
    createdAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutSensorInput
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
    histories?: HistoryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicleId: string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
    histories?: HistoryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutSensorNestedInput
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
    histories?: HistoryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateManyInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicleId: string
  }

  export type SensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type SensorReadingCreateInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
    sensor: SensorCreateNestedOneWithoutReadingsInput
  }

  export type SensorReadingUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
    sensorId: string
  }

  export type SensorReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    sensor?: SensorUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type SensorReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    sensorId?: StringFieldUpdateOperationsInput | string
  }

  export type SensorReadingCreateManyInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
    sensorId: string
  }

  export type SensorReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SensorReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    sensorId?: StringFieldUpdateOperationsInput | string
  }

  export type AlertCreateInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
    sensor: SensorCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
    sensorId: string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    sensor?: SensorUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    sensorId?: StringFieldUpdateOperationsInput | string
  }

  export type AlertCreateManyInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
    sensorId: string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    sensorId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    locationLat: number
    locationLong: number
    vehicle: VehicleCreateNestedOneWithoutHistoriesInput
    sensor: SensorCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    vehicleId: string
    sensorId: string
    locationLat: number
    locationLong: number
  }

  export type HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutHistoriesNestedInput
    sensor?: SensorUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryCreateManyInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    vehicleId: string
    sensorId: string
    locationLat: number
    locationLong: number
  }

  export type HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type SummaryMetricsCreateInput = {
    id?: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
    vehicle: VehicleCreateNestedOneWithoutSummariesInput
  }

  export type SummaryMetricsUncheckedCreateInput = {
    id?: string
    vehicleId: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type SummaryMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutSummariesNestedInput
  }

  export type SummaryMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SummaryMetricsCreateManyInput = {
    id?: string
    vehicleId: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type SummaryMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SummaryMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type RouteNullableScalarRelationFilter = {
    is?: RouteWhereInput | null
    isNot?: RouteWhereInput | null
  }

  export type SensorNullableScalarRelationFilter = {
    is?: SensorWhereInput | null
    isNot?: SensorWhereInput | null
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SummaryMetricsListRelationFilter = {
    every?: SummaryMetricsWhereInput
    some?: SummaryMetricsWhereInput
    none?: SummaryMetricsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SummaryMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    tankSize?: SortOrder
    mileageEst?: SortOrder
    createdAt?: SortOrder
    routeId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    tankSize?: SortOrder
    mileageEst?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    tankSize?: SortOrder
    mileageEst?: SortOrder
    createdAt?: SortOrder
    routeId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    tankSize?: SortOrder
    mileageEst?: SortOrder
    createdAt?: SortOrder
    routeId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    tankSize?: SortOrder
    mileageEst?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    createdAt?: SortOrder
    vehicleId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    createdAt?: SortOrder
    vehicleId?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    createdAt?: SortOrder
    vehicleId?: SortOrder
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startPoint?: SortOrder
    endPoint?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startPoint?: SortOrder
    endPoint?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startPoint?: SortOrder
    endPoint?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SensorReadingListRelationFilter = {
    every?: SensorReadingWhereInput
    some?: SensorReadingWhereInput
    none?: SensorReadingWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type SensorReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    isActive?: SortOrder
    installedAt?: SortOrder
    lastSeen?: SortOrder
    vehicleId?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    isActive?: SortOrder
    installedAt?: SortOrder
    lastSeen?: SortOrder
    vehicleId?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    sensorCode?: SortOrder
    isActive?: SortOrder
    installedAt?: SortOrder
    lastSeen?: SortOrder
    vehicleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SensorScalarRelationFilter = {
    is?: SensorWhereInput
    isNot?: SensorWhereInput
  }

  export type SensorReadingCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    ignitionStatus?: SortOrder
    odometer?: SortOrder
    deviceVoltage?: SortOrder
    isOverSpeed?: SortOrder
    processed?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorReadingAvgOrderByAggregateInput = {
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    odometer?: SortOrder
    deviceVoltage?: SortOrder
  }

  export type SensorReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    ignitionStatus?: SortOrder
    odometer?: SortOrder
    deviceVoltage?: SortOrder
    isOverSpeed?: SortOrder
    processed?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorReadingMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    ignitionStatus?: SortOrder
    odometer?: SortOrder
    deviceVoltage?: SortOrder
    isOverSpeed?: SortOrder
    processed?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorReadingSumOrderByAggregateInput = {
    fuelLevel?: SortOrder
    distanceKm?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    speed?: SortOrder
    odometer?: SortOrder
    deviceVoltage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    sensorId?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    sensorId?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
    sensorId?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrder
    vehicleId?: SortOrder
    sensorId?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrder
    vehicleId?: SortOrder
    sensorId?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    description?: SortOrder
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrder
    vehicleId?: SortOrder
    sensorId?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    fuelLevel?: SortOrder
    fuelDropLitres?: SortOrder
    locationLat?: SortOrder
    locationLong?: SortOrder
  }

  export type SummaryMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
    dropAlert?: SortOrder
    fillAlert?: SortOrder
  }

  export type SummaryMetricsAvgOrderByAggregateInput = {
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
  }

  export type SummaryMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
    dropAlert?: SortOrder
    fillAlert?: SortOrder
  }

  export type SummaryMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
    dropAlert?: SortOrder
    fillAlert?: SortOrder
  }

  export type SummaryMetricsSumOrderByAggregateInput = {
    sFuelLevel?: SortOrder
    eFuelLevel?: SortOrder
    totalFuelConsumed?: SortOrder
    totalFuelFills?: SortOrder
    totalFuelDrops?: SortOrder
    kmpl?: SortOrder
    totalDistanceKm?: SortOrder
    totalRunningHours?: SortOrder
    totalIdleHours?: SortOrder
    totalStoppageHours?: SortOrder
  }

  export type DriverCreateNestedOneWithoutVehicleInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    connect?: DriverWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<RouteCreateWithoutVehiclesInput, RouteUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutVehiclesInput
    connect?: RouteWhereUniqueInput
  }

  export type SensorCreateNestedOneWithoutVehicleInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput
    connect?: SensorWhereUniqueInput
  }

  export type HistoryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput> | HistoryCreateWithoutVehicleInput[] | HistoryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVehicleInput | HistoryCreateOrConnectWithoutVehicleInput[]
    createMany?: HistoryCreateManyVehicleInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type SummaryMetricsCreateNestedManyWithoutVehicleInput = {
    create?: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput> | SummaryMetricsCreateWithoutVehicleInput[] | SummaryMetricsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SummaryMetricsCreateOrConnectWithoutVehicleInput | SummaryMetricsCreateOrConnectWithoutVehicleInput[]
    createMany?: SummaryMetricsCreateManyVehicleInputEnvelope
    connect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedOneWithoutVehicleInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    connect?: DriverWhereUniqueInput
  }

  export type SensorUncheckedCreateNestedOneWithoutVehicleInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput
    connect?: SensorWhereUniqueInput
  }

  export type HistoryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput> | HistoryCreateWithoutVehicleInput[] | HistoryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVehicleInput | HistoryCreateOrConnectWithoutVehicleInput[]
    createMany?: HistoryCreateManyVehicleInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput> | SummaryMetricsCreateWithoutVehicleInput[] | SummaryMetricsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SummaryMetricsCreateOrConnectWithoutVehicleInput | SummaryMetricsCreateOrConnectWithoutVehicleInput[]
    createMany?: SummaryMetricsCreateManyVehicleInputEnvelope
    connect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DriverUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    upsert?: DriverUpsertWithoutVehicleInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutVehicleInput, DriverUpdateWithoutVehicleInput>, DriverUncheckedUpdateWithoutVehicleInput>
  }

  export type RouteUpdateOneWithoutVehiclesNestedInput = {
    create?: XOR<RouteCreateWithoutVehiclesInput, RouteUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutVehiclesInput
    upsert?: RouteUpsertWithoutVehiclesInput
    disconnect?: RouteWhereInput | boolean
    delete?: RouteWhereInput | boolean
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutVehiclesInput, RouteUpdateWithoutVehiclesInput>, RouteUncheckedUpdateWithoutVehiclesInput>
  }

  export type SensorUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput
    upsert?: SensorUpsertWithoutVehicleInput
    disconnect?: SensorWhereInput | boolean
    delete?: SensorWhereInput | boolean
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutVehicleInput, SensorUpdateWithoutVehicleInput>, SensorUncheckedUpdateWithoutVehicleInput>
  }

  export type HistoryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput> | HistoryCreateWithoutVehicleInput[] | HistoryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVehicleInput | HistoryCreateOrConnectWithoutVehicleInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutVehicleInput | HistoryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: HistoryCreateManyVehicleInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutVehicleInput | HistoryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutVehicleInput | HistoryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type SummaryMetricsUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput> | SummaryMetricsCreateWithoutVehicleInput[] | SummaryMetricsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SummaryMetricsCreateOrConnectWithoutVehicleInput | SummaryMetricsCreateOrConnectWithoutVehicleInput[]
    upsert?: SummaryMetricsUpsertWithWhereUniqueWithoutVehicleInput | SummaryMetricsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: SummaryMetricsCreateManyVehicleInputEnvelope
    set?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    disconnect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    delete?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    connect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    update?: SummaryMetricsUpdateWithWhereUniqueWithoutVehicleInput | SummaryMetricsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: SummaryMetricsUpdateManyWithWhereWithoutVehicleInput | SummaryMetricsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: SummaryMetricsScalarWhereInput | SummaryMetricsScalarWhereInput[]
  }

  export type DriverUncheckedUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    upsert?: DriverUpsertWithoutVehicleInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutVehicleInput, DriverUpdateWithoutVehicleInput>, DriverUncheckedUpdateWithoutVehicleInput>
  }

  export type SensorUncheckedUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput
    upsert?: SensorUpsertWithoutVehicleInput
    disconnect?: SensorWhereInput | boolean
    delete?: SensorWhereInput | boolean
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutVehicleInput, SensorUpdateWithoutVehicleInput>, SensorUncheckedUpdateWithoutVehicleInput>
  }

  export type HistoryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput> | HistoryCreateWithoutVehicleInput[] | HistoryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVehicleInput | HistoryCreateOrConnectWithoutVehicleInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutVehicleInput | HistoryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: HistoryCreateManyVehicleInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutVehicleInput | HistoryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutVehicleInput | HistoryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput> | SummaryMetricsCreateWithoutVehicleInput[] | SummaryMetricsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SummaryMetricsCreateOrConnectWithoutVehicleInput | SummaryMetricsCreateOrConnectWithoutVehicleInput[]
    upsert?: SummaryMetricsUpsertWithWhereUniqueWithoutVehicleInput | SummaryMetricsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: SummaryMetricsCreateManyVehicleInputEnvelope
    set?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    disconnect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    delete?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    connect?: SummaryMetricsWhereUniqueInput | SummaryMetricsWhereUniqueInput[]
    update?: SummaryMetricsUpdateWithWhereUniqueWithoutVehicleInput | SummaryMetricsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: SummaryMetricsUpdateManyWithWhereWithoutVehicleInput | SummaryMetricsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: SummaryMetricsScalarWhereInput | SummaryMetricsScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutDriverInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutDriverNestedInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    upsert?: VehicleUpsertWithoutDriverInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDriverInput, VehicleUpdateWithoutDriverInput>, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    createMany?: VehicleCreateManyRouteInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    createMany?: VehicleCreateManyRouteInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutRouteInput | VehicleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehicleCreateManyRouteInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutRouteInput | VehicleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutRouteInput | VehicleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutRouteInput | VehicleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehicleCreateManyRouteInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutRouteInput | VehicleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutRouteInput | VehicleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutSensorInput = {
    create?: XOR<VehicleCreateWithoutSensorInput, VehicleUncheckedCreateWithoutSensorInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSensorInput
    connect?: VehicleWhereUniqueInput
  }

  export type SensorReadingCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutSensorInput = {
    create?: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput> | HistoryCreateWithoutSensorInput[] | HistoryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutSensorInput | HistoryCreateOrConnectWithoutSensorInput[]
    createMany?: HistoryCreateManySensorInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type SensorReadingUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput> | HistoryCreateWithoutSensorInput[] | HistoryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutSensorInput | HistoryCreateOrConnectWithoutSensorInput[]
    createMany?: HistoryCreateManySensorInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehicleUpdateOneRequiredWithoutSensorNestedInput = {
    create?: XOR<VehicleCreateWithoutSensorInput, VehicleUncheckedCreateWithoutSensorInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSensorInput
    upsert?: VehicleUpsertWithoutSensorInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSensorInput, VehicleUpdateWithoutSensorInput>, VehicleUncheckedUpdateWithoutSensorInput>
  }

  export type SensorReadingUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutSensorInput | SensorReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutSensorInput | SensorReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutSensorInput | SensorReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutSensorNestedInput = {
    create?: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput> | HistoryCreateWithoutSensorInput[] | HistoryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutSensorInput | HistoryCreateOrConnectWithoutSensorInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutSensorInput | HistoryUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: HistoryCreateManySensorInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutSensorInput | HistoryUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutSensorInput | HistoryUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type SensorReadingUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutSensorInput | SensorReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutSensorInput | SensorReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutSensorInput | SensorReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput> | HistoryCreateWithoutSensorInput[] | HistoryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutSensorInput | HistoryCreateOrConnectWithoutSensorInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutSensorInput | HistoryUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: HistoryCreateManySensorInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutSensorInput | HistoryUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutSensorInput | HistoryUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type SensorCreateNestedOneWithoutReadingsInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    connect?: SensorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SensorUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    upsert?: SensorUpsertWithoutReadingsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutReadingsInput, SensorUpdateWithoutReadingsInput>, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type SensorCreateNestedOneWithoutAlertsInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    connect?: SensorWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type SensorUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    upsert?: SensorUpsertWithoutAlertsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutAlertsInput, SensorUpdateWithoutAlertsInput>, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type VehicleCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<VehicleCreateWithoutHistoriesInput, VehicleUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutHistoriesInput
    connect?: VehicleWhereUniqueInput
  }

  export type SensorCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<SensorCreateWithoutHistoriesInput, SensorUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: SensorCreateOrConnectWithoutHistoriesInput
    connect?: SensorWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<VehicleCreateWithoutHistoriesInput, VehicleUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutHistoriesInput
    upsert?: VehicleUpsertWithoutHistoriesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutHistoriesInput, VehicleUpdateWithoutHistoriesInput>, VehicleUncheckedUpdateWithoutHistoriesInput>
  }

  export type SensorUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<SensorCreateWithoutHistoriesInput, SensorUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: SensorCreateOrConnectWithoutHistoriesInput
    upsert?: SensorUpsertWithoutHistoriesInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutHistoriesInput, SensorUpdateWithoutHistoriesInput>, SensorUncheckedUpdateWithoutHistoriesInput>
  }

  export type VehicleCreateNestedOneWithoutSummariesInput = {
    create?: XOR<VehicleCreateWithoutSummariesInput, VehicleUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSummariesInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutSummariesNestedInput = {
    create?: XOR<VehicleCreateWithoutSummariesInput, VehicleUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSummariesInput
    upsert?: VehicleUpsertWithoutSummariesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSummariesInput, VehicleUpdateWithoutSummariesInput>, VehicleUncheckedUpdateWithoutSummariesInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type DriverCreateWithoutVehicleInput = {
    id?: string
    name: string
    phone: string
    licenseNo: string
    createdAt?: Date | string
  }

  export type DriverUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    phone: string
    licenseNo: string
    createdAt?: Date | string
  }

  export type DriverCreateOrConnectWithoutVehicleInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
  }

  export type RouteCreateWithoutVehiclesInput = {
    id?: string
    name: string
    startPoint: string
    endPoint: string
    createdAt?: Date | string
  }

  export type RouteUncheckedCreateWithoutVehiclesInput = {
    id?: string
    name: string
    startPoint: string
    endPoint: string
    createdAt?: Date | string
  }

  export type RouteCreateOrConnectWithoutVehiclesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutVehiclesInput, RouteUncheckedCreateWithoutVehiclesInput>
  }

  export type SensorCreateWithoutVehicleInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
    histories?: HistoryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutVehicleInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
    histories?: HistoryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutVehicleInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
  }

  export type HistoryCreateWithoutVehicleInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    locationLat: number
    locationLong: number
    sensor: SensorCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutVehicleInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    sensorId: string
    locationLat: number
    locationLong: number
  }

  export type HistoryCreateOrConnectWithoutVehicleInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput>
  }

  export type HistoryCreateManyVehicleInputEnvelope = {
    data: HistoryCreateManyVehicleInput | HistoryCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type SummaryMetricsCreateWithoutVehicleInput = {
    id?: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type SummaryMetricsUncheckedCreateWithoutVehicleInput = {
    id?: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type SummaryMetricsCreateOrConnectWithoutVehicleInput = {
    where: SummaryMetricsWhereUniqueInput
    create: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput>
  }

  export type SummaryMetricsCreateManyVehicleInputEnvelope = {
    data: SummaryMetricsCreateManyVehicleInput | SummaryMetricsCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type DriverUpsertWithoutVehicleInput = {
    update: XOR<DriverUpdateWithoutVehicleInput, DriverUncheckedUpdateWithoutVehicleInput>
    create: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutVehicleInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutVehicleInput, DriverUncheckedUpdateWithoutVehicleInput>
  }

  export type DriverUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpsertWithoutVehiclesInput = {
    update: XOR<RouteUpdateWithoutVehiclesInput, RouteUncheckedUpdateWithoutVehiclesInput>
    create: XOR<RouteCreateWithoutVehiclesInput, RouteUncheckedCreateWithoutVehiclesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutVehiclesInput, RouteUncheckedUpdateWithoutVehiclesInput>
  }

  export type RouteUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startPoint?: StringFieldUpdateOperationsInput | string
    endPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUpsertWithoutVehicleInput = {
    update: XOR<SensorUpdateWithoutVehicleInput, SensorUncheckedUpdateWithoutVehicleInput>
    create: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutVehicleInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutVehicleInput, SensorUncheckedUpdateWithoutVehicleInput>
  }

  export type SensorUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
    histories?: HistoryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type HistoryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutVehicleInput, HistoryUncheckedUpdateWithoutVehicleInput>
    create: XOR<HistoryCreateWithoutVehicleInput, HistoryUncheckedCreateWithoutVehicleInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutVehicleInput, HistoryUncheckedUpdateWithoutVehicleInput>
  }

  export type HistoryUpdateManyWithWhereWithoutVehicleInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: StringFilter<"History"> | string
    timestamp?: DateTimeFilter<"History"> | Date | string
    type?: EnumAlertTypeFilter<"History"> | $Enums.AlertType
    description?: StringFilter<"History"> | string
    fuelLevel?: FloatFilter<"History"> | number
    fuelDropLitres?: FloatNullableFilter<"History"> | number | null
    vehicleId?: StringFilter<"History"> | string
    sensorId?: StringFilter<"History"> | string
    locationLat?: FloatFilter<"History"> | number
    locationLong?: FloatFilter<"History"> | number
  }

  export type SummaryMetricsUpsertWithWhereUniqueWithoutVehicleInput = {
    where: SummaryMetricsWhereUniqueInput
    update: XOR<SummaryMetricsUpdateWithoutVehicleInput, SummaryMetricsUncheckedUpdateWithoutVehicleInput>
    create: XOR<SummaryMetricsCreateWithoutVehicleInput, SummaryMetricsUncheckedCreateWithoutVehicleInput>
  }

  export type SummaryMetricsUpdateWithWhereUniqueWithoutVehicleInput = {
    where: SummaryMetricsWhereUniqueInput
    data: XOR<SummaryMetricsUpdateWithoutVehicleInput, SummaryMetricsUncheckedUpdateWithoutVehicleInput>
  }

  export type SummaryMetricsUpdateManyWithWhereWithoutVehicleInput = {
    where: SummaryMetricsScalarWhereInput
    data: XOR<SummaryMetricsUpdateManyMutationInput, SummaryMetricsUncheckedUpdateManyWithoutVehicleInput>
  }

  export type SummaryMetricsScalarWhereInput = {
    AND?: SummaryMetricsScalarWhereInput | SummaryMetricsScalarWhereInput[]
    OR?: SummaryMetricsScalarWhereInput[]
    NOT?: SummaryMetricsScalarWhereInput | SummaryMetricsScalarWhereInput[]
    id?: StringFilter<"SummaryMetrics"> | string
    vehicleId?: StringFilter<"SummaryMetrics"> | string
    fromDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    toDate?: DateTimeFilter<"SummaryMetrics"> | Date | string
    sFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    eFuelLevel?: FloatFilter<"SummaryMetrics"> | number
    totalFuelConsumed?: FloatFilter<"SummaryMetrics"> | number
    totalFuelFills?: FloatFilter<"SummaryMetrics"> | number
    totalFuelDrops?: FloatFilter<"SummaryMetrics"> | number
    kmpl?: FloatFilter<"SummaryMetrics"> | number
    totalDistanceKm?: FloatFilter<"SummaryMetrics"> | number
    totalRunningHours?: FloatFilter<"SummaryMetrics"> | number
    totalIdleHours?: FloatFilter<"SummaryMetrics"> | number
    totalStoppageHours?: FloatFilter<"SummaryMetrics"> | number
    dropAlert?: BoolFilter<"SummaryMetrics"> | boolean
    fillAlert?: BoolFilter<"SummaryMetrics"> | boolean
  }

  export type VehicleCreateWithoutDriverInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    route?: RouteCreateNestedOneWithoutVehiclesInput
    sensor?: SensorCreateNestedOneWithoutVehicleInput
    histories?: HistoryCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDriverInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
    sensor?: SensorUncheckedCreateNestedOneWithoutVehicleInput
    histories?: HistoryUncheckedCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDriverInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
  }

  export type VehicleUpsertWithoutDriverInput = {
    update: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDriverInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneWithoutVehiclesNestedInput
    sensor?: SensorUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    sensor?: SensorUncheckedUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutRouteInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverCreateNestedOneWithoutVehicleInput
    sensor?: SensorCreateNestedOneWithoutVehicleInput
    histories?: HistoryCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRouteInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverUncheckedCreateNestedOneWithoutVehicleInput
    sensor?: SensorUncheckedCreateNestedOneWithoutVehicleInput
    histories?: HistoryUncheckedCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput>
  }

  export type VehicleCreateManyRouteInputEnvelope = {
    data: VehicleCreateManyRouteInput | VehicleCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutRouteInput, VehicleUncheckedUpdateWithoutRouteInput>
    create: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutRouteInput, VehicleUncheckedUpdateWithoutRouteInput>
  }

  export type VehicleUpdateManyWithWhereWithoutRouteInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutRouteInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    registrationNo?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    tankSize?: IntNullableFilter<"Vehicle"> | number | null
    mileageEst?: FloatNullableFilter<"Vehicle"> | number | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    routeId?: StringNullableFilter<"Vehicle"> | string | null
  }

  export type VehicleCreateWithoutSensorInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverCreateNestedOneWithoutVehicleInput
    route?: RouteCreateNestedOneWithoutVehiclesInput
    histories?: HistoryCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutSensorInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
    driver?: DriverUncheckedCreateNestedOneWithoutVehicleInput
    histories?: HistoryUncheckedCreateNestedManyWithoutVehicleInput
    summaries?: SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutSensorInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSensorInput, VehicleUncheckedCreateWithoutSensorInput>
  }

  export type SensorReadingCreateWithoutSensorInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
  }

  export type SensorReadingUncheckedCreateWithoutSensorInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
  }

  export type SensorReadingCreateOrConnectWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    create: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput>
  }

  export type SensorReadingCreateManySensorInputEnvelope = {
    data: SensorReadingCreateManySensorInput | SensorReadingCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
  }

  export type AlertUncheckedCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
  }

  export type AlertCreateOrConnectWithoutSensorInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertCreateManySensorInputEnvelope = {
    data: AlertCreateManySensorInput | AlertCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    locationLat: number
    locationLong: number
    vehicle: VehicleCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    vehicleId: string
    locationLat: number
    locationLong: number
  }

  export type HistoryCreateOrConnectWithoutSensorInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput>
  }

  export type HistoryCreateManySensorInputEnvelope = {
    data: HistoryCreateManySensorInput | HistoryCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutSensorInput = {
    update: XOR<VehicleUpdateWithoutSensorInput, VehicleUncheckedUpdateWithoutSensorInput>
    create: XOR<VehicleCreateWithoutSensorInput, VehicleUncheckedCreateWithoutSensorInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutSensorInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutSensorInput, VehicleUncheckedUpdateWithoutSensorInput>
  }

  export type VehicleUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutVehicleNestedInput
    route?: RouteUpdateOneWithoutVehiclesNestedInput
    histories?: HistoryUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    driver?: DriverUncheckedUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type SensorReadingUpsertWithWhereUniqueWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    update: XOR<SensorReadingUpdateWithoutSensorInput, SensorReadingUncheckedUpdateWithoutSensorInput>
    create: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput>
  }

  export type SensorReadingUpdateWithWhereUniqueWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    data: XOR<SensorReadingUpdateWithoutSensorInput, SensorReadingUncheckedUpdateWithoutSensorInput>
  }

  export type SensorReadingUpdateManyWithWhereWithoutSensorInput = {
    where: SensorReadingScalarWhereInput
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyWithoutSensorInput>
  }

  export type SensorReadingScalarWhereInput = {
    AND?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    OR?: SensorReadingScalarWhereInput[]
    NOT?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    fuelLevel?: FloatFilter<"SensorReading"> | number
    distanceKm?: FloatFilter<"SensorReading"> | number
    locationLat?: FloatFilter<"SensorReading"> | number
    locationLong?: FloatFilter<"SensorReading"> | number
    speed?: FloatFilter<"SensorReading"> | number
    ignitionStatus?: StringNullableFilter<"SensorReading"> | string | null
    odometer?: FloatNullableFilter<"SensorReading"> | number | null
    deviceVoltage?: FloatNullableFilter<"SensorReading"> | number | null
    isOverSpeed?: BoolNullableFilter<"SensorReading"> | boolean | null
    processed?: BoolFilter<"SensorReading"> | boolean
    sensorId?: StringFilter<"SensorReading"> | string
  }

  export type AlertUpsertWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
  }

  export type AlertUpdateManyWithWhereWithoutSensorInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSensorInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    description?: StringNullableFilter<"Alert"> | string | null
    locationLat?: FloatFilter<"Alert"> | number
    locationLong?: FloatFilter<"Alert"> | number
    sensorId?: StringFilter<"Alert"> | string
  }

  export type HistoryUpsertWithWhereUniqueWithoutSensorInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutSensorInput, HistoryUncheckedUpdateWithoutSensorInput>
    create: XOR<HistoryCreateWithoutSensorInput, HistoryUncheckedCreateWithoutSensorInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutSensorInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutSensorInput, HistoryUncheckedUpdateWithoutSensorInput>
  }

  export type HistoryUpdateManyWithWhereWithoutSensorInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutSensorInput>
  }

  export type SensorCreateWithoutReadingsInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
    histories?: HistoryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutReadingsInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicleId: string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
    histories?: HistoryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutReadingsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
  }

  export type SensorUpsertWithoutReadingsInput = {
    update: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutReadingsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type SensorUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
    histories?: HistoryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateWithoutAlertsInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutSensorInput
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
    histories?: HistoryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutAlertsInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicleId: string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
    histories?: HistoryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutAlertsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
  }

  export type SensorUpsertWithoutAlertsInput = {
    update: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutAlertsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type SensorUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutSensorNestedInput
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
    histories?: HistoryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type VehicleCreateWithoutHistoriesInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverCreateNestedOneWithoutVehicleInput
    route?: RouteCreateNestedOneWithoutVehiclesInput
    sensor?: SensorCreateNestedOneWithoutVehicleInput
    summaries?: SummaryMetricsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutHistoriesInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
    driver?: DriverUncheckedCreateNestedOneWithoutVehicleInput
    sensor?: SensorUncheckedCreateNestedOneWithoutVehicleInput
    summaries?: SummaryMetricsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutHistoriesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutHistoriesInput, VehicleUncheckedCreateWithoutHistoriesInput>
  }

  export type SensorCreateWithoutHistoriesInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutSensorInput
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutHistoriesInput = {
    id?: string
    sensorCode: string
    isActive?: boolean
    installedAt?: Date | string
    lastSeen?: Date | string | null
    vehicleId: string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutHistoriesInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutHistoriesInput, SensorUncheckedCreateWithoutHistoriesInput>
  }

  export type VehicleUpsertWithoutHistoriesInput = {
    update: XOR<VehicleUpdateWithoutHistoriesInput, VehicleUncheckedUpdateWithoutHistoriesInput>
    create: XOR<VehicleCreateWithoutHistoriesInput, VehicleUncheckedCreateWithoutHistoriesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutHistoriesInput, VehicleUncheckedUpdateWithoutHistoriesInput>
  }

  export type VehicleUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutVehicleNestedInput
    route?: RouteUpdateOneWithoutVehiclesNestedInput
    sensor?: SensorUpdateOneWithoutVehicleNestedInput
    summaries?: SummaryMetricsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    driver?: DriverUncheckedUpdateOneWithoutVehicleNestedInput
    sensor?: SensorUncheckedUpdateOneWithoutVehicleNestedInput
    summaries?: SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type SensorUpsertWithoutHistoriesInput = {
    update: XOR<SensorUpdateWithoutHistoriesInput, SensorUncheckedUpdateWithoutHistoriesInput>
    create: XOR<SensorCreateWithoutHistoriesInput, SensorUncheckedCreateWithoutHistoriesInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutHistoriesInput, SensorUncheckedUpdateWithoutHistoriesInput>
  }

  export type SensorUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutSensorNestedInput
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sensorCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type VehicleCreateWithoutSummariesInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    driver?: DriverCreateNestedOneWithoutVehicleInput
    route?: RouteCreateNestedOneWithoutVehiclesInput
    sensor?: SensorCreateNestedOneWithoutVehicleInput
    histories?: HistoryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutSummariesInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
    routeId?: string | null
    driver?: DriverUncheckedCreateNestedOneWithoutVehicleInput
    sensor?: SensorUncheckedCreateNestedOneWithoutVehicleInput
    histories?: HistoryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutSummariesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSummariesInput, VehicleUncheckedCreateWithoutSummariesInput>
  }

  export type VehicleUpsertWithoutSummariesInput = {
    update: XOR<VehicleUpdateWithoutSummariesInput, VehicleUncheckedUpdateWithoutSummariesInput>
    create: XOR<VehicleCreateWithoutSummariesInput, VehicleUncheckedCreateWithoutSummariesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutSummariesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutSummariesInput, VehicleUncheckedUpdateWithoutSummariesInput>
  }

  export type VehicleUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutVehicleNestedInput
    route?: RouteUpdateOneWithoutVehiclesNestedInput
    sensor?: SensorUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    driver?: DriverUncheckedUpdateOneWithoutVehicleNestedInput
    sensor?: SensorUncheckedUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type HistoryCreateManyVehicleInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    sensorId: string
    locationLat: number
    locationLong: number
  }

  export type SummaryMetricsCreateManyVehicleInput = {
    id?: string
    fromDate: Date | string
    toDate: Date | string
    sFuelLevel: number
    eFuelLevel: number
    totalFuelConsumed: number
    totalFuelFills: number
    totalFuelDrops: number
    kmpl: number
    totalDistanceKm: number
    totalRunningHours: number
    totalIdleHours: number
    totalStoppageHours: number
    dropAlert?: boolean
    fillAlert?: boolean
  }

  export type HistoryUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    sensor?: SensorUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    sensorId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    sensorId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type SummaryMetricsUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SummaryMetricsUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SummaryMetricsUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDate?: DateTimeFieldUpdateOperationsInput | Date | string
    toDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sFuelLevel?: FloatFieldUpdateOperationsInput | number
    eFuelLevel?: FloatFieldUpdateOperationsInput | number
    totalFuelConsumed?: FloatFieldUpdateOperationsInput | number
    totalFuelFills?: FloatFieldUpdateOperationsInput | number
    totalFuelDrops?: FloatFieldUpdateOperationsInput | number
    kmpl?: FloatFieldUpdateOperationsInput | number
    totalDistanceKm?: FloatFieldUpdateOperationsInput | number
    totalRunningHours?: FloatFieldUpdateOperationsInput | number
    totalIdleHours?: FloatFieldUpdateOperationsInput | number
    totalStoppageHours?: FloatFieldUpdateOperationsInput | number
    dropAlert?: BoolFieldUpdateOperationsInput | boolean
    fillAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCreateManyRouteInput = {
    id?: string
    registrationNo: string
    model?: string | null
    tankSize?: number | null
    mileageEst?: number | null
    createdAt?: Date | string
  }

  export type VehicleUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutVehicleNestedInput
    sensor?: SensorUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUncheckedUpdateOneWithoutVehicleNestedInput
    sensor?: SensorUncheckedUpdateOneWithoutVehicleNestedInput
    histories?: HistoryUncheckedUpdateManyWithoutVehicleNestedInput
    summaries?: SummaryMetricsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tankSize?: NullableIntFieldUpdateOperationsInput | number | null
    mileageEst?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateManySensorInput = {
    id?: string
    timestamp: Date | string
    fuelLevel: number
    distanceKm: number
    locationLat: number
    locationLong: number
    speed: number
    ignitionStatus?: string | null
    odometer?: number | null
    deviceVoltage?: number | null
    isOverSpeed?: boolean | null
    processed?: boolean
  }

  export type AlertCreateManySensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description?: string | null
    locationLat: number
    locationLong: number
  }

  export type HistoryCreateManySensorInput = {
    id?: string
    timestamp?: Date | string
    type: $Enums.AlertType
    description: string
    fuelLevel: number
    fuelDropLitres?: number | null
    vehicleId: string
    locationLat: number
    locationLong: number
  }

  export type SensorReadingUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SensorReadingUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SensorReadingUncheckedUpdateManyWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    distanceKm?: FloatFieldUpdateOperationsInput | number
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    ignitionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableFloatFieldUpdateOperationsInput | number | null
    deviceVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    isOverSpeed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertUncheckedUpdateManyWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyWithoutSensorInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    description?: StringFieldUpdateOperationsInput | string
    fuelLevel?: FloatFieldUpdateOperationsInput | number
    fuelDropLitres?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLong?: FloatFieldUpdateOperationsInput | number
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