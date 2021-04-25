const express = require('express')
const port = process.env.PORT || 3000
const app = express()
app.get('/', function (req, res) {
 res.send('Hello World!')
})
app.listen(port, function () {
 console.log('Votre app est disponible sur localhost:3000 !')
})