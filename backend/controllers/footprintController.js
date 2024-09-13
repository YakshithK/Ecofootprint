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
    const {transport} = req.body
    const {energy} = req.body
    const {food} = req.body
    const {waste} = req.body
    try {
        const result1 = await pool.query(
            'UPDATE users SET second_latest_footprint = latest_footprint WHERE uid = $1', [uid]
        )
        const result = await pool.query(
            'UPDATE users SET latest_footprint = $1, latest_transport = $2, latest_energy = $3, latest_food = $4, latest_waste = $5 WHERE uid = $6', [footprint, transport, energy, food, waste, uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getFootprint = async (req, res, next) => {
    const uid = req.params.uid
    try {
        const result = await pool.query(
            'SELECT latest_footprint FROM users WHERE uid = $1', [uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getFootprintData = async (req, res, next) => {
    const uid = req.params.uid
    try {
        const result = await pool.query(
            'SELECT latest_transport, latest_energy, latest_food, latest_waste FROM users WHERE uid = $1', [uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getProgress = async (req, res, next) => {
    const uid = req.params.uid
    try {
        const result = await pool.query(
            'SELECT latest_footprint, second_latest_footprint FROM users WHERE uid = $1', [uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}