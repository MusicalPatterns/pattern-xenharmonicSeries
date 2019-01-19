import { standardInitialPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { DictionaryOf, from, OCTAVE, to, TRITAVE } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_DEFAULT_PITCH,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from '../constants'
import { XenharmonicSeriesOperation, XenharmonicSeriesPatternSpec } from '../types'

const sharedXenharmonicSeries: XenharmonicSeriesPatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: XENHARMONIC_SERIES_DEFAULT_PITCH,
    base: to.Base(from.Scalar(OCTAVE)),
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    operation: XenharmonicSeriesOperation.SERIES,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
}

const standardHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedXenharmonicSeries,
    operation: XenharmonicSeriesOperation.SEQUENCE,
}

const matharmonicSeries: XenharmonicSeriesPatternSpec = sharedXenharmonicSeries

const sharedEdHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedXenharmonicSeries,
    lowerBound: to.Index(0),
    operation: XenharmonicSeriesOperation.PRODUCT_OF_POWERS,
}

const edTwoHarmonicSeries: XenharmonicSeriesPatternSpec = sharedEdHarmonicSeries

const edThreeHarmonicSeries: XenharmonicSeriesPatternSpec = {
    ...sharedEdHarmonicSeries,
    base: to.Base(from.Scalar(TRITAVE)),
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
