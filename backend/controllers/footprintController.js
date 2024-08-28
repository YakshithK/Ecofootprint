import { pool } from "../config/db.js";
import { calculate } from "../models/footprint_calculator.js"

export const calcFootprint = async (req, res, next) => {
    const userInputs = req.body

    try {
        const footprint = calculate(userInputs)
        const jsonFootprint = {'footprint': footprint}
        res.status(201).json(jsonFootprint)
    } catch (err) {
        next(err)
    }
}

export const updateFootprint = async (req, res, next) => {
    const {uid} = req.body
    const {footprint} = req.body
    try {
        const result = await pool.query(
            'UPDATE users SET latest_footprint = $1 WHERE uid = $2', [footprint, uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getFootprint = async (req, res, next) => {
    const {uid} = req.body
    try {
        const result = await pool.query(
            'SELECT latest_footprint FROM users WHERE uid = $1', [uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}