import { apply, from, Scalar, testArraysAreClose, to } from '@musical-patterns/utilities'
import {
    buildScalars,
    initialSpec,
    XenharmonicSeriesOperation,
    XenharmonicSeriesPatternSpec,
} from '../../../src/indexForTest'

describe('scales', () => {
    it('harmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = {
            ...initialSpec,
            lowerBound: to.Index(1),
            operation: XenharmonicSeriesOperation.SEQUENCE,
            upperBound: to.Index(7),
        }
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1, 2, 3, 4, 5, 6, 7,
        ].map(to.Scalar))
    })

    it('matharmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = {
            ...initialSpec,
            lowerBound: to.Index(1),
            operation: XenharmonicSeriesOperation.SERIES,
            upperBound: to.Index(7),
        }
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1 / 1,
            3 / 2,
            11 / 6,
            25 / 12,
            137 / 60,
            49 / 20,
            363 / 140,
        ].map(to.Scalar))
    })

    it('edharmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = {
            base: to.Base(2),
            lowerBound: to.Index(1),
            operation: XenharmonicSeriesOperation.PRODUCT_OF_POWERS,
            upperBound: to.Index(4),
        }
        const scalars: Scalar[] = buildScalars(spec)

        // tslint:disable:binary-expression-operand-order
        testArraysAreClose(scalars, [
            1,
            2,
            2 * Math.sqrt(2),
            2 * Math.sqrt(2) * Math.cbrt(2),
            2 * Math.sqrt(2) * Math.cbrt(2) * from.Base(apply.Power(to.Base(2), to.Power(1 / 4))),
        ].map(to.Scalar))
    })
})
