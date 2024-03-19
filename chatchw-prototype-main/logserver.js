const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 8084;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.post('/log', async (req, res) => {
  const logMessage = req.body.message;
  console.log('Received log:', logMessage);

  try {
    // Write the log message to a file
    await fs.appendFile('logs.txt', `${logMessage}\n`);
    res.status(200).send('Log received and saved successfully');
  } catch (err) {
    console.error('Error writing to log file:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, '192.168.50.140', () => {
  console.log(`Log server listening at http://192.168.50.140:${port}`);
});
