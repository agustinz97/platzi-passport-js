const assert = require('assert')
const buildMessage = require('../utils/buildMessage')

describe('Utils - buildMessage', function () {
    describe('When receives an entity and an action', function () {
        it('should return the respective message', function () {
            const result = buildMessage('movie', 'create')
            const expect = 'movie created'

            assert.strictEqual(result, expect)
        })
    })

    describe('When receives and entity and an action and this is list', function () {
        it('should return the respective message with the entity in prural', function () {
            const result = buildMessage('movie', 'list')
            const expect = 'movies listed'

            assert.strictEqual(result, expect)
        })
    })
})
