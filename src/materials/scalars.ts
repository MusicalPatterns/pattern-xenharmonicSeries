import { apply, from, numbers, Scalar, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesOperation, XenharmonicSeriesPatternSpec } from '../types'

const buildScalars: (spec: XenharmonicSeriesPatternSpec) => Scalar[] =
    ({ base, operation, lowerBound, upperBound }: XenharmonicSeriesPatternSpec): Scalar[] => {
        const boundedNumbers: number[] = numbers
            .map((n: number): number => n - 1)
            .slice(from.Index(lowerBound), apply.Offset(from.Index(upperBound), to.Offset(1)))

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

                return boundedNumbers
                    .map((k: number) =>
                        product *= from.Base(apply.Power(base, to.Power(k ? 1 / k : 0))))
                    .map(to.Scalar)
            }
            default:
                return []
        }
    }

export {
    buildScalars,
}
