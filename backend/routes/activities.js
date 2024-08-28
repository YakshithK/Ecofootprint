import express from 'express'
import { getActivities, getActivity, logActivity, deleteActivity, updateActivity } from '../controllers/activitesController.js'
const router = express.Router()

router.get('/', getActivities)

router.get('/:id', getActivity)

router.post('/', logActivity)

router.put('/:id', updateActivity)

router.delete('/:id', deleteActivity)

export default router   