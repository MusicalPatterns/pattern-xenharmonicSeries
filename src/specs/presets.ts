import { standardInitialSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { DictionaryOf, from, OCTAVE, to, TRITAVE } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_DEFAULT_PITCH,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesSpec } from './types'

const sharedXenharmonicSeries: XenharmonicSeriesSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: XENHARMONIC_SERIES_DEFAULT_PITCH,
    base: OCTAVE,
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    power: to.Power(-1),
    sequenceType: SequenceType.PARTIAL_SUM,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
    useBase: false,
}

const standardHarmonicSeries: XenharmonicSeriesSpec = {
    ...sharedXenharmonicSeries,
    power: to.Power(0),
}

const matharmonicSeries: XenharmonicSeriesSpec = sharedXenharmonicSeries

const sharedEdHarmonicSeries: XenharmonicSeriesSpec = {
    ...sharedXenharmonicSeries,
    lowerBound: to.Index(0),
    sequenceType: SequenceType.PARTIAL_PRODUCT,
    useBase: true,
}

const edTwoHarmonicSeries: XenharmonicSeriesSpec = sharedEdHarmonicSeries

const edThreeHarmonicSeries: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeries,
    base: TRITAVE,
}

const presets: DictionaryOf<XenharmonicSeriesSpec> = {
    edThreeHarmonicSeries,
    edTwoHarmonicSeries,
    matharmonicSeries,
    standardHarmonicSeries,
}

export {
    matharmonicSeries,
    presets,
}
