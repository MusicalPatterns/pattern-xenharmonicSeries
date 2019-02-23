import {
    ADDITIVE_IDENTITY,
    from,
    MULTIPLICATIVE_IDENTITY,
    NumericOperation,
    product,
    sum,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, to } from '../../nominal'
import { SequenceType } from '../../spec'
import { replace } from './replace'
import { SequenceTypeParameters } from './types'

const getSequenceTypeParameters: (sequenceType: SequenceType) => SequenceTypeParameters =
    (sequenceType: SequenceType): SequenceTypeParameters => {
        let partialSeed: PartialSumOrProduct
        let operation: NumericOperation
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
    getSequenceTypeParameters,
}
