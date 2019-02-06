import { apply, reciprocal, to, Translation } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, to as xenharmonicSeriesTo } from '../nominal'
import { XenharmonicSequence } from './types'

const applyParticulate: (sequence: XenharmonicSequence, particulate: Translation) => XenharmonicSequence =
    (sequence: XenharmonicSequence, particulate: Translation): XenharmonicSequence =>
        sequence.map((partial: PartialSumOrProduct, index: number): PartialSumOrProduct =>
            xenharmonicSeriesTo.PartialSumOrProduct(
                apply.Scalar(
                    xenharmonicSeriesFrom.PartialSumOrProduct(partial),
                    to.Scalar(
                        reciprocal(
                            xenharmonicSeriesFrom.PartialSumOrProduct(
                                apply.Ordinal(
                                    sequence,
                                    apply.Translation(
                                        to.Ordinal(index),
                                        particulate,
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        )

export {
    applyParticulate,
}
