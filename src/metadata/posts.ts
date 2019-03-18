import { Maybe } from '@musical-patterns/utilities'

const env: Maybe<string> = process.env.NODE_ENV

// tslint:disable-next-line
const post: string = env !== 'test' && env != 'snapshot' ? require('./post.html') : ''

export {
    post,
}
