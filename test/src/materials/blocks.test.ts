import { to } from '@musical-patterns/utilities'
import { buildBlock, specData, XenharmonicSeriesPatternSpec } from '../../../src/indexForTest'

describe('blocks', () => {
    it('counts up from the lower bound to the upper bound', () => {
        const spec: XenharmonicSeriesPatternSpec = {
            ...specData.initial,
            lowerBound: to.Index(3),
            upperBound: to.Index(5),
        }

        expect(buildBlock(spec))
            .toEqual([
                3,
                4,
                5,
            ])
    })
})
