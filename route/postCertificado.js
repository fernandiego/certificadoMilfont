const express = require('express')
const router = express()


router.post('/', async (req, res) => {
console.log("Alô alô")
console.log(req.body)
res.send(200)

});

router.get('/', async (req, res) => {
	res.send('olá')
	return console.log('Olá')
})

exports.router = router;