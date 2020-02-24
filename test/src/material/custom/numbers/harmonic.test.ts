import { as, Ordinal } from '@musical-patterns/utilities'
import {
    ComputeNumbersParameters,
    NumberSequence,
    numberSequenceToComputeNumbersMap,
} from '../../../../../src/indexForTest'

describe('harmonic numbers', (): void => {
    const ENOUGH_FOR_TESTING: Ordinal = as.Ordinal(12)

    it('increases by 1/n each time', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: undefined,
            superparticularMod: undefined,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.HARMONIC_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                0 / 1,
                // tslint:disable-next-line no-identical-expressions
                1 / 1,
                3 / 2,
                11 / 6,
                25 / 12,
                137 / 60,
                49 / 20,
                363 / 140,
                761 / 280,
                7129 / 2520,
                7381 / 2520,
            ].map(as.Scalar))
    })
})
