import { as } from '@musical-patterns/utilities'
import { computeBlock, spec, XenharmonicSequence, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('blocks', () => {
    it('starting with 0, counts up the range between the lower and upper bounds, inclusively', () => {
        const specs: XenharmonicSeriesSpecs = {
            ...spec.initialSpecs,
            lowerBound: as.Ordinal<XenharmonicSequence>(3),
            upperBound: as.Ordinal<XenharmonicSequence>(5),
        }

        expect(computeBlock(specs))
            .toEqual([
                0,
                1,
                2,
            ])
    })

    it('expands when there are multiple iterations', () => {
        const specs: XenharmonicSeriesSpecs = {
            ...spec.initialSpecs,
            iterations: as.Cardinal<XenharmonicSequence[]>(5),
            lowerBound: as.Ordinal<XenharmonicSequence>(3),
            upperBound: as.Ordinal<XenharmonicSequence>(5),
        }

        expect(computeBlock(specs))
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
