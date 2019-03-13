// tslint:disable max-file-line-count

import { Preset } from '@musical-patterns/pattern'
import { ObjectOf } from '@musical-patterns/utilities'
import { initialSpecs } from './initials'
import { presetsOrder } from './orders'
import {
    dubparticularSeriesSpecs,
    duperparticularSeriesSpecs,
    edEulerHarmonicSeriesSpecs,
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
    eighthOctaveHarmonics,
    fiveDenominatedHarmonicSeries,
    fourthOctaveHarmonics,
    sevenDenominatedHarmonicSeries,
    standardHarmonicSeriesSpecs,
    subharmonicSeriesSpecs,
    subparticularSeriesSpecs,
    superparticularSeriesSpecs,
    thirdTritaveOddHarmonicsSpecs,
    thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
    thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    twelveDenominatedHarmonicSeries,
} from './spec'
import { XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from './types'

const presets: ObjectOf<Preset<XenharmonicSeriesSpecs>> = {
    [ XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the interval e (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: 'e-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES),
        specs: edEulerHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the tritave (first by 1/2, then by 1/3, then 1/4...)',
        formattedName: '3-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES),
        specs: edThreeHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the octave (first by 1/2, then 1/3, then 1/4...)',
        formattedName: '2-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES),
        specs: edTwoHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ]: {
        description: 'the fourth octave of harmonics (8, 9, 10 ... 15), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS),
        specs: fourthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.MATHARMONIC_SERIES ]: {
        description: 'moves by the steps of the mathematical harmonic series (first by 1/2, then by 1/3, then 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.MATHARMONIC_SERIES),
        specs: initialSpecs,
    },
    [ XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES ]: {
        description: 'is the sequence of positive integers (1, 2, 3, 4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES),
        specs: standardHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ]: {
        description: 'the eighth octave of harmonics (128, 129, 130 ... 255), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS),
        specs: eighthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS ]: {
        description: 'the third tritave of odd harmonics (9, 11, 13 ... 25), repeating for each tritave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS),
        specs: thirdTritaveOddHarmonicsSpecs,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked thirds',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS),
        specs: thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked fourths',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS),
        specs: thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    },
    [ XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS ]: {
        description: 'third tritave of odd harmonics (9, 11, 13 ... 25) repeating for each tritave, w/ stacked fifths',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS),
        specs: thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
    },
    [ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ]: {
        description: 'is the sequence of reciprocals of the positive integers (1/2, 1/3, 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBHARMONIC_SERIES),
        specs: subharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of superparticular ratios (2/1, 3/2, 4/3, 5/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES),
        specs: superparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ]: {
        description: 'like superparticular, but off by 2 (3/1, 4/2, 5/3, 6/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES),
        specs: duperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ]: {
        description: 'is the sequence of "subparticular" ratios (1/2, 2/3, 3/4, 4/5...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBPARTICULAR_SERIES),
        specs: subparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ]: {
        description: 'like subparticular, but off by 2 (1/3, 2/4, 3/5, 4/6...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUBPARTICULAR_SERIES),
        specs: dubparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 5 - an octave of that sliced and repeated',
        formattedName: '5-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES),
        specs: fiveDenominatedHarmonicSeries,
    },
    [ XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 7 - an octave of that sliced and repeated',
        formattedName: '7-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES),
        specs: sevenDenominatedHarmonicSeries,
    },
    [ XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES ]: {
        description: 'the harmonic series, but each term divided by 12 - an octave of that sliced and repeated',
        formattedName: '12-denominated harmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES),
        specs: twelveDenominatedHarmonicSeries,
    },
}

export {
    presets,
}
