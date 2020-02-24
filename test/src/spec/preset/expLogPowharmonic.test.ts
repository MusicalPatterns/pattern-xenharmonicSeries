import { as, E, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('log-base-a-of-b-powharmonic presets', (): void => {
    it('ln-2-powharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.LN_OF_TWO_POWHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                use.Exponent(2, use.Logarithm(1, E)),
                use.Exponent(2, use.Logarithm(2, E)),
                use.Exponent(2, use.Logarithm(3, E)),
                use.Exponent(2, use.Logarithm(4, E)),
                use.Exponent(2, use.Logarithm(5, E)),
                use.Exponent(2, use.Logarithm(6, E)),
                use.Exponent(2, use.Logarithm(7, E)),
            ].map(as.Scalar))
    })

    it('log-base-3-of-2-powharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.LOG_BASE_THREE_OF_TWO_POWHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                use.Exponent(2, as.Exponent(use.Logarithm(1, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(2, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(3, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(4, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(5, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(6, as.Logarithm(3)))),
                use.Exponent(2, as.Exponent(use.Logarithm(7, as.Logarithm(3)))),
            ].map(as.Scalar))
    })

    it('log-base-2-of-3-powharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.LOG_BASE_TWO_OF_THREE_POWHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                use.Exponent(3, as.Exponent(use.Logarithm(1, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(2, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(3, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(4, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(5, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(6, as.Logarithm(2)))),
                use.Exponent(3, as.Exponent(use.Logarithm(7, as.Logarithm(2)))),
            ].map(as.Scalar))
    })
})
