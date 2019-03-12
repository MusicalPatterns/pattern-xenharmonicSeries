import { initial, materializeEntities, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('entities', () => {
    it('when hold root is true, includes the root entity', () => {

        expect(materializeEntities(initial).length)
            .toBe(2)
    })

    it('when hold root is false, excludes the root entity', () => {
        const specs: XenharmonicSeriesSpecs = {
            ...initial,
            [ XenharmonicSeriesSpec.HOLD_ROOT ]: false,
        }

        expect(materializeEntities(specs).length)
            .toBe(1)
    })
})
