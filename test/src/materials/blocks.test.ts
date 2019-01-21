import { to } from '@musical-patterns/utilities'
import { buildBlock, specData, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('blocks', () => {
    it('starting with 0, counts up the range between the lower and upper bounds, inclusively', () => {
        const spec: XenharmonicSeriesSpec = {
            ...specData.initial,
            lowerBound: to.Index(3),
            upperBound: to.Index(5),
        }

        expect(buildBlock(spec))
            .toEqual([
                0,
                1,
                2,
            ])
    })
})
