import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './material'
import { post } from './metadata'
import { specData, XenharmonicSeriesSpec } from './spec'

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
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: Pattern<XenharmonicSeriesSpec> = {
    id: Id.XENHARMONIC_SERIES,
    material,
    metadata,
    specData,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
