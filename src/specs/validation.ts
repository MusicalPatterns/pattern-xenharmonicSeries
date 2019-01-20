import { PatternSpecValidationFunctionFor, PatternSpecValidationResultsFor } from '@musical-patterns/pattern'
import { XenharmonicSeriesPatternSpec } from './types'

const validationFunction: PatternSpecValidationFunctionFor<XenharmonicSeriesPatternSpec> =
    (patternSpec: XenharmonicSeriesPatternSpec): PatternSpecValidationResultsFor<XenharmonicSeriesPatternSpec> => {
        if (patternSpec.upperBound < patternSpec.lowerBound) {
            return {
                lowerBound: 'cannot be more than the upper bound',
                upperBound: 'cannot be less than the lower bound',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
