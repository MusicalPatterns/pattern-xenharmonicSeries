import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { initial } from './initial'
import {
    dubparticularSeriesSpec,
    duperparticularSeriesSpec,
    edEulerHarmonicSeriesSpec,
    edThreeHarmonicSeriesSpec,
    edTwoHarmonicSeriesSpec,
    eighthOctaveHarmonics,
    fourthOctaveHarmonics,
    standardHarmonicSeriesSpec,
    subharmonicSeriesSpec,
    subparticularSeriesSpec,
    superparticularSeriesSpec,
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
    [ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ]: {
        order: 9,
        spec: subharmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ]: {
        order: 10,
        spec: superparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ]: {
        order: 11,
        spec: duperparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ]: {
        order: 12,
        spec: subparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ]: {
        order: 13,
        spec: dubparticularSeriesSpec,
    },
}

export {
    presets,
}
