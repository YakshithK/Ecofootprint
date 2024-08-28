import { pool } from "../config/db.js";

export const logActivity = async (req, res, next) => {
    const {user_id} = req.body
    const {activity_type} = req.body
    const {description} = req.body
    const {amount} = req.body
    const {date} = req.body
    try {
        const result = await pool.query(
            'INSERT INTO activities (user_id, activity_type, description, amount, date) VALUES ($1, $2, $3, $4, $5) RETURNING *', [user_id, activity_type, description, amount, date]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getActivity = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
        const result = await pool.query(
            'SELECT * FROM activities WHERE id = $1', [id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getActivities = async (req, res, next) => {
    try {
        const result = await pool.query(
            'SELECT * FROM activities'
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
    
}

export const updateActivity = async (req, res, next) => {
    const id = parseInt(req.params.id)
    const {user_id} = req.body
    const {activity_type} = req.body
    const {description} = req.body
    const {amount} = req.body
    const {date} = req.body
    try {
        const result = await pool.query(
            'UPDATE activities SET user_id = $1, activity_type = $2, description = $3, amount = $4, date = $5 WHERE id = $6 RETURNING *', [user_id, activity_type, description, amount, date, id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const deleteActivity = async (req, res, next) => {
    const id = parseInt(req.params.id)

    try {
        const result = await pool.query(
            'DELETE FROM activities WHERE id = $1 RETURNING *', [id]
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
    
}