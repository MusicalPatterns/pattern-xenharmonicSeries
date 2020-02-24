// tslint:disable no-magic-numbers

import {
    as,
    asRational,
    EIGHTH,
    FIFTH,
    FOURTH,
    NINTH,
    OCTAVE,
    periodIterationHarmonicStepCount,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../../nominals'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const fourthOctaveHarmonics: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(3),
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(as.number(
        periodIterationHarmonicStepCount(OCTAVE, FOURTH),
    )),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(as.number(
        periodIterationHarmonicStepCount(OCTAVE, FIFTH),
    )),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 8),
}

const eighthOctaveHarmonics: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(as.number(
        periodIterationHarmonicStepCount(OCTAVE, EIGHTH),
    )),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(as.number(
        periodIterationHarmonicStepCount(OCTAVE, NINTH),
    )),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 128),
}

export {
    fourthOctaveHarmonics,
    eighthOctaveHarmonics,
}
