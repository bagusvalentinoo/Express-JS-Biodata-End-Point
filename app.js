const express = require('express')
const routerApi = require('./routes/api/public')
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', routerApi)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})