import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('metallic presets', (): void => {
    it('metallic harmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.METALLIC_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1,
                1.618033989,
                2.414213562,
                3.302775638,
                4.236067977,
                5.192582404,
                6.16227766,
                7.140054945,
                8.123105626,
                9.109772229,
                10.09901951,
                11.09016994,
                12.08276253,
                13.07647322,
            ].map(as.Scalar))
    })
})
