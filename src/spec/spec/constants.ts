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
    negative,
    OCTAVE,
    ONE_HALF,
    Ordinal,
    periodIterationHarmonicStepCount,
    pow,
    PREVIOUS,
    Scalar,
    THIRD,
    Translation,
    TRITAVE,
    use,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../../material'
import { PartialSumOrProduct, Stack, Term } from '../../nominals'
import { Particulate } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec } from '../types'

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number(use.Translation(
        pow(
            TRITAVE,
            as.Exponent<Frequency>(as.number(use.Cardinal(
                THIRD,
                DECREMENT,
            ))),
        ),
        as.Translation<Frequency>(negative(as.number(EVERY_OTHER))),
    )))
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Ordinal<XenharmonicSequence> =
    as.Ordinal<XenharmonicSequence>(use.Scalar(
        as.number(periodIterationHarmonicStepCount(TRITAVE, THIRD)),
        ONE_HALF,
    ))
const THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT: Scalar<Term> = as.Scalar<Term>(2)
const XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT: Cardinal<XenharmonicSequence[]> =
    as.Cardinal<XenharmonicSequence[]>(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number(use.Translation(
        pow(
            OCTAVE,
            as.Exponent<Frequency>(as.number(use.Cardinal(
                FOURTH,
                PREVIOUS,
            ))),
        ),
        as.Translation<Frequency>(as.number(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const FOURTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<XenharmonicSequence> =
    as.Ordinal<XenharmonicSequence>(as.number(
        periodIterationHarmonicStepCount(OCTAVE, FOURTH),
    ))
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number(use.Translation(
        pow(
            OCTAVE,
            as.Exponent<Frequency>(as.number(use.Cardinal(
                EIGHTH,
                PREVIOUS,
            ))),
        ),
        as.Translation<Frequency>(as.number(
            negative(initialSpecs[ XenharmonicSeriesSpec.TERM_COEFFICIENT ]),
        )),
    )))

const EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal<XenharmonicSequence> =
    as.Ordinal<XenharmonicSequence>(as.number(
        periodIterationHarmonicStepCount(OCTAVE, EIGHTH),
    ))
const DUPER_OR_DUB_PARTICULATE: Particulate = as.Transition<XenharmonicSequence>(2)

const INDEX_FOR_THIRDS: Ordinal<Stack[]> = as.Ordinal<Stack[]>(2)
const INDEX_FOR_FOURTHS: Ordinal<Stack[]> = as.Ordinal<Stack[]>(3)
const INDEX_FOR_FIFTHS: Ordinal<Stack[]> = as.Ordinal<Stack[]>(4)

const FIVE_DENOMINATOR: Denominator = as.Denominator(5)
const FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number([
        as.Numerator(as.number(use.Cardinal(
            FIVE_DENOMINATOR,
            as.Cardinal<Denominator>(negative(1)),
        ))),
        FIVE_DENOMINATOR,
    ]))

const SEVEN_DENOMINATOR: Denominator = as.Denominator(7)
const SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number([
        as.Numerator(as.number(use.Cardinal(
            SEVEN_DENOMINATOR,
            as.Cardinal<Denominator>(negative(1)),
        ))),
        SEVEN_DENOMINATOR,
    ]))

const TWELVE_DENOMINATOR: Denominator = as.Denominator(12)
const TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation<PartialSumOrProduct>(as.number([
        as.Numerator(as.number(use.Cardinal(
            TWELVE_DENOMINATOR,
            as.Cardinal<Denominator>(negative(1)),
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
