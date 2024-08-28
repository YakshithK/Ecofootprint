import { pool } from "../config/db.js";

export const logRec = async (req, res, next) => {
    const {user_id} = req.body
    const {rec} = req.body
    const {category} = req.body
    const {created_at} = req.body
    try {
        const result = await pool.query(
            'INSERT INTO recommendations (user_id, recommendation, category, created_at) VALUES ($1, $2, $3, $4) RETURNING *', [user_id, rec, category, created_at]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getRec = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
        const result = await pool.query(
            'SELECT * FROM recommendations WHERE id = $1', [id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getRecs = async (req, res, next) => {
    try {
        const result = await pool.query(
            'SELECT * FROM recommendations'
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
    
}

export const updateRec = async (req, res, next) => {
    const id = parseInt(req.params.id)
    const {user_id} = req.body
    const {rec} = req.body
    const {category} = req.body
    const {created_at} = req.body
    try {
        const result = await pool.query(
            'UPDATE recommendations SET user_id = $1, recommendation = $2, category = $3, created_at = $4 WHERE id = $5 RETURNING *', [user_id, rec, category, created_at, id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const deleteRec = async (req, res, next) => {
    const id = parseInt(req.params.id)

    try {
        const result = await pool.query(
            'DELETE FROM recommendations WHERE id = $1 RETURNING *', [id]
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
    
}