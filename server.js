const express = require('express')
const hospitalesRoutes = require('./src/hospitales/routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/hospitales', hospitalesRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`));

