import { as, E, log, PHI, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('logharmonic presets', (): void => {
    it('logharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.LOGHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                log(2, E),
                log(3, E),
                log(4, E),
                log(5, E),
                log(6, E),
                log(7, E),
            ].map(as.Scalar))
    })

    it('2-logharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.TWO_LOGHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                log(2, as.Logarithm(2)),
                log(3, as.Logarithm(2)),
                log(4, as.Logarithm(2)),
                log(5, as.Logarithm(2)),
                log(6, as.Logarithm(2)),
                log(7, as.Logarithm(2)),
            ].map(as.Scalar))
    })

    it('3-logharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.THREE_LOGHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                log(2, as.Logarithm(3)),
                log(3, as.Logarithm(3)),
                log(4, as.Logarithm(3)),
                log(5, as.Logarithm(3)),
                log(6, as.Logarithm(3)),
                log(7, as.Logarithm(3)),
            ].map(as.Scalar))
    })

    it('phi-logharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.PHI_LOGHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                log(2, as.Logarithm(PHI)),
                log(3, as.Logarithm(PHI)),
                log(4, as.Logarithm(PHI)),
                log(5, as.Logarithm(PHI)),
                log(6, as.Logarithm(PHI)),
                log(7, as.Logarithm(PHI)),
            ].map(as.Scalar))
    })
})
