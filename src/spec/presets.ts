// tslint:disable max-file-line-count

import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { initial } from './initial'
import { presetsOrder } from './orders'
import {
    dubparticularSeriesSpec,
    duperparticularSeriesSpec,
    edEulerHarmonicSeriesSpec,
    edThreeHarmonicSeriesSpec,
    edTwoHarmonicSeriesSpec,
    eighthOctaveHarmonics,
    fiveDenominatedHarmonicSeries,
    fourthOctaveHarmonics,
    sevenDenominatedHarmonicSeries,
    standardHarmonicSeriesSpec,
    subharmonicSeriesSpec,
    subparticularSeriesSpec,
    superparticularSeriesSpec,
    thirdTritaveOddHarmonicsSpec,
    thirdTritaveOddHarmonicsWithStackedFifthsSpec,
    thirdTritaveOddHarmonicsWithStackedFourthsSpec,
    thirdTritaveOddHarmonicsWithStackedThirdsSpec,
    twelveDenominatedHarmonicSeries,
} from './specs'
import { XenharmonicSeriesPreset, XenharmonicSeriesSpec } from './types'

const presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>> = {
    [ XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the interval e (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: 'e-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES),
        spec: edEulerHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the tritave (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: '3-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES),
        spec: edThreeHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the octave (first by 1/2, then 1/3, then 1/4...)',
        formattedName: '2-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES),
        spec: edTwoHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ]: {
        description: 'the fourth octave of harmonics (8, 9, 10 ... 15), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS),
        spec: fourthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.MATHARMONIC_SERIES ]: {
        description: 'moves by the steps of the mathematical harmonic series (first by 1/2, then by 1/3, then 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.MATHARMONIC_SERIES),
        spec: initial,
    },
    [ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ]: {
        description: 'is the sequence of positive integers (1, 2, 3, 4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES),
        spec: standardHarmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ]: {
        description: 'the eighth octave of harmonics (128, 129, 130 ... 255), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS),
        spec: eighthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ]: {
        description: 'the third tritave of odd harmonics (9, 11, 13 ... 25), repeating for each tritave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS),
        spec: thirdTritaveOddHarmonicsSpec,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked thirds',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS),
        spec: thirdTritaveOddHarmonicsWithStackedThirdsSpec,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked fourths',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS),
        spec: thirdTritaveOddHarmonicsWithStackedFourthsSpec,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked fifths',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS),
        spec: thirdTritaveOddHarmonicsWithStackedFifthsSpec,
    },
    [ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ]: {
        description: 'is the sequence of reciprocals of the positive integers (1/2, 1/3, 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBHARMONIC_SERIES),
        spec: subharmonicSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of superparticular ratios (2/1, 3/2, 4/3, 5/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES),
        spec: superparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ]: {
        description: 'like superparticular, but off by 2 (3/1, 4/2, 5/3, 6/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES),
        spec: duperparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ]: {
        description: 'is the sequence of "subparticular" ratios (1/2, 2/3, 3/4, 4/5...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBPARTICULAR_SERIES),
        spec: subparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ]: {
        description: 'like subparticular, but off by 2 (1/3, 2/4, 3/5, 4/6...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUBPARTICULAR_SERIES),
        spec: dubparticularSeriesSpec,
    },
    [ XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 5 - an octave of that sliced and repeated',
        formattedName: '5-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES),
        spec: fiveDenominatedHarmonicSeries,
    },
    [ XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 7 - an octave of that sliced and repeated',
        formattedName: '7-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES),
        spec: sevenDenominatedHarmonicSeries,
    },
    [ XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 12 - an octave of that sliced and repeated',
        formattedName: '12-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES),
        spec: twelveDenominatedHarmonicSeries,
    },
}

export {
    presets,
}
