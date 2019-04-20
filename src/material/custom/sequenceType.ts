import {
    ADDITIVE_IDENTITY,
    from,
    MULTIPLICATIVE_IDENTITY,
    product,
    sum,
    TwoToOneNumericOperation,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, to } from '../../nominals'
import { SequenceType } from '../../types'
import { replace } from './replace'
import { SequenceTypeParameters } from './types'

const computeSequenceTypeParameters: (sequenceType: SequenceType) => {
    operation: TwoToOneNumericOperation,
    partialSeed: PartialSumOrProduct,
} =
    (sequenceType: SequenceType): SequenceTypeParameters => {
        let partialSeed: PartialSumOrProduct
        let operation: TwoToOneNumericOperation
        switch (sequenceType) {
            case SequenceType.PARTIAL_SUM: {
                partialSeed = to.PartialSumOrProduct(from.Translation(ADDITIVE_IDENTITY))
                operation = sum
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                partialSeed = to.PartialSumOrProduct(from.Scalar(MULTIPLICATIVE_IDENTITY))
                operation = product
                break
            }
            case SequenceType.SEQUENCE: {
                partialSeed = to.PartialSumOrProduct(0)
                operation = replace
                break
            }
            default:
                throw new Error('Unknown sequence type.')
        }

        return { partialSeed, operation }
    }

export {
    computeSequenceTypeParameters,
}
