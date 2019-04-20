// tslint:disable no-magic-numbers max-file-line-count

import {
    apply,
    Cardinal,
    DECREMENT,
    Denominator,
    EIGHTH,
    EVERY_OTHER,
    FOURTH,
    Frequency,
    from, Logarithm,
    negative,
    OCTAVE,
    ONE_HALF,
    Ordinal,
    PREVIOUS,
    Scalar,
    THIRD,
    to,
    Translation,
    TRITAVE,
    windowIterationHarmonicStepCount,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominals'
import { Particulate } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec } from '../types'

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Logarithm<Frequency>(apply.Translation(
        apply.Exponent(
            TRITAVE,
            to.Exponent<Logarithm<Frequency>>(from.Ordinal(apply.Translation(
                THIRD,
                DECREMENT,
            ))),
        ),
        to.Translation<Logarithm<Frequency>>(negative(from.Multiple<Ordinal>(EVERY_OTHER))),
    )))
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> = apply.Scalar(
    to.Ordinal<PartialSumOrProduct>(from.Cardinal(windowIterationHarmonicStepCount(TRITAVE, THIRD))),
    ONE_HALF,
)
const THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT: Scalar<Term> = to.Scalar<Term>(2)
const XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT: Cardinal = to.Cardinal(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Logarithm<Frequency>(apply.Translation(
        apply.Exponent(
            OCTAVE,
            to.Exponent<Logarithm<Frequency>>(from.Ordinal(apply.Translation(
                FOURTH,
                PREVIOUS,
            ))),
        ),
        to.Translation<Logarithm<Frequency>>(from.Scalar<Term>(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const FOURTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> = to.Ordinal<PartialSumOrProduct>(from.Cardinal(
    windowIterationHarmonicStepCount(OCTAVE, FOURTH),
))
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Logarithm<Frequency>(apply.Translation(
        apply.Exponent(
            OCTAVE,
            to.Exponent<Logarithm<Frequency>>(from.Ordinal(apply.Translation(
                EIGHTH,
                PREVIOUS,
            ))),
        ),
        to.Translation<Logarithm<Frequency>>(from.Scalar<Term>(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> = to.Ordinal<PartialSumOrProduct>(from.Cardinal(
    windowIterationHarmonicStepCount(OCTAVE, EIGHTH),
))
const DUPER_OR_DUB_PARTICULATE: Particulate = to.Translation<Ordinal<PartialSumOrProduct>>(2)

const INDEX_FOR_THIRDS: Ordinal = to.Ordinal(2)
const INDEX_FOR_FOURTHS: Ordinal = to.Ordinal(3)
const INDEX_FOR_FIFTHS: Ordinal = to.Ordinal(4)

const FIVE_DENOMINATOR: Denominator = to.Denominator(5)
const FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Fraction([
        to.Numerator(from.Denominator(apply.Translation(
            FIVE_DENOMINATOR,
            to.Translation<Denominator>(negative(1)),
        ))),
        FIVE_DENOMINATOR,
    ]))

const SEVEN_DENOMINATOR: Denominator = to.Denominator(7)
const SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Fraction([
        to.Numerator(from.Denominator(apply.Translation(
            SEVEN_DENOMINATOR,
            to.Translation<Denominator>(negative(1)),
        ))),
        SEVEN_DENOMINATOR,
    ]))

const TWELVE_DENOMINATOR: Denominator = to.Denominator(12)
const TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation<PartialSumOrProduct>(from.Fraction([
        to.Numerator(from.Denominator(apply.Translation(
            TWELVE_DENOMINATOR,
            to.Translation<Denominator>(negative(1)),
        ))),
        TWELVE_DENOMINATOR,
    ]))

export {
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT,
    XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
    DUPER_OR_DUB_PARTICULATE,
    INDEX_FOR_FIFTHS,
    INDEX_FOR_FOURTHS,
    INDEX_FOR_THIRDS,
    FIVE_DENOMINATOR,
    FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    SEVEN_DENOMINATOR,
    SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    TWELVE_DENOMINATOR,
    TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
}
