// tslint:disable:binary-expression-operand-order no-identical-expressions

import { PresetFor } from '@musical-patterns/pattern'
import { apply, DictionaryOf, from, Scalar, testArraysAreClose, to } from '@musical-patterns/utilities'
import { buildScalars, specData, XenharmonicSeriesPreset, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('scales', () => {
    let presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>>
    beforeEach(() => {
        presets = specData.presets || {}
    })

    it('harmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1, 2, 3, 4, 5, 6, 7,
        ].map(to.Scalar))
    })

    it('matharmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.MATHARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1 / 1,
            3 / 2,
            11 / 6,
            25 / 12,
            137 / 60,
            49 / 20,
            363 / 140,
        ].map(to.Scalar))
    })

    it('2-edharmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1,
            2,
            2 * Math.sqrt(2),
            2 * Math.sqrt(2) * Math.cbrt(2),
            2 * Math.sqrt(2) * Math.cbrt(2) * from.Base(apply.Power(to.Base(2), to.Power(1 / 4))),
        ].map(to.Scalar))
    })

    it('3-edharmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1,
            3,
            3 * Math.sqrt(3),
            3 * Math.sqrt(3) * Math.cbrt(3),
            3 * Math.sqrt(3) * Math.cbrt(3) * from.Base(apply.Power(to.Base(3), to.Power(1 / 4))),
        ].map(to.Scalar))
    })

    it('e-edharmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1,
            Math.E,
            Math.E * Math.sqrt(Math.E),
            Math.E * Math.sqrt(Math.E) * Math.cbrt(Math.E),
            Math.E * Math.sqrt(Math.E) * Math.cbrt(Math.E) * from.Base(apply.Power(to.Base(Math.E), to.Power(1 / 4))),
        ].map(to.Scalar))
    })

    it('3rd tritave of odd harmonics scale', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
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
        ].map(to.Scalar))
    })

    it('8th octave of harmonics scale', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            128 / 128,
            129 / 128,
            130 / 128,
            131 / 128,
        ].map(to.Scalar))
    })

    it('4th octave of harmonics scale', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
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
        ].map(to.Scalar))
    })

    it('subharmonic series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            1 / 1,
            1 / 2,
            1 / 3,
            1 / 4,
            1 / 5,
            1 / 6,
            1 / 7,
        ].map(to.Scalar))
    })

    it('superparticular series', () => {
        const spec: XenharmonicSeriesSpec = presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].spec
        const scalars: Scalar[] = buildScalars(spec)

        testArraysAreClose(scalars, [
            2 / 1,
            3 / 2,
            4 / 3,
            5 / 4,
            6 / 5,
            7 / 6,
            8 / 7,
        ].map(to.Scalar))
    })
})
