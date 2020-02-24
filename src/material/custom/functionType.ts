import { as, isUndefined, log, pow, use } from '@musical-patterns/utilities'
import { FunctionType } from '../../types'
import { ApplyFunctionTypeParameters } from './types'

const applyLogarithmicType: (parameters: ApplyFunctionTypeParameters) => number[] =
    ({ sequence, functionType, logarithmicBase }: ApplyFunctionTypeParameters): number[] => {
        let newSequence: number[] = sequence

        if (
            (
                functionType === FunctionType.LOGARITHMIC ||
                functionType === FunctionType.EXPONENTIAL_OF_LOGARITHMIC_POWER
            ) &&
            !isUndefined(logarithmicBase)
        ) {
            newSequence = newSequence.map((el: number): number => as.number(log(el, logarithmicBase)))
        }

        return newSequence
    }

const applyExponentialType: (parameters: ApplyFunctionTypeParameters) => number[] =
    ({ sequence, functionType, exponentialBase }: ApplyFunctionTypeParameters): number[] => {
        let newSequence: number[] = sequence

        if (
            (
                functionType === FunctionType.EXPONENTIAL ||
                functionType === FunctionType.EXPONENTIAL_OF_LOGARITHMIC_POWER
            ) &&
            !isUndefined(exponentialBase)
        ) {
            newSequence = newSequence.map((el: number): number => pow(exponentialBase, as.Exponent(el)))
        }

        return newSequence
    }

const applyPowerType: (parameters: ApplyFunctionTypeParameters) => number[] =
    ({ sequence, functionType, power }: ApplyFunctionTypeParameters): number[] => {
        let newSequence: number[] = sequence

        if (functionType === FunctionType.SIMPLE_POWER && !isUndefined(power)) {
            newSequence = newSequence.map((el: number): number => use.Exponent(el, power))
        }

        return newSequence
    }

const applyFunctionType: (parameters: ApplyFunctionTypeParameters) => number[] =
    (parameters: ApplyFunctionTypeParameters): number[] => {
        let newSequence: number[] = parameters.sequence

        newSequence = applyLogarithmicType({ ...parameters, sequence: newSequence })
        newSequence = applyExponentialType({ ...parameters, sequence: newSequence })
        newSequence = applyPowerType({ ...parameters, sequence: newSequence })

        return newSequence
    }

export {
    applyFunctionType,
}
