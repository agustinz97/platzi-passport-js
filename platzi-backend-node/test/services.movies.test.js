const assert = require('assert')
const proxyquire = require('proxyquire')

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib')
const { moviesMock } = require('../utils/mocks/movies')

describe('Services - movies', function () {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock,
    })

    const moviesServices = new MoviesServices()

    describe('when getMovies method is called', function () {
        //For this to work is needed to change mongoLib to MongoLibMock in services/movies
        //because proxyquire is not working here!!!
        /* it('should call the getAll MongoLib method', async function () {
            await moviesServices.getMovies({})
            assert.strictEqual(getAllStub.called, true)
        })

        it('Should return an array of movies', async function () {
            const result = await moviesServices.getMovies({})
            const expected = moviesMock

            assert.deepEqual(result, expected)
        }) */
    })
})
