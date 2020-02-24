import { Entity, MaterializeEntities, Note, Segment, TimbreNameEnum } from '@musical-patterns/material'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeRootNotes } from './notes'
import { computeSegment } from './segments'

const materializeEntities: MaterializeEntities =
    (specs: XenharmonicSeriesSpecs): Entity[] => {
        const entities: Entity[] = []

        const segment: Segment = computeSegment(specs)
        segment.forEach((notes: Note[]): void => {
            entities.push({
                sections: [ { notes } ],
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            })
        })

        if (specs.holdRoot) {
            entities.push({
                sections: [ { notes: computeRootNotes(specs) } ],
                timbreName: TimbreNameEnum.CHORUS_STRINGS,
            })
        }

        return entities
    }

export {
    materializeEntities,
}
