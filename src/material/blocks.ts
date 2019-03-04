import { apply, Block, EXCLUSIVE, from, INITIAL, Integer, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBoundedIntegers, calculateNoteCount } from './custom'

const buildBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Block => {
        const boundedIntegers: Integer[] = buildBoundedIntegers(
            INITIAL,
            to.Ordinal(from.Cardinal(apply.Translation(
                calculateNoteCount(spec),
                EXCLUSIVE,
            ))),
        )

        return to.Block(boundedIntegers
            .map((integer: Integer) => apply.Translation(integer, to.Translation(from.Ordinal(stackIndex)))))
    }

export {
    buildBlock,
}
