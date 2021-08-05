const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 5001;
app.use(cors());
//Middleware for data on post request

app.use(express.json({ extended: false }))

const todos = [
  {
    message: "Wash the car",
    id: 1,
    completed: false
  },
  {
    message: "Go to the gym",
    id: 2,
    completed: false
  },
  {
    message: "Finish React app",
    id: 3,
    completed: false
  }
]

app.get('/', (req, res) => {
  res.status(200).json(todos);
});

app.post('/', (req, res) => {
  const newTodo = {
    message: req.body.message,
    id: uuidv4()
  }

  todos.push(newTodo)
  res.status(201).json(todos)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})