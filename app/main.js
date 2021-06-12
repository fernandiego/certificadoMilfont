const express = require('express')
// const { router } = require("./route/postCertificado");
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const axios = require('axios')
const hb = require('handlebars')
const pup = require('puppeteer')

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'))

// app.use('/certificado', router)

app.get('/', async (req, res) => {
	res.send('home main')
	return console.log('Olá home main')
})

app.post('/certificado', async (req, res) => {
	// console.log("Alô alô")
	// console.log(req.body)

	axios.get(req.body.template).then(async ret => {
		// console.log(res.data)
		let template = hb.compile(ret.data)
		// res.send(template(req.body.data))
		const browser = await pup.launch({ headless: true });
		const page = await browser.newPage();
		await page.setContent(template(req.body.data))

		const buffer = await page.pdf({
			width: 1024,
			height: 600,
			printBackground: true,
			margin: {
				left: '0px',
				top: '0px',
				right: '0px',
				bottom: '0px'
			}
		})
		await browser.close()
		res.end(buffer)

	})
});


app.listen(process.env.PORT || 1234, () => {
	console.log(process.env.port)
	console.log('We are online, baby!')
})
