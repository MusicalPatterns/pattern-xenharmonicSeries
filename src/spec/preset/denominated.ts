// tslint:disable no-magic-numbers

import {
    AnyArrayedOrStringType,
    as,
    asRational,
    FIFTH,
    OCTAVE,
    Ordinal,
    SEVENTH,
    TWELFTH,
    use,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../../nominals'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const fiveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: FIFTH,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]:
        use.Multiple(FIFTH, as.Multiple<Ordinal<AnyArrayedOrStringType>>(as.number(OCTAVE))),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 5),
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(3),
}

const sevenDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: SEVENTH,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]:
        use.Multiple(SEVENTH, as.Multiple<Ordinal<AnyArrayedOrStringType>>(as.number(OCTAVE))),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 7),
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(3),
}

const twelveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: TWELFTH,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]:
        use.Multiple(TWELFTH, as.Multiple<Ordinal<AnyArrayedOrStringType>>(as.number(OCTAVE))),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 12),
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(3),
}

export {
    fiveDenominatedHarmonicSeries,
    sevenDenominatedHarmonicSeries,
    twelveDenominatedHarmonicSeries,
}
