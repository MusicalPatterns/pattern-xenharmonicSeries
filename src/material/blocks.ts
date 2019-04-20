import {
    as,
    Block,
    finalIndexFromElementsTotal,
    INITIAL,
    insteadOf,
    Integer,
    notAs,
    Ordinal,
    use,
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

        return as.Block(boundedIntegers
            .map(
                (integer: Integer) =>
                    use.Translation(integer, as.Translation(as.Integer(notAs.Ordinal(stackIndex)))),
            ),
        )
    }

export {
    computeBlock,
}
