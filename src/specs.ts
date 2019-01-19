import {
    PatternSpecData,
    PatternSpecPropertyType,
    PatternSpecValidationFunction,
    PatternSpecValidationResults,
    standardInitialPatternSpec,
    standardPatternSpecAttributes,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { from, OCTAVE, to, TRITAVE } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_DEFAULT_PITCH,
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
} from './constants'
import {
    XenharmonicSeriesOperation,
    XenharmonicSeriesPatternSpec,
    XenharmonicSeriesPatternSpecAttributes,
} from './types'

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

const initial: XenharmonicSeriesPatternSpec = matharmonicSeries

const attributes: XenharmonicSeriesPatternSpecAttributes = {
    ...standardPatternSpecAttributes,
    base: {
        constraint: { excludeMin: true, min: 1 },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    lowerBound: {
        constraint: { integer: true, min: 1 },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    operation: {
        constraint: Object.values(XenharmonicSeriesOperation),
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    upperBound: {
        constraint: { integer: true },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

const validationFunction: PatternSpecValidationFunction<XenharmonicSeriesPatternSpec> =
    (patternSpec: XenharmonicSeriesPatternSpec): PatternSpecValidationResults<XenharmonicSeriesPatternSpec> => {
        if (patternSpec.upperBound < patternSpec.lowerBound) {
            return {
                lowerBound: 'cannot be more than the upper bound',
                upperBound: 'cannot be less than the lower bound',
            }
        }

        return undefined
    }

const specData: PatternSpecData<XenharmonicSeriesPatternSpec> = {
    attributes,
    initial,
    presets: {
        edThreeHarmonicSeries,
        edTwoHarmonicSeries,
        matharmonicSeries,
        standardHarmonicSeries,
    },
    validationFunction,
}

export {
    specData,
}
