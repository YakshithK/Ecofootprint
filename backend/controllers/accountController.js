import { pool } from "../config/db.js";

export const register = async (req, res, next) => {
    const {uid} = req.body
    const {email} = req.body
    try {
        const result = await pool.query(
            'INSERT INTO users (uid, email) VALUES ($1, $2) RETURNING *', [uid, email]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const isRegister = async (req, res, next) => {
    const uid = req.params.uid

    try {
        const result = await pool.query(
            'SELECT EXISTS (SELECT 1 FROM users WHERE uid = $1)', [uid]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}