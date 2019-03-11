// tslint:disable no-reaching-imports

export {
    computeScalars,
    computeSegment,
    computeBlock,
    computeScaleNotes,
    computeRootNotes,
    materializeScales,
    materializeEntities,
} from './material/indexForTest'
export {
    data,
    XenharmonicSeriesSpec,
    SequenceType,
    XenharmonicSeriesPreset,
    XenharmonicSeriesProperty,
    initial,
} from './spec/indexForTest'

export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
