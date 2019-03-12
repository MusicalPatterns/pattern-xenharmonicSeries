import { Metadata } from '@musical-patterns/pattern'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Xenharmonic Series',
    mostRecentPublish: process.env.PUBLISH_DATE || '2016-09-20T07:00:00.000Z',
    musicalIdeaIllustrated: 'pitch series inspired by the harmonic series',
    originalPublish: '2016-09-20T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
