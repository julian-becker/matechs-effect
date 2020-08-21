import type * as HKT from "../HKT"

export interface Extend<F extends HKT.URIS, C = HKT.Auto> extends HKT.Base<F, C> {
  readonly extend: <N extends string, K, SI, SO, X, I, S, R, E, A, B>(
    f: (_: HKT.KindFix<F, C, N, K, SI, SO, X, I, S, R, E, A>) => B
  ) => (
    fa: HKT.KindFix<F, C, N, K, SI, SO, X, I, S, R, E, A>
  ) => HKT.KindFix<F, C, N, K, SI, SO, X, I, S, R, E, B>
}