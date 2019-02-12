import { apply, Block, difference, EXCLUSIVE, from, INITIAL, Integer, Ordinal, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, noteCount } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Block =>
        to.Block(buildBoundedNumbers(INITIAL, to.Ordinal(from.Cardinal(apply.Translation(noteCount(spec), EXCLUSIVE))))
            .map((integer: Integer) => apply.Translation(integer, to.Translation(from.Ordinal(stackIndex)))))

export {
    buildBlock,
}
