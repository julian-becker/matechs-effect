/**
 * @since 1.0.0
 */
import { Associative } from "../Associative"

/**
 * The `Commutative[A]` type class describes a commutative binary operator
 * for a type `A`. For example, addition for integers.
 *
 * @since 1.0.0
 */
export interface Commutative<A> extends Associative<A> {
  readonly commute: (y: A) => (x: A) => A
}

/**
 * @since 1.0.0
 */
export const CommutativeURI = "Commutative"

/**
 * @since 1.0.0
 */
export type CommutativeURI = typeof CommutativeURI

declare module "../../Prelude/HKT" {
  interface URItoKind<N extends string, K, SI, SO, X, I, S, R, E, A> {
    [CommutativeURI]: Commutative<A>
  }
}

/**
 * @since 1.0.0
 */
export const makeCommutative = <A>(f: (r: A) => (l: A) => A): Commutative<A> => ({
  combine: f,
  commute: (y) => (x) => f(x)(y)
})