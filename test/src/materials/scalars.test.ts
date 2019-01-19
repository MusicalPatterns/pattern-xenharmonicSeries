import { apply, DictionaryOf, from, Scalar, testArraysAreClose, to } from '@musical-patterns/utilities'
import { buildScalars, specData, XenharmonicSeriesPatternSpec } from '../../../src/indexForTest'

describe('scales', () => {
    let presets: DictionaryOf<XenharmonicSeriesPatternSpec>
    beforeEach(() => {
        presets = specData.presets || {}
    })

    it('harmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = presets.standardHarmonicSeries
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1, 2, 3, 4, 5, 6, 7,
        ].map(to.Scalar))
    })

    it('matharmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = presets.matharmonicSeries
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

    it('ed-2 harmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = presets.edTwoHarmonicSeries
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

    it('ed-3 harmonic series', () => {
        const spec: XenharmonicSeriesPatternSpec = presets.edThreeHarmonicSeries
        const scalars: Scalar[] = buildScalars(spec)

        // tslint:disable:binary-expression-operand-order
        testArraysAreClose(scalars, [
            1,
            3,
            3 * Math.sqrt(3),
            3 * Math.sqrt(3) * Math.cbrt(3),
            3 * Math.sqrt(3) * Math.cbrt(3) * from.Base(apply.Power(to.Base(3), to.Power(1 / 4))),
        ].map(to.Scalar))
    })
})
