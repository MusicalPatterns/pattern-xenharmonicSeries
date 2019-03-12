import { apply, Block, EXCLUSIVE, from, INITIAL, Integer, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBoundedIntegers, computeNoteCount } from './custom'

const computeBlock: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal) => Block =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal = INITIAL): Block => {
        const boundedIntegers: Integer[] = computeBoundedIntegers(
            INITIAL,
            to.Ordinal(from.Cardinal(apply.Translation(
                computeNoteCount(specs),
                EXCLUSIVE,
            ))),
        )

        return to.Block(boundedIntegers
            .map((integer: Integer) => apply.Translation(integer, to.Translation(from.Ordinal(stackIndex)))))
    }

export {
    computeBlock,
}
