import { PresetFor, standardInitialSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { DictionaryOf, from, OCTAVE, to, TRITAVE } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_BASE_FREQUENCY,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesSpec } from './types'

const sharedXenharmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_FREQUENCY ]: XENHARMONIC_SERIES_BASE_FREQUENCY,
    base: OCTAVE,
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    power: to.Power(-1),
    sequenceType: SequenceType.PARTIAL_SUM,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
    useBase: false,
}

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedXenharmonicSeriesSpec,
    power: to.Power(0),
}

const matharmonicSeriesSpec: XenharmonicSeriesSpec = sharedXenharmonicSeriesSpec

const sharedEdHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedXenharmonicSeriesSpec,
    lowerBound: to.Index(0),
    sequenceType: SequenceType.PARTIAL_PRODUCT,
    useBase: true,
}

const edTwoHarmonicSeriesSpec: XenharmonicSeriesSpec = sharedEdHarmonicSeriesSpec

const edThreeHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    base: TRITAVE,
}

const edEulerHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    base: to.Base(Math.E),
}

const presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>> = {
    edEulerHarmonicSeries: {
        formattedName: 'e-edharmonic series',
        order: 4,
        spec: edEulerHarmonicSeriesSpec,
    },
    edThreeHarmonicSeries: {
        formattedName: '3-edharmonic series',
        order: 4,
        spec: edThreeHarmonicSeriesSpec,
    },
    edTwoHarmonicSeries: {
        formattedName: '2-edharmonic series',
        order: 3,
        spec: edTwoHarmonicSeriesSpec,
    },
    matharmonicSeries: {
        order: 2,
        spec: matharmonicSeriesSpec,
    },
    standardHarmonicSeries: {
        order: 1,
        spec: standardHarmonicSeriesSpec,
    },
}

export {
    matharmonicSeriesSpec,
    presets,
}
