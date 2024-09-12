import express from 'express'
import { getGoal, getGoals, logGoal, updateGoal, deleteGoal, getGoalProgress } from '../controllers/goalsController.js'
const router = express.Router()

router.get('/:uid', getGoals)

router.get('/:id', getGoal)

router.get('/progress/:id', getGoalProgress)

router.post('/', logGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

export default router   