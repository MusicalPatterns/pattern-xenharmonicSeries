import { apply, Block, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = to.Ordinal(0)): Block =>
        to.Block(buildBoundedNumbers(INITIAL, to.Ordinal(from.Time(duration(spec)) - 1))
            .map((blockElement: number) => apply.Translation(blockElement, to.Translation(from.Ordinal(stackIndex)))))

export {
    buildBlock,
}
