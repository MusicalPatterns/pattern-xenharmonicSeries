import {
    apply,
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
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../nominal'
import { XenharmonicSequence } from './types'

const applyParticulate: (sequence: XenharmonicSequence, particulate: Translation) => XenharmonicSequence =
    (sequence: XenharmonicSequence, particulate: Translation): XenharmonicSequence => {
        const particulateSequence: XenharmonicSequence = map(
            sequence,
            (partial: PartialSumOrProduct, index: Ordinal): PartialSumOrProduct => {
                const particulateIndex: Ordinal = apply.Translation(index, particulate)
                const particulatePartial: PartialSumOrProduct = apply.Ordinal(sequence, particulateIndex)
                const particulateScalar: Scalar = to.Scalar(xenharmonicSeriesFrom.PartialSumOrProduct(reciprocal(
                    particulatePartial,
                )))

                return apply.Scalar(partial, particulateScalar)
            },
        )

        const trimBackOffTheExtraTermsWeNeededToApplyParticulate: Ordinal =
            apply.Translation(to.Ordinal(particulateSequence.length), negative(particulate))

        return slice(
            particulateSequence,
            INITIAL,
            trimBackOffTheExtraTermsWeNeededToApplyParticulate,
        )
    }

export {
    applyParticulate,
}
