import {
    INCLUSIVE,
    insteadOf,
    Integer,
    Ordinal,
    slice,
    use,
    ZERO_AND_POSITIVE_INTEGERS,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from './types'

const computeBoundedIntegers:
    (lowerBound: Ordinal<XenharmonicSequence>, upperBound: Ordinal<XenharmonicSequence>) => Integer[] =
    (lowerBound: Ordinal<XenharmonicSequence>, upperBound: Ordinal<XenharmonicSequence>): Integer[] =>
        slice(
            ZERO_AND_POSITIVE_INTEGERS,
            insteadOf<Ordinal, Integer[]>(lowerBound),
            insteadOf<Ordinal, Integer[]>(use.Cardinal(upperBound, INCLUSIVE)),
        )

export {
    computeBoundedIntegers,
}
