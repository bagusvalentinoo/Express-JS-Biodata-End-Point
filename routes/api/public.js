const express = require('express')
const router = express.Router()

router.use(function logger(req, res, next) {
    console.log(new Date(), req.method, req.url)
    next()
})

router.get('/biodata', (req, res) => {
    const name = req.query.name;
    const birth_place = req.query['tempat-lahir']
    const birth_date = req.query['tanggal-lahir']
    const address = req.query.alamat

    res.json({
        'nama': name,
        'tempat-lahir': birth_place,
        'tanggal-lahir': birth_date,
        'alamat': address
    })
})

router.post('/biodata', (req, res) => {
    const name = req.body.name
    const birth_place = req.body['tempat-lahir']
    const birth_date = req.body['tanggal-lahir']
    const address = req.body.alamat

    res.json({
        'nama': name,
        'tempat-lahir': birth_place,
        'tanggal-lahir': birth_date,
        'alamat': address
    })
})

module.exports = router