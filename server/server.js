const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const signUp = require('./signUp');
const contactSend = require('./contact');
const cors = require('cors');
const corsOptions = {
  origin: 'http://authormdgolden.com'
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Your Backend is Working' });
});

app.post('/signup', signUp);
app.post('/contact', contactSend);

app.listen(port, (res, err) => {
  if (err) {
    console.log('Server failed');
  } else {
    console.log(`Server started on ${port}`);
  }
});
