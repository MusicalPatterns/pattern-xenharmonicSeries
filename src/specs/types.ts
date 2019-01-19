import {
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
    ToggledPatternSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Index, Power } from '@musical-patterns/utilities'

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
}

interface XenharmonicSeriesPatternSpec extends StandardPatternSpec {
    base: Base,
    lowerBound: Index,
    power: Power,
    sequenceType: SequenceType,
    upperBound: Index,
    useBase: boolean,
}

interface XenharmonicSeriesPatternSpecAttributes extends StandardPatternSpecAttributes {
    base: RangedPatternSpecPropertyAttributes,
    lowerBound: RangedPatternSpecPropertyAttributes,
    power: RangedPatternSpecPropertyAttributes,
    sequenceType: OptionedPatternSpecPropertyAttributes,
    upperBound: RangedPatternSpecPropertyAttributes,
    useBase: ToggledPatternSpecPropertyAttributes,
}

export {
    SequenceType,
    XenharmonicSeriesPatternSpec,
    XenharmonicSeriesPatternSpecAttributes,
}
