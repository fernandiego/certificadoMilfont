const express = require('express')
const {router} = require("../route/postCertificado");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())


app.use('/certificado',router )

app.get('/', async (req, res) => {
	res.send('home main')
	return console.log('Olá home main')
})

app.listen(3000, () => {
  console.log('teste')
})