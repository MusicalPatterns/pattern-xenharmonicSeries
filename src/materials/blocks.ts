import { Block, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers } from '../custom'
import { XenharmonicSeriesPatternSpec } from '../specs'

const buildBlock: (spec: XenharmonicSeriesPatternSpec) => Block =
    ({ lowerBound, upperBound }: XenharmonicSeriesPatternSpec): Block =>
        to.Block(buildBoundedNumbers(lowerBound, upperBound))

export {
    buildBlock,
}
