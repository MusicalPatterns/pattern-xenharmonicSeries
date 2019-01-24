import { PresetFor, standardInitialSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import {
    DictionaryOf,
    EVERY_OTHER,
    from,
    MULTIPLICATIVE_IDENTITY,
    OCTAVE,
    to,
    TRITAVE,
} from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_BASE_FREQUENCY,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from '../constants'
import { THIRD } from './constants'
import { SequenceType, XenharmonicSeriesSpec } from './types'

const sharedXenharmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_FREQUENCY ]: XENHARMONIC_SERIES_BASE_FREQUENCY,
    base: OCTAVE,
    constant: 0,
    ground: true,
    iterations: to.Count(1),
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    power: to.Power(-1),
    sequenceType: SequenceType.PARTIAL_SUM,
    termCoefficient: MULTIPLICATIVE_IDENTITY,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
    useBase: false,
}

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedXenharmonicSeriesSpec,
    power: to.Power(0),
}

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

const thirdTritaveOddHarmonicsSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    constant: from.Count(THIRD) * from.Base(TRITAVE) - from.Scalar(EVERY_OTHER),
    iterations: THIRD,
    termCoefficient: EVERY_OTHER,
    upperBound: to.Index(from.Count(THIRD) * from.Base(TRITAVE)),
}

const presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>> = {
    edEulerHarmonicSeries: {
        formattedName: 'e-edharmonic series',
        order: 5,
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
        spec: sharedXenharmonicSeriesSpec,
    },
    standardHarmonicSeries: {
        order: 1,
        spec: standardHarmonicSeriesSpec,
    },
    thirdTritaveOddHarmonics: {
        order: 6,
        spec: thirdTritaveOddHarmonicsSpec,
    },
}

export {
    sharedXenharmonicSeriesSpec,
    presets,
}
