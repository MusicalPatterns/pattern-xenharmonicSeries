import {
    as,
    Cardinal,
    INCLUSIVE,
    indexOfFinalElement,
    INITIAL,
    insteadOf,
    map,
    negative,
    ofNotAs,
    Ordinal,
    reciprocal,
    Scalar,
    slice,
    use,
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
                use.Cardinal(
                    use.Cardinal(
                        indexOfFinalElement(sequence), negative(particulate),
                    ),
                    insteadOf<Cardinal, Ordinal<XenharmonicSequence>>(INCLUSIVE),
                ),
            )

        return map(
            trimBackOffTheExtraTermsWeNeededToApplyParticulate,
            (partial: PartialSumOrProduct, index: Ordinal<XenharmonicSequence>): PartialSumOrProduct => {
                const particulateIndex: Ordinal<XenharmonicSequence> = use.Cardinal(index, particulate)
                const particulatePartial: PartialSumOrProduct = use.Ordinal(
                    sequence,
                    particulateIndex,
                )
                const particulateScalar: Scalar<PartialSumOrProduct> = as.Scalar(ofNotAs(reciprocal(
                    particulatePartial,
                )))

                return use.Scalar(partial, particulateScalar)
            },
        )
    }

export {
    applyParticulate,
}
