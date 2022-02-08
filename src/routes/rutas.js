const express = require('express');
const router = express.Router();

const ARCHIVO = require('../models/db'); 

router.get('/', async (req ,res)=>{
    const buscar = await ARCHIVO.find();
    res.json(buscar);
})

router.get('/:id', async (req ,res)=>{
    const buscarid = await ARCHIVO.findById(req.params.id);
    res.json(buscarid);
})

router.post('/', async(req,res)=>{
      
const guardar = new ARCHIVO(req.body);
await guardar.save();
res.json({
    msg: ' recivido'
});

})
router.put('/:id',async (req,res)=>{

await ARCHIVO.findByIdAndUpdate(req.params.id, req.body);
res.json({msg: 'actualizado'});

})

router.delete('/:id',async (req,res)=>{

 await ARCHIVO.findByIdAndDelete(req.params.id)
 .then(()=>{ res.json({ msg: 'borrado'})})
 .catch((err)=>{console.error(err)})

})

module.exports = router;