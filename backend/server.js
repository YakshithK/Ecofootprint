import express from 'express'
import cors from 'cors'
import { pool } from './config/db.js'
import { fileURLToPath } from 'url'
import path from 'path'
import activities from './routes/activities.js'
import goals from './routes/goals.js'
import recs from './routes/recs.js'
import footprints from './routes/footprints.js'
import register from './routes/login.js'
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}))

// setup static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/activities', activities)

app.use('/api/goals/', goals)

app.use('/api/recs/', recs)

app.use('/api/footprint/', footprints)

app.use('/api/users/', register)

app.listen(port, () => console.log(`Server is running on port ${port}`))