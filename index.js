const express = require('express')
const router = require('./routes/routes')
const app = express()
const PORT = process.env.PORT || 3005



//Middlewares
app.use('/', router)



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})