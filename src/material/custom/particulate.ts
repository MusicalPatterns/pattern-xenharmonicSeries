import {
    apply,
    INCLUSIVE,
    indexOfFinalElement,
    INITIAL,
    map,
    negative,
    Ordinal,
    reciprocal,
    Scalar,
    slice,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../../nominals'
import { XenharmonicSequence } from './types'

const applyParticulate: (sequence: XenharmonicSequence, particulate: Translation) => XenharmonicSequence =
    (sequence: XenharmonicSequence, particulate: Translation): XenharmonicSequence => {
        const trimBackOffTheExtraTermsWeNeededToApplyParticulate: XenharmonicSequence =
            slice(
                sequence,
                INITIAL,
                apply.Translation(
                    apply.Translation(
                        indexOfFinalElement(sequence), negative(particulate),
                    ),
                    INCLUSIVE,
                ),
            )

        return map(
            trimBackOffTheExtraTermsWeNeededToApplyParticulate,
            (partial: PartialSumOrProduct, index: Ordinal): PartialSumOrProduct => {
                const particulateIndex: Ordinal = apply.Translation(index, particulate)
                const particulatePartial: PartialSumOrProduct = apply.Ordinal(sequence, particulateIndex)
                const particulateScalar: Scalar = to.Scalar(xenharmonicSeriesFrom.PartialSumOrProduct(reciprocal(
                    particulatePartial,
                )))

                return apply.Scalar(partial, particulateScalar)
            },
        )
    }

export {
    applyParticulate,
}
