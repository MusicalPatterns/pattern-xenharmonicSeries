import { Validations } from '@musical-patterns/spec'
import { as } from '@musical-patterns/utilities'
import {
    computeValidations,
    FunctionType,
    initialSpecs,
    NumberSequence,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecs,
} from '../../../src/indexForTest'

describe('validations', (): void => {
    describe('bounds', (): void => {
        it('invalidates upper bound less than lower bound', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(2),
                [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(1),
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ XenharmonicSeriesSpec.LOWER_BOUND ]: 'cannot be more than the upper bound',
                    [ XenharmonicSeriesSpec.UPPER_BOUND ]: 'cannot be less than the lower bound',
                })
        })

        it('accepts upper bound equal to lower bound', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(1),
                [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(1),
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toBeUndefined()
        })
    })

    describe('function type & lower bound', (): void => {
        it('invalidates lower bound 1 or less when the function type is logarithmic', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(1),
                [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.LOGARITHMIC,
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ XenharmonicSeriesSpec.LOWER_BOUND ]: 'when using a logarithmic function, the lower bound must be greater than 1',
                })
        })

        it('accepts lower bound 2 or more when the function type is logarithmic', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(2),
                [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.LOGARITHMIC,
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toBeUndefined()
        })

        it('accepts lower bound 1 or less when the function type is a power function that is created via the composition of an exponential and a logarithmic power, because it becomes a power function by the base of the logarithm switching with the base of the exponent', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(1),
                [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.EXPONENTIAL_OF_LOGARITHMIC_POWER,
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toBeUndefined()
        })
    })

    describe('superparticular number sequence and superparticular mod', (): void => {
        it('requires superparticular mod when the number sequence is superparticular', (): void => {
            const specs: XenharmonicSeriesSpecs = {
                ...initialSpecs,
                [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: undefined,
                [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.SUPERPARTICULAR_NUMBERS,
            }

            const validations: Validations<XenharmonicSeriesSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 'a mod is required when the number sequence is superparticular',
                })
        })
    })
})
