import { PatternSpecValidationFunction, PatternSpecValidationResults } from '@musical-patterns/pattern'
import { XenharmonicSeriesPatternSpec } from './types'

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

export {
    validationFunction,
}
