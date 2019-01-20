import { standardInitialPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { DictionaryOf, from, OCTAVE, to, TRITAVE } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_DEFAULT_PITCH,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesPatternSpec } from './types'

const sharedXenharmonicSeries: XenharmonicSeriesPatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: XENHARMONIC_SERIES_DEFAULT_PITCH,
    base: OCTAVE,
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    power: to.Power(-1),
    sequenceType: SequenceType.PARTIAL_SUM,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
    useBase: false,
}

const standardHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedXenharmonicSeries,
    power: to.Power(0),
}

const matharmonicSeries: XenharmonicSeriesPatternSpec = sharedXenharmonicSeries

const sharedEdHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedXenharmonicSeries,
    lowerBound: to.Index(0),
    sequenceType: SequenceType.PARTIAL_PRODUCT,
    useBase: true,
}

const edTwoHarmonicSeries: XenharmonicSeriesPatternSpec = sharedEdHarmonicSeries

const edThreeHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedEdHarmonicSeries,
    base: TRITAVE,
}

const presets: DictionaryOf<XenharmonicSeriesPatternSpec> = {
    edThreeHarmonicSeries,
    edTwoHarmonicSeries,
    matharmonicSeries,
    standardHarmonicSeries,
}

export {
    matharmonicSeries,
    presets,
}
