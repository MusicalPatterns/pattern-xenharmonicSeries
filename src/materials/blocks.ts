import { Block, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, ground } from '../custom'
import { XenharmonicSeriesSpec } from '../specs'

const buildBlock: (spec: XenharmonicSeriesSpec) => Block =
    ({ lowerBound, upperBound }: XenharmonicSeriesSpec): Block =>
        to.Block(ground(buildBoundedNumbers(lowerBound, upperBound)))

export {
    buildBlock,
}
