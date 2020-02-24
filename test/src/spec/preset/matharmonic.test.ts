import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('matharmonic presets', (): void => {
    it('matharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.MATHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                1 / 1,
                3 / 2,
                11 / 6,
                25 / 12,
                137 / 60,
                49 / 20,
                363 / 140,
            ].map(as.Scalar))
    })

    it('emulatory matharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.EMULATORY_MATHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                // tslint:disable-next-line no-identical-expressions
                1 / 1,
                2 / 1,
                3 / 1,
                11 / 3,
                25 / 6,
                137 / 30,
                49 / 10,
                363 / 70,
            ].map(as.Scalar))
    })
})
