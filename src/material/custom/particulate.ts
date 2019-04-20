import {
    as,
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
    Translation,
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
                use.Translation(
                    use.Translation(
                        indexOfFinalElement(sequence), negative(particulate),
                    ),
                    insteadOf<Translation, Ordinal<PartialSumOrProduct>>(INCLUSIVE),
                ),
            )

        return map(
            trimBackOffTheExtraTermsWeNeededToApplyParticulate,
            (partial: PartialSumOrProduct, index: Ordinal<PartialSumOrProduct>): PartialSumOrProduct => {
                const particulateIndex: Ordinal<PartialSumOrProduct> = use.Translation(index, particulate)
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
