import { apply, from, numbers, offsetFromOneIndexedToZeroIndexed, Scalar, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesOperation, XenharmonicSeriesPatternSpec } from '../types'

const buildScalars: (spec: XenharmonicSeriesPatternSpec) => Scalar[] =
    ({ base, operation, lowerBound, upperBound }: XenharmonicSeriesPatternSpec): Scalar[] => {
        const boundedNumbers: number[] = numbers
            .slice(from.Index(offsetFromOneIndexedToZeroIndexed(lowerBound)), from.Index(upperBound))

        switch (operation) {
            case XenharmonicSeriesOperation.SEQUENCE: {
                let summation: number = 0

                return boundedNumbers
                    .map((k: number) =>
                        summation += apply.Power(k, to.Power(0)))
                    .map(to.Scalar)
            }
            case XenharmonicSeriesOperation.SERIES: {
                let summation: number = 0

                return boundedNumbers
                    .map((k: number) =>
                        summation += apply.Power(k, to.Power(-1)))
                    .map(to.Scalar)
            }
            case XenharmonicSeriesOperation.PRODUCT_OF_POWERS: {
                let product: number = 1

                return [ 1 ].concat(boundedNumbers
                    .map((k: number) =>
                        product *= from.Base(apply.Power(base, to.Power(1 / k)))),
                )
                    .map(to.Scalar)
            }
            default:
                return []
        }
    }

export {
    buildScalars,
}
