import { as, Ordinal } from '@musical-patterns/utilities'
import {
    ComputeNumbersParameters,
    NumberSequence,
    numberSequenceToComputeNumbersMap,
} from '../../../../../src/indexForTest'

describe('numbers', (): void => {
    const ENOUGH_FOR_TESTING: Ordinal = as.Ordinal(12)

    it('works for superparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 1,
            superparticularMod: 1,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                3 / 2,
                4 / 3,
                5 / 4,
                6 / 5,
                7 / 6,
                8 / 7,
            ].map(as.Scalar))
    })

    it('works for superbiparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 1,
            superparticularMod: 2,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                5 / 3,
                7 / 5,
                9 / 7,
                11 / 9,
                13 / 11,
            ].map(as.Scalar))
    })

    it('works for supertriparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 1,
            superparticularMod: 3,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                7 / 4,
                8 / 5,
                10 / 7,
                11 / 8,
                13 / 10,
            ].map(as.Scalar))
    })

    it('works for double superparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 2,
            superparticularMod: 1,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                5 / 2,
                7 / 3,
                9 / 4,
                11 / 5,
            ].map(as.Scalar))
    })

    it('works for double superbiparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 2,
            superparticularMod: 2,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                8 / 3,
                12 / 5,
                16 / 7,
                20 / 9,
            ].map(as.Scalar))
    })

    it('works for double supertriparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 2,
            superparticularMod: 3,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                11 / 4,
                13 / 5,
                17 / 7,
                19 / 8,
            ].map(as.Scalar))
    })

    it('works for triple superparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 3,
            superparticularMod: 1,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                7 / 2,
                10 / 3,
                13 / 4,
                16 / 5,
            ].map(as.Scalar))
    })

    it('works for triple superbiparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 3,
            superparticularMod: 2,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                11 / 3,
                17 / 5,
                23 / 7,
                29 / 9,
            ].map(as.Scalar))
    })

    it('works for triple supertriparticular numbers', (): void => {
        const params: ComputeNumbersParameters = {
            superparticularDiv: 3,
            superparticularMod: 3,
            upperBound: ENOUGH_FOR_TESTING,
        }
        const harmonicNumbers: number[] = numberSequenceToComputeNumbersMap[ NumberSequence.SUPERPARTICULAR_NUMBERS ](params)

        expect(harmonicNumbers)
            .toBeCloseSoFar([
                15 / 4,
                18 / 5,
                24 / 7,
                27 / 8,
            ].map(as.Scalar))
    })
})
