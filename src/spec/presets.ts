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
        description: 'moves by shrinking equal divisions of the interval e (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: 'e-edharmonic series',
        order: 5,
        spec: edEulerHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the tritave (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: '3-edharmonic series',
        order: 4,
        spec: edThreeHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the octave (first by 1/2, then 1/3, then 1/4...)',
        formattedName: '2-edharmonic series',
        order: 3,
        spec: edTwoHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ]: {
        description: 'the fourth octave of harmonics (8, 9, 10 ... 15), repeating for each octave',
        order: 7,
        spec: fourthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.MATHARMONIC_SERIES ]: {
        description: 'moves by the steps of the mathematical harmonic series (first by 1/2, then by 1/3, then 1/4...)',
        order: 2,
        spec: initial,
    },
    [ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ]: {
        description: 'is the sequence of positive integers (1, 2, 3, 4...)',
        order: 1,
        spec: standardHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ]: {
        description: 'the eighth octave of harmonics (128, 129, 130 ... 255), repeating for each octave',
        order: 8,
        spec: eighthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ]: {
        description: 'the third tritave of odd harmonics (9, 11, 13 ... 25), repeating for each tritave',
        order: 6,
        spec: thirdTritaveOddHarmonicsSpec,
    },
    [ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ]: {
        description: 'is the sequence of reciprocals of the positive integers (1/2, 1/3, 1/4...)',
        order: 9,
        spec: subharmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of superparticular ratios (2/1, 3/2, 4/3, 5/4...)',
        order: 10,
        spec: superparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ]: {
        description: 'like superparticular, but off by 2 (3/1, 4/2, 5/3, 6/4...)',
        order: 11,
        spec: duperparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ]: {
        description: 'is the sequence of "subparticular" ratios (1/2, 2/3, 3/4, 4/5...)',
        order: 12,
        spec: subparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ]: {
        description: 'like subparticular, but off by 2 (1/3, 2/4, 3/5, 4/6...)',
        order: 13,
        spec: dubparticularSeriesSpec,
    },
}

export {
    presets,
}
