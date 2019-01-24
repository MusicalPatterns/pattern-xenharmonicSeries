import { Block, from, INITIAL, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildBlock: (spec: XenharmonicSeriesSpec) => Block =
    (spec: XenharmonicSeriesSpec): Block =>
        to.Block(buildBoundedNumbers(INITIAL, to.Index(from.Time(duration(spec)) - 1)))

export {
    buildBlock,
}
