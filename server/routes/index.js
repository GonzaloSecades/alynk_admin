const express = require('express')
const router = express.Router()

const instrumentRouter= require('./instrument_icon')

router.use("/instruments",instrumentRouter)

module.exports = router;