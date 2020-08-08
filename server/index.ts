import express from 'express';

const app = express();
const port = 8000;

app.get('/ping', (req, res) => {
  res.send('pong').status(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
