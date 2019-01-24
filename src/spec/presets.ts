import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { initial } from './initial'
import {
    edEulerHarmonicSeriesSpec,
    edThreeHarmonicSeriesSpec,
    edTwoHarmonicSeriesSpec,
    eighthOctaveHarmonics,
    fourthOctaveHarmonics,
    standardHarmonicSeriesSpec,
    thirdTritaveOddHarmonicsSpec,
} from './specs'
import { XenharmonicSeriesPreset, XenharmonicSeriesSpec } from './types'

const presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>> = {
    [ XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES ]: {
        formattedName: 'e-edharmonic series',
        order: 5,
        spec: edEulerHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ]: {
        formattedName: '3-edharmonic series',
        order: 4,
        spec: edThreeHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ]: {
        formattedName: '2-edharmonic series',
        order: 3,
        spec: edTwoHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ]: {
        order: 7,
        spec: fourthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.MATHARMONIC_SERIES ]: {
        order: 2,
        spec: initial,
    },
    [ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ]: {
        order: 1,
        spec: standardHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ]: {
        order: 8,
        spec: eighthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ]: {
        order: 6,
        spec: thirdTritaveOddHarmonicsSpec,
    },
}

export {
    presets,
}
