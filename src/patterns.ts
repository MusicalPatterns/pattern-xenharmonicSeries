import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: 'the matharmonic series and edharmonic series',
    formattedName: 'Xenharmonic Series',
    musicalIdeaIllustrated: 'pitch series inspired by the harmonic series',
}

const spec: PatternSpec = {}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.XENHARMONIC_SERIES,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
