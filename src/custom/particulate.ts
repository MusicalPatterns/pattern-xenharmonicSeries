import { apply, inverse, Offset, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, to as xenharmonicSeriesTo } from '../nominal'
import { XenharmonicSequence } from './types'

const applyParticulate: (sequence: XenharmonicSequence, particulate: Offset) => XenharmonicSequence =
    (sequence: XenharmonicSequence, particulate: Offset): XenharmonicSequence =>
        sequence.map((partial: PartialSumOrProduct, index: number): PartialSumOrProduct =>
            xenharmonicSeriesTo.PartialSumOrProduct(
                apply.Scalar(
                    xenharmonicSeriesFrom.PartialSumOrProduct(partial),
                    to.Scalar(
                        inverse(
                            xenharmonicSeriesFrom.PartialSumOrProduct(
                                apply.Index(
                                    sequence,
                                    apply.Offset(
                                        to.Index(index),
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
