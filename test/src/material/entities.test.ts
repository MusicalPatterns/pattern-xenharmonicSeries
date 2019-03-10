import { buildEntities, initial, XenharmonicSeriesProperty, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('entities', () => {
    it('when hold root is true, includes the root entity', () => {

        expect(buildEntities(initial).length)
            .toBe(2)
    })

    it('when hold root is false, excludes the root entity', () => {
        const spec: XenharmonicSeriesSpec = {
            ...initial,
            [ XenharmonicSeriesProperty.HOLD_ROOT ]: false,
        }

        expect(buildEntities(spec).length)
            .toBe(1)
    })
})
