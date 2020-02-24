import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('prime presets', (): void => {
    it('prime harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.PRIME_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                2,
                3,
                5,
                7,
                11,
                13,
                17,
                19,
                23,
            ].map(as.Scalar))
    })
})
