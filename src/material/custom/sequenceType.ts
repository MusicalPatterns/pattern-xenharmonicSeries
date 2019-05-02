import {
    ADDITIVE_IDENTITY,
    as,
    MULTIPLICATIVE_IDENTITY,
    product,
    sum,
    TwoToOneNumericOperation,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, xenharmonicSeriesAs } from '../../nominals'
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
                partialSeed = xenharmonicSeriesAs.PartialSumOrProduct(as.number(ADDITIVE_IDENTITY))
                operation = sum
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                partialSeed = xenharmonicSeriesAs.PartialSumOrProduct(as.number(MULTIPLICATIVE_IDENTITY))
                operation = product
                break
            }
            case SequenceType.SEQUENCE: {
                partialSeed = xenharmonicSeriesAs.PartialSumOrProduct(0)
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
