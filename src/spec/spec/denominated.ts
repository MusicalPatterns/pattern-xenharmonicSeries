import { from, to } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominals'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import {
    FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    FIVE_DENOMINATOR,
    SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    SEVEN_DENOMINATOR,
    TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    TWELVE_DENOMINATOR,
    XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
} from './constants'
import { standardHarmonicSeriesSpecs } from './standard'

const fiveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar<Term>(from.Fraction([
        to.Numerator(1),
        FIVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal<PartialSumOrProduct>(from.Denominator(FIVE_DENOMINATOR)),
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
}

const sevenDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar<Term>(from.Fraction([
        to.Numerator(1),
        SEVEN_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal<PartialSumOrProduct>(from.Denominator(SEVEN_DENOMINATOR)),
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
}

const twelveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar<Term>(from.Fraction([
        to.Numerator(1),
        TWELVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal<PartialSumOrProduct>(from.Denominator(TWELVE_DENOMINATOR)),
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
}

export {
    fiveDenominatedHarmonicSeries,
    sevenDenominatedHarmonicSeries,
    twelveDenominatedHarmonicSeries,
}
