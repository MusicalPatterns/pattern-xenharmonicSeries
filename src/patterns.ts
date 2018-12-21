import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata, PatternSpec } from '@musical-patterns/pattern'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: 'the matharmonic series and edharmonic series',
    formattedName: 'Xenharmonic Series',
    musicalIdeaIllustrated: 'pitch series inspired by the harmonic series',
}

const spec: PatternSpec = {
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.XENHARMONIC_SERIES,
    spec,
}

export {
    pattern,
}
