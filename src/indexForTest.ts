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
    spec,
    XenharmonicSeriesSpecs,
    SequenceType,
    XenharmonicSeriesPreset,
    XenharmonicSeriesSpec,
    initial,
} from './spec/indexForTest'

export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
