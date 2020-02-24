import {
    as,
    asRational,
    Block,
    computeLowestTerms,
    Denominator,
    forEach,
    getDenominator,
    getNumerator,
    INCLUSIVE,
    INITIAL,
    integerDivide,
    isUndefined,
    Maybe,
    modulus,
    Numerator,
    Ordinal,
    product,
    range,
    Rational,
    use,
} from '@musical-patterns/utilities'
import { REJECT_COUNT_FOR_DIV_ONE_MOD_ONE_SUPERPARTICULAR } from './constants'
import { ComputeMaybeTrueSuperparticularParameters, ComputeNumbers, ComputeNumbersParameters } from './types'

const computeMaybeTrueSuperparticular: (parameters: ComputeMaybeTrueSuperparticularParameters) => Maybe<number> =
    ({ num, superparticularDiv, superparticularMod }: ComputeMaybeTrueSuperparticularParameters): Maybe<number> => {
        let maybeTrueSuperparticular: Maybe<number>

        const potentialTrueSuperparticular: Rational = computeLowestTerms(asRational(
            num * superparticularDiv + superparticularMod,
            num,
        ))

        const potentialTrueSuperparticularLowestTermsNumerator: Numerator =
            getNumerator(potentialTrueSuperparticular)
        const potentialTrueSuperparticularLowestTermsDenominator: Denominator =
            getDenominator(potentialTrueSuperparticular)

        const isDivPreservedInLowestTerms: boolean = integerDivide(
            as.number(potentialTrueSuperparticularLowestTermsNumerator),
            as.number(potentialTrueSuperparticularLowestTermsDenominator),
        ) === superparticularDiv
        const isModPreservedInLowestTerms: boolean = modulus(
            as.number(potentialTrueSuperparticularLowestTermsNumerator),
            as.number(potentialTrueSuperparticularLowestTermsDenominator),
        ) === superparticularMod

        if (isDivPreservedInLowestTerms && isModPreservedInLowestTerms) {
            maybeTrueSuperparticular = as.number(potentialTrueSuperparticular)
        }

        return maybeTrueSuperparticular
    }

const computeSuperparticularNumbers: ComputeNumbers =
    ({ superparticularDiv, superparticularMod, upperBound }: ComputeNumbersParameters): Block => {
        const justSuperparticularMod: number = superparticularMod as number

        const safeRangeToGetEnoughTrueSuperparticulars: Ordinal = use.Transition(
            as.Ordinal(product(
                as.number(use.Cardinal(upperBound, INCLUSIVE)),
                superparticularDiv || 1,
                justSuperparticularMod,
            )),
            REJECT_COUNT_FOR_DIV_ONE_MOD_ONE_SUPERPARTICULAR,
        )
        const numbers: number[] = range(INITIAL, safeRangeToGetEnoughTrueSuperparticulars)

        const superparticulars: number[] = []
        forEach(numbers, (num: number): void => {
            if (isUndefined(superparticularDiv)) {
                const duperparticular: number = (num + justSuperparticularMod) / num
                superparticulars.push(duperparticular)
            }
            else {
                const maybeTrueSuperparticular: Maybe<number> = computeMaybeTrueSuperparticular({
                    num,
                    superparticularDiv,
                    superparticularMod: justSuperparticularMod,
                })

                if (!isUndefined(maybeTrueSuperparticular)) {
                    superparticulars.push(maybeTrueSuperparticular)
                }
            }
        })

        return as.Block(superparticulars)
    }

export {
    computeSuperparticularNumbers,
}
