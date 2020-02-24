import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('duperparticular presets', (): void => {
    it('duperparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                3 / 1,
                4 / 2,
                5 / 3,
                6 / 4,
                7 / 5,
                8 / 6,
                9 / 7,
            ].map(as.Scalar))
    })

    it('dubduperparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.DUBDUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
                5 / 7,
                6 / 8,
                7 / 9,
            ].map(as.Scalar))
    })

    it('truperparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.TRUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                4 / 1,
                5 / 2,
                6 / 3,
                7 / 4,
                8 / 5,
                9 / 6,
                10 / 7,
            ].map(as.Scalar))
    })

    it('trubtruperparticular series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.TRUBTRUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 4,
                2 / 5,
                3 / 6,
                4 / 7,
                5 / 8,
                6 / 9,
                7 / 10,
            ].map(as.Scalar))
    })
})
