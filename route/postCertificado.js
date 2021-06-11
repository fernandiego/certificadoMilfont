import express from 'express'
const router = express.Router();


router.get('/certificados', async function (req, res) {
	res.json([certificado]);
});

router.get('/certificados/:id', async function (req, res) {

});

router.post('/certificados', async function (req, res) {

});

router.put('/certificados/:id', async function (req, res) {

});

router.delete('/certificados/:id', async function (req, res) {

});

module.exports = router;