import {
    apply,
    INCLUSIVE,
    indexOfFinalElement,
    INITIAL,
    insteadOf,
    map,
    negative,
    ofFrom,
    Ordinal,
    reciprocal,
    Scalar,
    slice,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct } from '../../nominals'
import { Particulate } from '../../types'
import { XenharmonicSequence } from './types'

const applyParticulate: (sequence: XenharmonicSequence, particulate: Particulate) => XenharmonicSequence =
    (sequence: XenharmonicSequence, particulate: Particulate): XenharmonicSequence => {
        const trimBackOffTheExtraTermsWeNeededToApplyParticulate: XenharmonicSequence =
            slice(
                sequence,
                INITIAL,
                apply.Translation(
                    apply.Translation(
                        indexOfFinalElement(sequence), negative(particulate),
                    ),
                    insteadOf<Translation, Ordinal<PartialSumOrProduct>>(INCLUSIVE),
                ),
            )

        return map(
            trimBackOffTheExtraTermsWeNeededToApplyParticulate,
            (partial: PartialSumOrProduct, index: Ordinal<PartialSumOrProduct>): PartialSumOrProduct => {
                const particulateIndex: Ordinal<PartialSumOrProduct> = apply.Translation(index, particulate)
                const particulatePartial: PartialSumOrProduct = apply.Ordinal(
                    sequence,
                    particulateIndex,
                )
                const particulateScalar: Scalar<PartialSumOrProduct> = to.Scalar(ofFrom(reciprocal(
                    particulatePartial,
                )))

                return apply.Scalar(partial, particulateScalar)
            },
        )
    }

export {
    applyParticulate,
}
