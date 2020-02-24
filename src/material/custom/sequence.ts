import {
    arraySet,
    as,
    filter,
    INITIAL,
    isUndefined,
    Ordinal,
    reciprocal,
    slice,
    use,
} from '@musical-patterns/utilities'
import { XenharmonicSequence, xenharmonicSeriesAs } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'
import { INCLUSIVE_SO_ITERATED_SEQUENCES_KNOW_THEIR_PERIOD } from './constants'
import { applyFunctionType } from './functionType'
import { numberSequenceToComputeNumbersMap } from './numbers'

const computeSequence: (specs: XenharmonicSeriesSpecs) => XenharmonicSequence =
    (specs: XenharmonicSeriesSpecs): XenharmonicSequence => {
        const {
            numberSequence,
            lowerBound,
            upperBound,
            functionType,
            exponentialBase,
            coefficient,
            reciprocate,
            initialValueOverride,
            logarithmicBase,
            sieve,
            power,
            superparticularDiv,
            superparticularMod,
        } = specs

        let sequence: number[] = slice(
            numberSequenceToComputeNumbersMap[ numberSequence ]({ superparticularDiv, superparticularMod, upperBound }),
            lowerBound,
            use.Transition(upperBound, INCLUSIVE_SO_ITERATED_SEQUENCES_KNOW_THEIR_PERIOD),
        )

        sequence = applyFunctionType({ functionType, exponentialBase, logarithmicBase, power, sequence })

        sequence = sequence.map((el: number): number => use.Scalar(el, as.Scalar(as.number(coefficient))))

        if (reciprocate) {
            sequence = sequence.map(reciprocal)
        }

        if (!isUndefined(initialValueOverride)) {
            arraySet(sequence, INITIAL, initialValueOverride)
        }

        if (!isUndefined(sieve)) {
            sequence = filter(
                sequence,
                (el: number, index: Ordinal): boolean => as.number(use.Remaindee(index, sieve)) === 0,
            )
        }

        return sequence.map(xenharmonicSeriesAs.XenharmonicSequenceElement)
    }

export {
    computeSequence,
}
