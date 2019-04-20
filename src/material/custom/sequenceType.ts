import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    notAs,
    product,
    sum,
    TwoToOneNumericOperation,
} from '@musical-patterns/utilities'
import { as, PartialSumOrProduct } from '../../nominals'
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
                partialSeed = as.PartialSumOrProduct(notAs.Translation(ADDITIVE_IDENTITY))
                operation = sum
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                partialSeed = as.PartialSumOrProduct(notAs.Scalar(MULTIPLICATIVE_IDENTITY))
                operation = product
                break
            }
            case SequenceType.SEQUENCE: {
                partialSeed = as.PartialSumOrProduct(0)
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
