import set from '../src/set.js'
import assert from 'node:assert/strict'

const obj = {}

set(obj, 'key', 'value')
assert.deepEqual(obj, { ['key']: 'value' })
assert.notDeepEqual(obj, { ['key']: 'next value' })

console.log('Все тесты пройдены!')
