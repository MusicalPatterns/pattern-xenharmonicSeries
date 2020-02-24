import {
    initialSpecs,
    materializeEntities,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecs,
} from '../../../src/indexForTest'

describe('entities', (): void => {
    it('when hold root is true, includes the root entity', (): void => {
        expect(materializeEntities(initialSpecs).length)
            .toBe(2)
    })

    it('when hold root is false, excludes the root entity', (): void => {
        const specs: XenharmonicSeriesSpecs = {
            ...initialSpecs,
            [ XenharmonicSeriesSpec.HOLD_ROOT ]: false,
        }

        expect(materializeEntities(specs).length)
            .toBe(1)
    })
})
