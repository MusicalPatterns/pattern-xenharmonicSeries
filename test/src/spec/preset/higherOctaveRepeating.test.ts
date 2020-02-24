import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('higher octave repeating presets', (): void => {
    it('8th octave of harmonics scale', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                128 / 128,
                129 / 128,
                130 / 128,
                131 / 128,
            ].map(as.Scalar))
    })

    it('4th octave of harmonics scale', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                8 / 8,
                9 / 8,
                10 / 8,
                11 / 8,
                12 / 8,
                13 / 8,
                14 / 8,
                15 / 8,
                2 * 8 / 8,
                2 * 9 / 8,
                2 * 10 / 8,
                2 * 11 / 8,
                2 * 12 / 8,
                2 * 13 / 8,
                2 * 14 / 8,
                2 * 15 / 8,
                4 * 8 / 8,
                4 * 9 / 8,
                4 * 10 / 8,
                4 * 11 / 8,
                4 * 12 / 8,
                4 * 13 / 8,
                4 * 14 / 8,
                4 * 15 / 8,
            ].map(as.Scalar))
    })
})
