const express = require('express')
const {router} = require("./route/postCertificado");
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/certificado',router )

app.get('/', async (req, res) => {
	res.send('home main')
	return console.log('Olá home main')
})

app.listen(1234, () => {
  console.log('We are online, baby!')
})
