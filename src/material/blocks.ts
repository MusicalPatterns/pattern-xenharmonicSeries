import { as, Block, INITIAL, Integer, Ordinal, range, use } from '@musical-patterns/utilities'
import { Stack, XenharmonicSequence } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeFinalNoteIndex } from './custom'

const computeBlock: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal<Stack[]>) => Block =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal<Stack[]> = INITIAL): Block => {
        const end: Ordinal<XenharmonicSequence> = computeFinalNoteIndex(specs)
        const boundedIntegers: Integer[] = range(INITIAL, end)

        return as.Block(
            boundedIntegers
                .map(
                    (integer: Integer): Integer =>
                        use.Cardinal(integer, as.Cardinal<Integer>(as.number(stackIndex))),
                ),
        )
    }

export {
    computeBlock,
}
