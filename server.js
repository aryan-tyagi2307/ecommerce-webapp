const express = require('express')

//rest object
const app = express()

// rest api
app.get('/', (req,res) => {
    res.send(
        "<h1>radhe Krishn Sita ram hanuman</h1>"
    )
})

//port
const PORT = 8080

// run listen
app.listen(PORT, () => {
    console.log(`Server running on PORT number ${PORT}`)
})
