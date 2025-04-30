//const express = require('express');
import express from 'express'
import path from 'path'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

/*
const bot = new openai({
  apiKey: process.env.OPENAI_API_KEY
});
*/

// Routes imports
import pingRoutes from './routes/ping.routes.js'
import chatRoutes from './routes/chat.routes.js'

app.use('/ping', pingRoutes)
app.use('/api/chat', chatRoutes)

app.listen(4000, () => {
  console.log("Running at Port 4000")
});