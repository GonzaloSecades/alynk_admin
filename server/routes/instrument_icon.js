const express = require('express')
const app = express()
const router = express.Router()

const instrument_icon = require('../models/instrument_icon')

//instruments list
router.get('/all',async (req,res,next)=>{
  let instruments = await instrument_icon.findAll()
  //console.log(instruments)
  res.send(instruments)
});

router.get('/:id',async (req,res,next)=>{
  
  let id = (req.params.id)
  instrument_icon.findOne({where: {id : id}})
    .then(instrument=>{
      instrument ? res.send(instrument) : res.send('not found')
    })
    .catch(e=>console.error(e))
  
});

router.post('/add', async (req,res,next)=>{
  try {
    let newInstrument = {
      ticker:req.body.ticker,
      url:req.body.url
    }
    instrument_icon.create(newInstrument)
    res.status(200).send('Icon created successfully')
    return
  } catch (error) {
    console.log(error)
  }
  
})



module.exports= router