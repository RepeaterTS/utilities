/* eslint-disable @typescript-eslint/no-unused-vars */
export type Primitive = string | number | boolean | bigint | symbol | undefined | null;
// eslint-disable-next-line @typescript-eslint/ban-types
export type Builtin = Primitive | Function | Date | Error | RegExp;

export type DeepRequired<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
	? Map<DeepRequired<K>, DeepRequired<V>>
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
	: T extends WeakMap<infer K, infer V>
	? WeakMap<DeepRequired<K>, DeepRequired<V>>
	: T extends Set<infer U>
	? Set<DeepRequired<U>>
	: T extends ReadonlySet<infer U>
	? ReadonlySet<DeepRequired<U>>
	: T extends WeakSet<infer U>
	? WeakSet<DeepRequired<U>>
	: T extends Promise<infer U>
	? Promise<DeepRequired<U>>
	: T extends {} // eslint-disable-line @typescript-eslint/ban-types
	? { [K in keyof T]-?: DeepRequired<T[K]> }
	: NonNullable<T>;
