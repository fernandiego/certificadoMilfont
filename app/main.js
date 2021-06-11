const express = require('express')
const {router} = require("../route/postCertificado");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())


app.use('/certificado',router )


app.listen(3000, () => {
  console.log('teste')
})