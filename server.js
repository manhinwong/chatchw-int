const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define MongoDB schema and model for user responses
const responseSchema = new mongoose.Schema({
  questionId: String,
  question: String,
  answer: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now },
});

const Response = mongoose.model('Response', responseSchema);

// API routes
app.post('/api/saveResponse', async (req, res) => {
  const { questionId, question, answer } = req.body;
  const newResponse = new Response({ questionId, question, answer });

  try {
    await newResponse.save();
    res.json({ message: 'Response saved successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving response', error: error.message });
  }
});

app.post('/api/question', async (req, res) => {
  // Your existing question generation logic here
  // You can also save the generated question to MongoDB if needed
  const generatedQuestion = generateQuestion(req.body);
  res.json(generatedQuestion);
});

app.post('/api/diagnosis', async (req, res) => {
  // Your existing diagnosis logic here
  const diagnosisResult = runDiagnosis(req.body);
  res.json(diagnosisResult);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});