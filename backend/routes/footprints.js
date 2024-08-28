import express from 'express'
import { calcFootprint, updateFootprint, getFootprint } from '../controllers/footprintController.js'
const router = express.Router()

router.post('/calc', calcFootprint)

router.get('/:uid', getFootprint)

router.put('/', updateFootprint)

export default router   