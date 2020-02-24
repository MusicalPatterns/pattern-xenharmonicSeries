import { ComputeValidations, Validations } from '@musical-patterns/spec'
import { as, isUndefined } from '@musical-patterns/utilities'
import { FunctionType, NumberSequence } from '../types'
import { XenharmonicSeriesSpecs } from './types'

const validateBounds: (
    specs: XenharmonicSeriesSpecs,
    validations: Validations<XenharmonicSeriesSpecs>,
) => Validations<XenharmonicSeriesSpecs> =
    (
        { upperBound, lowerBound }: XenharmonicSeriesSpecs,
        validations: Validations<XenharmonicSeriesSpecs>,
    ): Validations<XenharmonicSeriesSpecs> => {
        let newValidations: Validations<XenharmonicSeriesSpecs> = validations

        if (upperBound < lowerBound) {
            newValidations = {
                ...validations,
                lowerBound: 'cannot be more than the upper bound',
                upperBound: 'cannot be less than the lower bound',
            }
        }

        return newValidations
    }

const validateLogarithmicLowerBound: (
    specs: XenharmonicSeriesSpecs,
    validations: Validations<XenharmonicSeriesSpecs>,
) => Validations<XenharmonicSeriesSpecs> =
    (
        { lowerBound, functionType }: XenharmonicSeriesSpecs,
        validations: Validations<XenharmonicSeriesSpecs>,
    ): Validations<XenharmonicSeriesSpecs> => {
        let newValidations: Validations<XenharmonicSeriesSpecs> = validations

        if (functionType === FunctionType.LOGARITHMIC && lowerBound <= as.Ordinal(1)) {
            newValidations = {
                ...validations,
                lowerBound: 'when using a logarithmic function, the lower bound must be greater than 1',
            }
        }

        return newValidations

    }

const validateSuperparticularMod: (
    specs: XenharmonicSeriesSpecs,
    validations: Validations<XenharmonicSeriesSpecs>,
) => Validations<XenharmonicSeriesSpecs> =
    (
        { numberSequence, superparticularMod }: XenharmonicSeriesSpecs,
        validations: Validations<XenharmonicSeriesSpecs>,
    ): Validations<XenharmonicSeriesSpecs> => {
        let newValidations: Validations<XenharmonicSeriesSpecs> = validations

        if (numberSequence === NumberSequence.SUPERPARTICULAR_NUMBERS && isUndefined(superparticularMod)) {
            newValidations = {
                ...validations,
                superparticularMod: 'a mod is required when the number sequence is superparticular',
            }
        }

        return newValidations

    }

const computeValidations: ComputeValidations<XenharmonicSeriesSpecs> =
    (specs: XenharmonicSeriesSpecs): Validations<XenharmonicSeriesSpecs> => {
        let validations: Validations<XenharmonicSeriesSpecs> = undefined

        validations = validateBounds(specs, validations)
        validations = validateLogarithmicLowerBound(specs, validations)
        validations = validateSuperparticularMod(specs, validations)

        return validations
    }

export {
    computeValidations,
}
