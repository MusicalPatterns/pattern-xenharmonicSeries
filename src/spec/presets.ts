// tslint:disable max-file-line-count max-line-length

import { Preset } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import { presetsOrder } from './orders'
import {
    doubleSuperbiparticularSeriesSpecs,
    doubleSuperparticularSeriesSpecs,
    dubduperparticularSeriesSpecs,
    duperparticularSeriesSpecs,
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
    eighthOctaveHarmonics,
    emulatoryEdTwoHarmonicSeriesSpecs,
    emulatoryMatharmonicSeriesSpecs,
    fiveDenominatedHarmonicSeries,
    fourthOctaveHarmonics,
    greaterPhiPowharmonicSeriesSpecs,
    harmonicSeriesSpecs,
    lesserPhiPowharmonicSeriesSpecs,
    lnTwoPowharmonicSeriesSpecs,
    logBaseThreeOfTwoPowharmonicSeriesSpecs,
    logBaseTwoOfThreePowharmonicSeriesSpecs,
    logharmonicSeriesSpecs,
    matharmonicSeriesSpecs,
    metallicHarmonicSeriesSpecs,
    phiLogharmonicSeriesSpecs,
    primeHarmonicSeriesSpecs,
    sevenDenominatedHarmonicSeries,
    subharmonicSeriesSpecs,
    subsuperparticularSeriesSpecs,
    superbiparticularSeriesSpecs,
    superparticularSeriesSpecs,
    thirdTritaveOddHarmonicsSpecs,
    thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
    thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    threeLogharmonicSeriesSpecs,
    trubtruperparticularSeriesSpecs,
    truperparticularSeriesSpecs,
    twelveDenominatedHarmonicSeries,
    twoLogharmonicSeriesSpecs,
} from './preset'
import { XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from './types'

const presets: ObjectOf<Preset<XenharmonicSeriesSpecs>> = {
    [ XenharmonicSeriesPreset.MATHARMONIC_SERIES ]: {
        description: 'moves by the steps of the mathematical harmonic series (first by 1/2, then by 1/3, then 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.MATHARMONIC_SERIES),
        specs: matharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.EMULATORY_MATHARMONIC_SERIES ]: {
        description: 'moves by the steps of the mathematical harmonic series (by 1/1, then 1/2, then 1/3, then 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EMULATORY_MATHARMONIC_SERIES),
        specs: emulatoryMatharmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the tritave (first by 1/2, then by 1/3, then 1/4...), approximating the ln-of-3-powharmonic series',
        formattedName: '3-edharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES),
        specs: edThreeHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.EDHARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the octave (first by 1/2, then 1/3, then 1/4...), approximating the ln-of-2-powharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EDHARMONIC_SERIES),
        specs: edTwoHarmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.EMULATORY_EDHARMONIC_SERIES ]: {
        description: 'moves by shrinking equal divisions of the octave (first by 1/1, then 1/2, then 1/3, then 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EMULATORY_EDHARMONIC_SERIES),
        specs: emulatoryEdTwoHarmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.LN_OF_TWO_POWHARMONIC_SERIES ]: {
        description: 'fits e times as many pitches into each next 2/1 interval',
        formattedName: 'ln-2-powharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.LN_OF_TWO_POWHARMONIC_SERIES),
        specs: lnTwoPowharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.LOG_BASE_THREE_OF_TWO_POWHARMONIC_SERIES ]: {
        description: 'fits 3 times as many pitches into each next 2/1 interval',
        formattedName: 'log-base-3-of-2-powharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.LOG_BASE_THREE_OF_TWO_POWHARMONIC_SERIES),
        specs: logBaseThreeOfTwoPowharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.LOG_BASE_TWO_OF_THREE_POWHARMONIC_SERIES ]: {
        description: 'fits 2 times as many pitches into each next 3/1 interval',
        formattedName: 'log-base-2-of-3-powharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.LOG_BASE_TWO_OF_THREE_POWHARMONIC_SERIES),
        specs: logBaseTwoOfThreePowharmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.LESSER_PHI_POWHARMONIC_SERIES ]: {
        description: 'values raised to the power of lesser phi, ≈0.618034',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.LESSER_PHI_POWHARMONIC_SERIES),
        specs: lesserPhiPowharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.GREATER_PHI_POWHARMONIC_SERIES ]: {
        description: 'values raised to the power of lesser phi, ≈1.618034',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.GREATER_PHI_POWHARMONIC_SERIES),
        specs: greaterPhiPowharmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.LOGHARMONIC_SERIES ]: {
        description: 'values of the natural logarithm',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.LOGHARMONIC_SERIES),
        specs: logharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.TWO_LOGHARMONIC_SERIES ]: {
        description: 'values of the base-2 logarithm',
        formattedName: '2-logharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.TWO_LOGHARMONIC_SERIES),
        specs: twoLogharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.THREE_LOGHARMONIC_SERIES ]: {
        description: 'values of the base-3 logarithm',
        formattedName: '3-logharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.THREE_LOGHARMONIC_SERIES),
        specs: threeLogharmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.PHI_LOGHARMONIC_SERIES ]: {
        description: 'values of the base-phi logarithm',
        formattedName: 'phi-logharmonic series',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.PHI_LOGHARMONIC_SERIES),
        specs: phiLogharmonicSeriesSpecs,
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

    [ XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS ]: {
        description: 'the eighth octave of harmonics (128, 129, 130 ... 255), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS),
        specs: eighthOctaveHarmonics,
    },
    [ XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS ]: {
        description: 'the fourth octave of harmonics (8, 9, 10 ... 15), repeating for each octave',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS),
        specs: fourthOctaveHarmonics,
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

    [ XenharmonicSeriesPreset.HARMONIC_SERIES ]: {
        description: 'is the sequence of positive integers (1, 2, 3, 4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.HARMONIC_SERIES),
        specs: harmonicSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.SUBHARMONIC_SERIES ]: {
        description: 'is the sequence of reciprocals of the positive integers (1/2, 1/3, 1/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBHARMONIC_SERIES),
        specs: subharmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of superparticular ratios (3/2, 4/3, 5/4, 6/5...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES),
        specs: superparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.SUBSUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of subsuperparticular ratios (2/3, 3/4, 4/5, 5/6...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUBSUPERPARTICULAR_SERIES),
        specs: subsuperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.SUPERBIPARTICULAR_SERIES ]: {
        description: 'is the sequence of superbiparticular ratios (5/3, 7/5, 9/7, 11/9...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.SUPERBIPARTICULAR_SERIES),
        specs: superbiparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.DOUBLE_SUPERPARTICULAR_SERIES ]: {
        description: 'is the sequence of double superparticular ratios (5/2, 7/3, 9/4, 11/5...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DOUBLE_SUPERPARTICULAR_SERIES),
        specs: doubleSuperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.DOUBLE_SUPERBIPARTICULAR_SERIES ]: {
        description: 'is the sequence of double superbiparticular ratios (8/3, 12/5, 16/7, 20/9...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DOUBLE_SUPERBIPARTICULAR_SERIES),
        specs: doubleSuperbiparticularSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ]: {
        description: 'like superparticular, but off by 2 (3/1, 4/2, 5/3, 6/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES),
        specs: duperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.DUBDUPERPARTICULAR_SERIES ]: {
        description: 'like subsuperparticular, but off by 2 (1/3, 2/4, 3/5, 4/6...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.DUBDUPERPARTICULAR_SERIES),
        specs: dubduperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.TRUPERPARTICULAR_SERIES ]: {
        description: 'like superparticular, but off by 2 (4/1, 5/2, 6/3, 7/4...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.TRUPERPARTICULAR_SERIES),
        specs: truperparticularSeriesSpecs,
    },
    [ XenharmonicSeriesPreset.TRUBTRUPERPARTICULAR_SERIES ]: {
        description: 'like subsuperparticular, but off by 2 (1/4, 2/5, 3/6, 4/7...)',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.TRUBTRUPERPARTICULAR_SERIES),
        specs: trubtruperparticularSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.METALLIC_HARMONIC_SERIES ]: {
        description: 'the sequence of metallic means',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.METALLIC_HARMONIC_SERIES),
        specs: metallicHarmonicSeriesSpecs,
    },

    [ XenharmonicSeriesPreset.PRIME_HARMONIC_SERIES ]: {
        description: 'the sequence of prime numbers',
        order: presetsOrder.indexOf(XenharmonicSeriesPreset.PRIME_HARMONIC_SERIES),
        specs: primeHarmonicSeriesSpecs,
    },
}

export {
    presets,
}
