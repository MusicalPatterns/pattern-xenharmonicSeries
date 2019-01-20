import { Material } from '@musical-patterns/compiler'
import { Metadata } from '@musical-patterns/pattern'
import { buildPatterns, Id, PatternFor, Patterns } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData, XenharmonicSeriesSpec } from './specs'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Xenharmonic Series',
    mostRecentPublish: process.env.PUBLISH_DATE || '2016-09-20T07:00:00.000Z',
    musicalIdeaIllustrated: 'pitch series inspired by the harmonic series',
    originalPublish: '2016-09-20T07:00:00.000Z',
}

const pattern: PatternFor<XenharmonicSeriesSpec> = {
    id: Id.XENHARMONIC_SERIES,
    material,
    metadata,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.id ]: pattern,
})

export {
    pattern,
    patterns,
}
