import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, PatternFor, PatternId, Patterns } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData, XenharmonicSeriesPatternSpec } from './specs'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Xenharmonic Series',
    mostRecentPublish: process.env.PUBLISH_DATE || '2016-09-20T07:00:00.000Z',
    musicalIdeaIllustrated: 'pitch series inspired by the harmonic series',
    originalPublish: '2016-09-20T07:00:00.000Z',
}

const pattern: PatternFor<XenharmonicSeriesPatternSpec> = {
    material,
    metadata,
    patternId: PatternId.XENHARMONIC_SERIES,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
