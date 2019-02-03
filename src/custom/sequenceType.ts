import {
    add,
    ADDITIVE_IDENTITY,
    from,
    MULTIPLICATIVE_IDENTITY,
    multiply,
    NumericOperation,
} from '@musical-patterns/utilities'
import { SequenceType } from '../spec'
import { replace } from './replace'
import { SequenceTypeParameters } from './types'

const getSequenceTypeParameters: (sequenceType: SequenceType) => SequenceTypeParameters =
    (sequenceType: SequenceType): SequenceTypeParameters => {
        let initialPartial: number
        let operation: NumericOperation
        switch (sequenceType) {
            case SequenceType.PARTIAL_SUM: {
                initialPartial = from.Offset(ADDITIVE_IDENTITY)
                operation = add
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                initialPartial = from.Scalar(MULTIPLICATIVE_IDENTITY)
                operation = multiply
                break
            }
            case SequenceType.SEQUENCE: {
                initialPartial = 0
                operation = replace
                break
            }
            default:
                throw new Error('Unknown sequence type.')
        }

        return { initialPartial, operation }
    }

export {
    getSequenceTypeParameters,
}
