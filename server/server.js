const express = require('express');
const app = express();
const https = require('https');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8888;
const signUp = require('./signUp');
const contactSend = require('./contact');
const cors = require('cors');
const corsOptions = {
  origin: 'https://www.authormdgolden.com'
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Your Backend is Working' });
});

app.post('/signup', signUp);
app.post('/contact', contactSend);

//const sslServer = https.createServer({
//  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
//  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
//}, app)

sslServer.listen(port, (res, err) => {
  if (err) {
    console.log('Server failed');
  } else {
    console.log(`Server started on ${port}`);
  }
});
