import { Ordinal, Translation } from '@musical-patterns/utilities'
import { PartialSumOrProduct } from './nominals'

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
    SEQUENCE = 'sequence',
}

type Particulate = Translation<Ordinal<PartialSumOrProduct>>

export {
    SequenceType,
    Particulate,
}
