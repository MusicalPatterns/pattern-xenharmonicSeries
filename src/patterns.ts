import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { Pattern, PatternId } from '@musical-patterns/registry'

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
