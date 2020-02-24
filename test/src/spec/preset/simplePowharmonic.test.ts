import { as, PHI, Pitch, pow, reciprocal, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('simple powharmonic presets', (): void => {
    it('lesser phi powharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.LESSER_PHI_POWHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                pow(as.Base(1), as.Exponent(reciprocal(PHI))),
                pow(as.Base(2), as.Exponent(reciprocal(PHI))),
                pow(as.Base(3), as.Exponent(reciprocal(PHI))),
                pow(as.Base(4), as.Exponent(reciprocal(PHI))),
                pow(as.Base(5), as.Exponent(reciprocal(PHI))),
                pow(as.Base(6), as.Exponent(reciprocal(PHI))),
                pow(as.Base(7), as.Exponent(reciprocal(PHI))),
            ].map(as.Scalar))
    })

    it('greater phi powharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.GREATER_PHI_POWHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                pow(as.Base(1), as.Exponent(PHI)),
                pow(as.Base(2), as.Exponent(PHI)),
                pow(as.Base(3), as.Exponent(PHI)),
                pow(as.Base(4), as.Exponent(PHI)),
                pow(as.Base(5), as.Exponent(PHI)),
                pow(as.Base(6), as.Exponent(PHI)),
                pow(as.Base(7), as.Exponent(PHI)),
            ].map(as.Scalar))
    })
})
