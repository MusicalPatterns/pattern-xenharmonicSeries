import {
    OptionedPatternSpecPropertyAttributes,
    PatternSpec,
    PatternSpecAttributes,
    RangedPatternSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Index } from '@musical-patterns/utilities'

enum XenharmonicSeriesOperation {
    SEQUENCE = 'SEQUENCE',
    SERIES = 'SERIES',
    PRODUCT_OF_POWERS = 'PRODUCT_OF_POWERS',
}

interface XenharmonicSeriesPatternSpec extends PatternSpec {
    base: Base,
    lowerBound: Index,
    operation: XenharmonicSeriesOperation,
    upperBound: Index,
}

interface XenharmonicSeriesPatternSpecAttributes extends PatternSpecAttributes {
    base: RangedPatternSpecPropertyAttributes,
    lowerBound: RangedPatternSpecPropertyAttributes,
    operation: OptionedPatternSpecPropertyAttributes,
    upperBound: RangedPatternSpecPropertyAttributes,
}

export {
    XenharmonicSeriesOperation,
    XenharmonicSeriesPatternSpec,
    XenharmonicSeriesPatternSpecAttributes,
}
