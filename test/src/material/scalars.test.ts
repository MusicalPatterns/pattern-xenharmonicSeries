// tslint:disable binary-expression-operand-order no-identical-expressions

import { Preset } from '@musical-patterns/spec'
import {
    as,
    CUBE_ROOT_OF_THREE,
    CUBE_ROOT_OF_TWO,
    finalElement,
    ObjectOf,
    Pitch,
    product,
    Scalar,
    SQUARE_ROOT_OF_THREE,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { computeScalars, spec, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('scalars', () => {
    let presets: ObjectOf<Preset<XenharmonicSeriesSpecs>>

    beforeEach(() => {
        presets = spec.presets!
    })

    it('harmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1, 2, 3, 4, 5, 6, 7,
            ].map(as.Scalar))
    })

    it('matharmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.MATHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 1,
                3 / 2,
                11 / 6,
                25 / 12,
                137 / 60,
                49 / 20,
                363 / 140,
            ].map(as.Scalar))
    })

    it('2-edharmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ].specs
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

    it('3-edharmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1,
                3,
                product(3, SQUARE_ROOT_OF_THREE),
                product(3, SQUARE_ROOT_OF_THREE, CUBE_ROOT_OF_THREE),
                product(3, SQUARE_ROOT_OF_THREE, CUBE_ROOT_OF_THREE, use.Exponent(3, as.Exponent(1 / 4))),
            ].map(as.Scalar))
    })

    it('3rd tritave of odd harmonics scale', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                9 / 9,
                11 / 9,
                13 / 9,
                15 / 9,
                17 / 9,
                19 / 9,
                21 / 9,
                23 / 9,
                25 / 9,
                3 * 9 / 9,
                3 * 11 / 9,
                3 * 13 / 9,
                3 * 15 / 9,
                3 * 17 / 9,
                3 * 19 / 9,
                3 * 21 / 9,
                3 * 23 / 9,
                3 * 25 / 9,
                9 * 9 / 9,
                9 * 11 / 9,
                9 * 13 / 9,
                9 * 15 / 9,
                9 * 17 / 9,
                9 * 19 / 9,
                9 * 21 / 9,
                9 * 23 / 9,
                9 * 25 / 9,
            ].map(as.Scalar))
    })

    it('8th octave of harmonics scale', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                128 / 128,
                129 / 128,
                130 / 128,
                131 / 128,
            ].map(as.Scalar))
    })

    it('4th octave of harmonics scale', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                8 / 8,
                9 / 8,
                10 / 8,
                11 / 8,
                12 / 8,
                13 / 8,
                14 / 8,
                15 / 8,
                2 * 8 / 8,
                2 * 9 / 8,
                2 * 10 / 8,
                2 * 11 / 8,
                2 * 12 / 8,
                2 * 13 / 8,
                2 * 14 / 8,
                2 * 15 / 8,
                4 * 8 / 8,
                4 * 9 / 8,
                4 * 10 / 8,
                4 * 11 / 8,
                4 * 12 / 8,
                4 * 13 / 8,
                4 * 14 / 8,
                4 * 15 / 8,
            ].map(as.Scalar))
    })

    it('subharmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 1,
                1 / 2,
                1 / 3,
                1 / 4,
                1 / 5,
                1 / 6,
                1 / 7,
            ].map(as.Scalar))
    })

    it('superparticular series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                2 / 1,
                3 / 2,
                4 / 3,
                5 / 4,
                6 / 5,
                7 / 6,
                8 / 7,
            ].map(as.Scalar))
    })

    it('duperparticular series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].specs
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

    it('subparticular series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 2,
                2 / 3,
                3 / 4,
                4 / 5,
                5 / 6,
                6 / 7,
            ].map(as.Scalar))
    })

    it('dubparticular series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
                5 / 7,
                6 / 8,
            ].map(as.Scalar))
    })

    it('third tritave odd harmonics with stacked thirds adds extra iterations to cover the extra reach of the stacking', () => {
        const controlSpecs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ].specs
        const controlScalars: Array<Scalar<Pitch>> = computeScalars(controlSpecs)

        const stackingSpecs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS ].specs
        const scalarsWithStacking: Array<Scalar<Pitch>> = computeScalars(stackingSpecs)

        expect(scalarsWithStacking.length)
            .toBe(controlScalars.length + 9)
        expect(finalElement(scalarsWithStacking))
            .toBeCloseToTyped(
                use.Scalar(scalarsWithStacking[ scalarsWithStacking.length - 1 - 9 ], as.Scalar<Scalar<Pitch>>(3)),
            )
    })

    it('5-denominated harmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                5 / 5,
                6 / 5,
                7 / 5,
                8 / 5,
                9 / 5,
                2 * 5 / 5,
                2 * 6 / 5,
                2 * 7 / 5,
                2 * 8 / 5,
                2 * 9 / 5,
                4 * 5 / 5,
                4 * 6 / 5,
                4 * 7 / 5,
                4 * 8 / 5,
                4 * 9 / 5,
            ].map(as.Scalar))
    })

    it('7-denominated harmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                7 / 7,
                8 / 7,
                9 / 7,
                10 / 7,
                11 / 7,
                12 / 7,
                13 / 7,
                2 * 7 / 7,
                2 * 8 / 7,
                2 * 9 / 7,
                2 * 10 / 7,
                2 * 11 / 7,
                2 * 12 / 7,
                2 * 13 / 7,
                4 * 7 / 7,
                4 * 8 / 7,
                4 * 9 / 7,
                4 * 10 / 7,
                4 * 11 / 7,
                4 * 12 / 7,
                4 * 13 / 7,
            ].map(as.Scalar))
    })

    it('12-denominated harmonic series', () => {
        const specs: XenharmonicSeriesSpecs = presets[ XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES ].specs
        const scalars: Array<Scalar<Pitch>> = computeScalars(specs)

        expect(scalars)
            .toBeCloseSoFar([
                12 / 12,
                13 / 12,
                14 / 12,
                15 / 12,
                16 / 12,
                17 / 12,
                18 / 12,
                19 / 12,
                20 / 12,
                21 / 12,
                22 / 12,
                23 / 12,
                2 * 12 / 12,
                2 * 13 / 12,
                2 * 14 / 12,
                2 * 15 / 12,
                2 * 16 / 12,
                2 * 17 / 12,
                2 * 18 / 12,
                2 * 19 / 12,
                2 * 20 / 12,
                2 * 21 / 12,
                2 * 22 / 12,
                2 * 23 / 12,
                4 * 12 / 12,
                4 * 13 / 12,
                4 * 14 / 12,
                4 * 15 / 12,
                4 * 16 / 12,
                4 * 17 / 12,
                4 * 18 / 12,
                4 * 19 / 12,
                4 * 20 / 12,
                4 * 21 / 12,
                4 * 22 / 12,
                4 * 23 / 12,
            ].map(as.Scalar))
    })
})
