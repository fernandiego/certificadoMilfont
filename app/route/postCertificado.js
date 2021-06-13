const express = require('express')
const router = express()
const axios = require('axios')
const hb = require('handlebars')
const pup = require('puppeteer')



router.post('/', async (req, res) => {
	console.log("recebendo requisição")
	// console.log(req.body)

	axios.get(req.body.template).then(async ret => {
		console.log('entrou axios')
		let template = hb.compile(ret.data)
		// res.send(template(req.body.data))
		const browser = await pup.launch({ headless: true });
		const page = await browser.newPage();
		await page.setContent(template(req.body.data))
		console.log('passou hb')
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
		console.log('gerou buffer pdf')
		res.end(buffer)
		await browser.close()
		console.log('fechou browser')

	})
});

router.get('/', async (req, res) => {
	res.send('get do endpoint raíz')
})

exports.router = router;