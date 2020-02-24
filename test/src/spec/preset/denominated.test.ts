import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('denominated presets', (): void => {
    it('5-denominated harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                5 / 5,
                6 / 5,
                7 / 5,
                8 / 5,
                9 / 5,
                2 * 5 / 5,
                2 * 6 / 5,
                2 * 7 / 5,
                2 * 8 / 5,
                2 * 9 / 5,
                4 * 5 / 5,
                4 * 6 / 5,
                4 * 7 / 5,
                4 * 8 / 5,
                4 * 9 / 5,
            ].map(as.Scalar))
    })

    it('7-denominated harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                7 / 7,
                8 / 7,
                9 / 7,
                10 / 7,
                11 / 7,
                12 / 7,
                13 / 7,
                2 * 7 / 7,
                2 * 8 / 7,
                2 * 9 / 7,
                2 * 10 / 7,
                2 * 11 / 7,
                2 * 12 / 7,
                2 * 13 / 7,
                4 * 7 / 7,
                4 * 8 / 7,
                4 * 9 / 7,
                4 * 10 / 7,
                4 * 11 / 7,
                4 * 12 / 7,
                4 * 13 / 7,
            ].map(as.Scalar))
    })

    it('12-denominated harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                12 / 12,
                13 / 12,
                14 / 12,
                15 / 12,
                16 / 12,
                17 / 12,
                18 / 12,
                19 / 12,
                20 / 12,
                21 / 12,
                22 / 12,
                23 / 12,
                2 * 12 / 12,
                2 * 13 / 12,
                2 * 14 / 12,
                2 * 15 / 12,
                2 * 16 / 12,
                2 * 17 / 12,
                2 * 18 / 12,
                2 * 19 / 12,
                2 * 20 / 12,
                2 * 21 / 12,
                2 * 22 / 12,
                2 * 23 / 12,
                4 * 12 / 12,
                4 * 13 / 12,
                4 * 14 / 12,
                4 * 15 / 12,
                4 * 16 / 12,
                4 * 17 / 12,
                4 * 18 / 12,
                4 * 19 / 12,
                4 * 20 / 12,
                4 * 21 / 12,
                4 * 22 / 12,
                4 * 23 / 12,
            ].map(as.Scalar))
    })
})
