import express from 'express';
import 'dotenv/config'
import './database/servercc.js'

const PORT = process.env.PORT
const app = express();

// settings
app.set('port', PORT);


export default app
