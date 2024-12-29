const nodemailer = require('nodemailer');
const { user, pass } = require('./authLogin');
const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));

const transport = nodemailer.createTransport ({
  host: 'smtp.dreamhost.com',
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  }
});

const contactSend = (req, res) => {

    const mailOptions = {
      from: 'mdgolden@authormdgolden.com',
      to: 'mdgolden@authormdgolden.com',
      subject: 'Contact Form',
      text: `From: ${req.body.email}\nName: ${req.body.name}\nMessage:${req.body.message}`,
    };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      myEmitter.emit('log', `${error.name}: ${error.message}`, 'error.txt');
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = contactSend
