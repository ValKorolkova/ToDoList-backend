const { Router } = require('express');
const { getList, saveList, editList, deleteList } = require('./ListController')

const router = Router();


router.get ('/', getList);
router.post('/saveList', saveList);
router.put('/editList', editList)
router.delete('/deleteList/:id', deleteList)

module.exports = router;