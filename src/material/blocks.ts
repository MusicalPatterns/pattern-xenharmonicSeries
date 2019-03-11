import { apply, Block, EXCLUSIVE, from, INITIAL, Integer, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { computeBoundedIntegers, computeNoteCount } from './custom'

const computeBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Block => {
        const boundedIntegers: Integer[] = computeBoundedIntegers(
            INITIAL,
            to.Ordinal(from.Cardinal(apply.Translation(
                computeNoteCount(spec),
                EXCLUSIVE,
            ))),
        )

        return to.Block(boundedIntegers
            .map((integer: Integer) => apply.Translation(integer, to.Translation(from.Ordinal(stackIndex)))))
    }

export {
    computeBlock,
}
