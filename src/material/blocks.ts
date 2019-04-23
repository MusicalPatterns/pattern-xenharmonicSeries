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
import { Stack } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBoundedIntegers, computeNoteCount, XenharmonicSequence } from './custom'

const computeBlock: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal<Stack[]>) => Block =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal<Stack[]> = INITIAL): Block => {
        const boundedIntegers: Integer[] = computeBoundedIntegers(
            INITIAL,
            insteadOf<Ordinal, XenharmonicSequence>(finalIndexFromElementsTotal(computeNoteCount(specs))),
        )

        return as.Block(boundedIntegers
            .map(
                (integer: Integer) =>
                    use.Cardinal(integer, as.Cardinal(as.Integer(notAs.Ordinal(stackIndex)))),
            ),
        )
    }

export {
    computeBlock,
}
