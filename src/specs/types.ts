import {
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
    ToggledSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Index, Power } from '@musical-patterns/utilities'

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
}

interface XenharmonicSeriesSpec extends StandardSpec {
    base: Base,
    lowerBound: Index,
    power: Power,
    sequenceType: SequenceType,
    upperBound: Index,
    useBase: boolean,
}

interface XenharmonicSeriesSpecAttributes extends StandardSpecAttributes {
    base: RangedSpecPropertyAttributes,
    lowerBound: RangedSpecPropertyAttributes,
    power: RangedSpecPropertyAttributes,
    sequenceType: OptionedSpecPropertyAttributes,
    upperBound: RangedSpecPropertyAttributes,
    useBase: ToggledSpecPropertyAttributes,
}

export {
    SequenceType,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecAttributes,
}
