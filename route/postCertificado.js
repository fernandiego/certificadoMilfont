import express from 'express'
const router = express()

router.use((req, res, next) => {
	res.status(200).send({
		mensagem: 'foi?'
	})
})

router.get('/certificado', async function (req, res) {
	console.log("Alo?")
	res.json([certificado]);
});

router.get('/certificado/:id', async function (req, res) {

});

router.post('/certificado', async function (req, res) {

});

router.put('/certificado/:id', async function (req, res) {

});

router.delete('/certificado/:id', async function (req, res) {

});

module.exports = router;