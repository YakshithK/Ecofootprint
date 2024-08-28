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
