import {
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
    ToggledSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Count, Index, Power, Scalar } from '@musical-patterns/utilities'

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
}

interface XenharmonicSeriesSpec extends StandardSpec {
    base: Base,
    constant: number,
    ground: boolean,
    iterations: Count,
    lowerBound: Index,
    power: Power,
    sequenceType: SequenceType,
    termCoefficient: Scalar,
    upperBound: Index,
    useBase: boolean,
}

interface XenharmonicSeriesSpecAttributes extends StandardSpecAttributes {
    base: RangedSpecPropertyAttributes,
    constant: RangedSpecPropertyAttributes,
    ground: ToggledSpecPropertyAttributes,
    iterations: RangedSpecPropertyAttributes,
    lowerBound: RangedSpecPropertyAttributes,
    power: RangedSpecPropertyAttributes,
    sequenceType: OptionedSpecPropertyAttributes,
    termCoefficient: RangedSpecPropertyAttributes,
    upperBound: RangedSpecPropertyAttributes,
    useBase: ToggledSpecPropertyAttributes,
}

export {
    SequenceType,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecAttributes,
}
