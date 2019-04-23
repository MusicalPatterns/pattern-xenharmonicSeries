import { Cardinal, Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSequence } from './material'

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
    SEQUENCE = 'sequence',
}

type Particulate = Cardinal<Ordinal<XenharmonicSequence>>

export {
    SequenceType,
    Particulate,
}
