const express = require('express')
const router = require('./router/index')
const config = require('./config/app')
const cors=require('cors')

const PORT = config.appPort;
const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(cors())
app.use(express.static(__dirname+'/public'))
app.use(router);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})