import { to } from '@musical-patterns/utilities'
import { buildBlock, specData, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('blocks', () => {
    it('starting with 0, counts up the range between the lower and upper bounds, inclusively', () => {
        const spec: XenharmonicSeriesSpec = {
            ...specData.initial,
            lowerBound: to.Ordinal(3),
            upperBound: to.Ordinal(5),
        }

        expect(buildBlock(spec))
            .toEqual([
                0,
                1,
                2,
            ])
    })

    it('expands when there are multiple iterations', () => {
        const spec: XenharmonicSeriesSpec = {
            ...specData.initial,
            iterations: to.Cardinal(5),
            lowerBound: to.Ordinal(3),
            upperBound: to.Ordinal(5),
        }

        expect(buildBlock(spec))
            .toEqual([
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
            ])
    })
})
