// tslint:disable no-magic-numbers

import { as, asRational, INITIAL, Ordinal } from '@musical-patterns/utilities'
import { Stack, XenharmonicSequence } from '../../nominals'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const thirdTritaveOddHarmonicsSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: as.Ordinal(9),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(27),
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(3),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(1, 9),
    [ XenharmonicSeriesSpec.SIEVE ]: as.Remaindee<Ordinal>(2),
}

const thirdTritaveOddHarmonicsWithStackedThirdsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, (as.Ordinal<Stack[]>(2)) ],
}

const thirdTritaveOddHarmonicsWithStackedFourthsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, (as.Ordinal<Stack[]>(3)) ],
}

const thirdTritaveOddHarmonicsWithStackedFifthsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, (as.Ordinal<Stack[]>(4)) ],
}

export {
    thirdTritaveOddHarmonicsSpecs,
    thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
}
