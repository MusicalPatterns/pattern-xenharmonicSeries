import { apply, Block, difference, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers, duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildBlock: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Block =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Block =>
        to.Block(buildBoundedNumbers(INITIAL, to.Ordinal(difference(from.Time(duration(spec)), 1)))
            .map((cell: number) => apply.Translation(cell, to.Translation(from.Ordinal(stackIndex)))))

export {
    buildBlock,
}
