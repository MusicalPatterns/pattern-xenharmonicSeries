import { SpecValidationFunction, SpecValidationResults } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from './types'

const validationFunction: SpecValidationFunction<XenharmonicSeriesSpec> =
    (spec: XenharmonicSeriesSpec): SpecValidationResults<XenharmonicSeriesSpec> => {
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
