import express from 'express'
import { isRegister, register } from '../controllers/accountController.js'
const router = express.Router()

router.post('/', register)

router.get('/:uid', isRegister)

export default router