import { ComputeValidations, Validations } from '@musical-patterns/spec'
import { XenharmonicSeriesSpecs } from './types'

const computeValidations: ComputeValidations<XenharmonicSeriesSpecs> =
    (specs: XenharmonicSeriesSpecs): Validations<XenharmonicSeriesSpecs> => {
        if (specs.upperBound < specs.lowerBound) {
            return {
                lowerBound: 'cannot be more than the upper bound',
                upperBound: 'cannot be less than the lower bound',
            }
        }

        return undefined
    }

export {
    computeValidations,
}
