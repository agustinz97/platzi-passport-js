const express = require('express')
const cors = require('cors')

const { config } = require('./config/index.js')
const moviesApi = require('./routes/movies.js')
const userMoviesApi = require('./routes/userMovies')

// Error handlers
const {
    logErrors,
    errorHandler,
    wrapErrors,
} = require('./utils/middleware/errorHandlers.js')
const notFoundHandler = require('./utils/middleware/notFoundHandler.js')

const app = express()

//CORS
app.use(cors())
//body parser
app.use(express.json())

//rutas movies
moviesApi(app)
userMoviesApi(app)

//capturar error 404 (al final de las rutas ya ntes de los midleware de error)
app.use(notFoundHandler)

//middlewares de error (importante siempre al final de las rutas)
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
    console.log(
        `Application in ${config.dev ? 'development' : 'production'} mode`
    )
    console.log(`Listening on port ${config.port}`)
})
