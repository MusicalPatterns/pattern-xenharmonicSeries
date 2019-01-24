import { Block, from, INITIAL, to } from '@musical-patterns/utilities'
import { buildBoundedNumbers } from '../custom'
import { XenharmonicSeriesSpec } from '../specs'

const buildBlock: (spec: XenharmonicSeriesSpec) => Block =
    ({ lowerBound, upperBound, iterations }: XenharmonicSeriesSpec): Block => {
        const totalNotesPerIteration: number = from.Index(upperBound) - from.Index(lowerBound)

        const numbers: number[] = buildBoundedNumbers(
            INITIAL,
            to.Index((totalNotesPerIteration + 1) * from.Count(iterations) - 1),
        )

        return to.Block(
            numbers,
        )
    }

export {
    buildBlock,
}
