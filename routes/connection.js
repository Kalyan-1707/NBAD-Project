
const express=require('express');

const connectionController=require('../controllers/connection');
const router= express.Router();


router.get('/newConnection', connectionController.newConnection);

router.get('/connections',connectionController.connection);

router.get('/:id', connectionController.show);

router.get('/:id/edit',connectionController.edit);

router.put('/:id',connectionController.update);

router.post('/',connectionController.create);

router.delete('/:id',connectionController.remove);

module.exports=router;