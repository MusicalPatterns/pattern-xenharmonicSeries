import {
    as,
    CUBE_ROOT_OF_THREE,
    CUBE_ROOT_OF_TWO,
    Pitch,
    product,
    Scalar,
    SQUARE_ROOT_OF_THREE,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../../src/indexForTest'

describe('edharmonic presets', (): void => {
    it('3-edharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                3,
                product(3, SQUARE_ROOT_OF_THREE),
                product(3, SQUARE_ROOT_OF_THREE, CUBE_ROOT_OF_THREE),
                product(3, SQUARE_ROOT_OF_THREE, CUBE_ROOT_OF_THREE, use.Exponent(3, as.Exponent(1 / 4))),
            ].map(as.Scalar))
    })

    it('edharmonic series (2-edharmonic series)', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.EDHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                2,
                product(2, SQUARE_ROOT_OF_TWO),
                product(2, SQUARE_ROOT_OF_TWO, CUBE_ROOT_OF_TWO),
                product(2, SQUARE_ROOT_OF_TWO, CUBE_ROOT_OF_TWO, use.Exponent(2, as.Exponent(1 / 4))),
            ].map(as.Scalar))
    })

    it('emulatory edharmonic series', (): void => {
        const specs: XenharmonicSeriesSpecs = spec.presets![ XenharmonicSeriesPreset.EMULATORY_EDHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1,
                2,
                product(2, SQUARE_ROOT_OF_TWO),
                product(2, SQUARE_ROOT_OF_TWO, CUBE_ROOT_OF_TWO),
                product(2, SQUARE_ROOT_OF_TWO, CUBE_ROOT_OF_TWO, use.Exponent(2, as.Exponent(1 / 4))),
            ].map(as.Scalar))
    })
})
