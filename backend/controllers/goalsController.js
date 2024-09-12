import { pool } from "../config/db.js";

export const logGoal = async (req, res, next) => {
    const {user_id} = req.body
    const {goal_name} = req.body
    const {goal_description} = req.body
    const {amount} = req.body
    const {start_date} = req.body
    const {end_date} = req.body
    try {
        const result = await pool.query(
            'INSERT INTO goals (user_id, goal_name, goal_description, target_amount, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [user_id, goal_name, goal_description, amount, start_date, end_date]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getGoal = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
        const result = await pool.query(
            'SELECT * FROM goals WHERE id = $1', [id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const getGoals = async (req, res, next) => {
    const uid = req.params.uid

    try {
        const result = await pool.query(
            'SELECT id FROM goals WHERE user_id = $1', [uid]
        )
        res.status(200).json(result.rows)
    } catch (err) {
        next(err)
    }
    
}

export const updateGoal = async (req, res, next) => {
    const id = parseInt(req.params.id)
    const {user_id} = req.body
    const {goal_name} = req.body
    const {description} = req.body
    const {amount} = req.body
    const {start_date} = req.body
    const {end_date} = req.body
    try {
        const result = await pool.query(
            'UPDATE goals SET user_id = $1, goal_name = $2, goal_description = $3, target_amount = $4, start_date = $5, end_date = $6 WHERE id = $7 RETURNING *', [user_id, goal_name, description, amount, start_date, end_date, id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

export const deleteGoal = async (req, res, next) => {
    const id = parseInt(req.params.id)

    try {
        const result = await pool.query(
            'DELETE FROM goals WHERE id = $1 RETURNING *', [id]
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
    
}

export const getGoalProgress = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
        const result = await pool.query(
            'SELECT goal_name, progress FROM goals WHERE id = $1', [id]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}