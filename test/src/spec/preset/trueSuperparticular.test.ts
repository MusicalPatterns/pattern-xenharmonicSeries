import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('true superparticular presets', (): void => {
    it('superparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                3 / 2,
                4 / 3,
                5 / 4,
                6 / 5,
                7 / 6,
                8 / 7,
            ].map(as.Scalar))
    })

    it('subsuperparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.SUBSUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                2 / 3,
                3 / 4,
                4 / 5,
                5 / 6,
                6 / 7,
            ].map(as.Scalar))
    })

    it('superbiparticular numbers', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.SUPERBIPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                5 / 3,
                7 / 5,
                9 / 7,
                11 / 9,
                13 / 11,
            ].map(as.Scalar))
    })

    it('double superparticular numbers', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.DOUBLE_SUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                5 / 2,
                7 / 3,
                9 / 4,
                11 / 5,
            ].map(as.Scalar))
    })

    it('double superbiparticular numbers', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.DOUBLE_SUPERBIPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                8 / 3,
                12 / 5,
                16 / 7,
                20 / 9,
            ].map(as.Scalar))
    })
})
