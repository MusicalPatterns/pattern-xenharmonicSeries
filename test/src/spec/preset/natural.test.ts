import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('natural presets', (): void => {
    it('harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
            ].map(as.Scalar))
    })

    it('subharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                1 / 1,
                1 / 2,
                1 / 3,
                1 / 4,
                1 / 5,
                1 / 6,
                1 / 7,
            ].map(as.Scalar))
    })
})
