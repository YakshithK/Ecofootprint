import express from 'express'
import { getRec, getRecs, logRec, updateRec, deleteRec } from '../controllers/recsController.js'
const router = express.Router()

router.get('/', getRecs)

router.get('/:id', getRec)

router.post('/', logRec)

router.put('/:id', updateRec)

router.delete('/:id', deleteRec)

export default router   