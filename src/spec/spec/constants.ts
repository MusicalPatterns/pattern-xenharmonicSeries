// tslint:disable no-magic-numbers max-file-line-count

import {
    as,
    Cardinal,
    DECREMENT,
    Denominator,
    EIGHTH,
    EVERY_OTHER,
    FOURTH,
    Frequency,
    Logarithm,
    negative,
    notAs,
    OCTAVE,
    ONE_HALF,
    Ordinal,
    PREVIOUS,
    Scalar,
    THIRD,
    Translation,
    TRITAVE,
    use,
    windowIterationHarmonicStepCount,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominals'
import { Particulate } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec } from '../types'

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Logarithm<Frequency>(use.Translation(
        use.Exponent(
            TRITAVE,
            as.Exponent<Logarithm<Frequency>>(notAs.Ordinal(use.Translation(
                THIRD,
                DECREMENT,
            ))),
        ),
        as.Translation<Logarithm<Frequency>>(negative(notAs.Multiple<Ordinal>(EVERY_OTHER))),
    )))
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> = use.Scalar(
    as.Ordinal<PartialSumOrProduct>(notAs.Cardinal(windowIterationHarmonicStepCount(TRITAVE, THIRD))),
    ONE_HALF,
)
const THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT: Scalar<Term> = as.Scalar<Term>(2)
const XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT: Cardinal = as.Cardinal(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Logarithm<Frequency>(use.Translation(
        use.Exponent(
            OCTAVE,
            as.Exponent<Logarithm<Frequency>>(notAs.Ordinal(use.Translation(
                FOURTH,
                PREVIOUS,
            ))),
        ),
        as.Translation<Logarithm<Frequency>>(notAs.Scalar<Term>(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const FOURTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> =
    as.Ordinal<PartialSumOrProduct>(notAs.Cardinal(
        windowIterationHarmonicStepCount(OCTAVE, FOURTH),
    ))
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Logarithm<Frequency>(use.Translation(
        use.Exponent(
            OCTAVE,
            as.Exponent<Logarithm<Frequency>>(notAs.Ordinal(use.Translation(
                EIGHTH,
                PREVIOUS,
            ))),
        ),
        as.Translation<Logarithm<Frequency>>(notAs.Scalar<Term>(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<PartialSumOrProduct> =
    as.Ordinal<PartialSumOrProduct>(notAs.Cardinal(
        windowIterationHarmonicStepCount(OCTAVE, EIGHTH),
    ))
const DUPER_OR_DUB_PARTICULATE: Particulate = as.Translation<Ordinal<PartialSumOrProduct>>(2)

const INDEX_FOR_THIRDS: Ordinal = as.Ordinal(2)
const INDEX_FOR_FOURTHS: Ordinal = as.Ordinal(3)
const INDEX_FOR_FIFTHS: Ordinal = as.Ordinal(4)

const FIVE_DENOMINATOR: Denominator = as.Denominator(5)
const FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Fraction([
        as.Numerator(notAs.Denominator(use.Translation(
            FIVE_DENOMINATOR,
            as.Translation<Denominator>(negative(1)),
        ))),
        FIVE_DENOMINATOR,
    ]))

const SEVEN_DENOMINATOR: Denominator = as.Denominator(7)
const SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Fraction([
        as.Numerator(notAs.Denominator(use.Translation(
            SEVEN_DENOMINATOR,
            as.Translation<Denominator>(negative(1)),
        ))),
        SEVEN_DENOMINATOR,
    ]))

const TWELVE_DENOMINATOR: Denominator = as.Denominator(12)
const TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(notAs.Fraction([
        as.Numerator(notAs.Denominator(use.Translation(
            TWELVE_DENOMINATOR,
            as.Translation<Denominator>(negative(1)),
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
