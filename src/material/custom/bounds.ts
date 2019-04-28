import { INCLUSIVE, Integer, Ordinal, range, use } from '@musical-patterns/utilities'
import { XenharmonicSequence } from './types'

const computeBoundedIntegers:
    (lowerBound: Ordinal<XenharmonicSequence>, upperBound: Ordinal<XenharmonicSequence>) => Integer[] =
    (lowerBound: Ordinal<XenharmonicSequence>, upperBound: Ordinal<XenharmonicSequence>): Integer[] =>
        range(
            lowerBound,
            use.Cardinal(upperBound, INCLUSIVE),
        )

export {
    computeBoundedIntegers,
}
