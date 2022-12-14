import {config} from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
config()

import Todo from "./models/Todo.js";

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
const MONGO_URL = process.env.MONGO_URL

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', async (_req,res)=>{
  const todos = await Todo.find();
  res.json(todos);
})

mongoose.connect(MONGO_URL ?? '',
).then(() => {
  console.log(`on port ${port}`);
  app.listen(process.env.PORT || port);
});