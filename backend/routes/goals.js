import express from 'express'
import { getGoal, getGoals, logGoal, updateGoal, deleteGoal } from '../controllers/goalsController.js'
const router = express.Router()

router.get('/', getGoals)

router.get('/:id', getGoal)

router.post('/', logGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

export default router   