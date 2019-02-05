import { apply, Block, from, Index, INITIAL, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Index) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Index = to.Index(0)): Block =>
        to.Block(buildBoundedNumbers(INITIAL, to.Index(from.Time(duration(spec)) - 1))
            .map((blockElement: number) => apply.Offset(blockElement, to.Offset(from.Index(stackIndex)))))

export {
    buildBlock,
}
