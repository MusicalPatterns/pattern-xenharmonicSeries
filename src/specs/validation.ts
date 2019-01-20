import { SpecValidationFunctionFor, SpecValidationResultsFor } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from './types'

const validationFunction: SpecValidationFunctionFor<XenharmonicSeriesSpec> =
    (spec: XenharmonicSeriesSpec): SpecValidationResultsFor<XenharmonicSeriesSpec> => {
        if (spec.upperBound < spec.lowerBound) {
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
