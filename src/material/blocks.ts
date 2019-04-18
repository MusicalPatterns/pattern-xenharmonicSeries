import {
    apply,
    Block,
    finalIndexFromElementsTotal,
    from,
    INITIAL,
    insteadOf,
    Integer,
    Ordinal,
    to,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBoundedIntegers, computeNoteCount } from './custom'

const computeBlock: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal) => Block =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal = INITIAL): Block => {
        const boundedIntegers: Integer[] = computeBoundedIntegers(
            INITIAL,
            insteadOf<Ordinal, PartialSumOrProduct>(finalIndexFromElementsTotal(computeNoteCount(specs))),
        )

        return to.Block(boundedIntegers
            .map(
                (integer: Integer) =>
                    apply.Translation(integer, to.Translation(to.Integer(from.Ordinal(stackIndex)))),
            ),
        )
    }

export {
    computeBlock,
}
