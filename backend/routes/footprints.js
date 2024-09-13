import express from 'express'
import { calcFootprint, updateFootprint, getFootprint, getFootprintData, getProgress } from '../controllers/footprintController.js'
const router = express.Router()

router.post('/calc', calcFootprint)

router.get('/:uid', getFootprint)

router.get('/data/:uid', getFootprintData)

router.get('/progress/:uid', getProgress)

router.put('/', updateFootprint)

export default router   