import { as, finalElement, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('oddharmonic presets', (): void => {
    it('3rd tritave of odd harmonics scale', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                9 / 9,
                11 / 9,
                13 / 9,
                15 / 9,
                17 / 9,
                19 / 9,
                21 / 9,
                23 / 9,
                25 / 9,
                3 * 9 / 9,
                3 * 11 / 9,
                3 * 13 / 9,
                3 * 15 / 9,
                3 * 17 / 9,
                3 * 19 / 9,
                3 * 21 / 9,
                3 * 23 / 9,
                3 * 25 / 9,
                9 * 9 / 9,
                9 * 11 / 9,
                9 * 13 / 9,
                9 * 15 / 9,
                9 * 17 / 9,
                9 * 19 / 9,
                9 * 21 / 9,
                9 * 23 / 9,
                9 * 25 / 9,
            ].map(as.Scalar))
    })

    it('third tritave odd harmonics with stacked thirds adds extra iterations to cover the extra reach of the stacking', (): void => {
        const controlSpecs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ].specs
        const controlScalars: Array<Scalar<Pitch>> = computeScalars(controlSpecs)

        const stackingSpecs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS ].specs
        const scalarsWithStacking: Array<Scalar<Pitch>> = computeScalars(stackingSpecs)

        expect(scalarsWithStacking.length)
            .toBe(controlScalars.length + 9)
        expect(finalElement(scalarsWithStacking))
            .toBeCloseToTyped(
                use.Scalar(scalarsWithStacking[ scalarsWithStacking.length - 1 - 9 ], as.Scalar<Scalar<Pitch>>(3)),
            )
    })
})
