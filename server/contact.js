const nodemailer = require('nodemailer');
const { user, pass } = require('./authLogin');


const transport = nodemailer.createTransport ({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  }
});

const contactSend = (req, res) => {

    const mailOptions = {
      from: 'magengolden92@gmail.com',
      to: 'magengolden92@gmail.com',
      subject: 'Contact Form',
      text: `From: ${req.body.email}\nName: ${req.body.name}\nMessage:${req.body.message}`,
    };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
};

module.exports = contactSend
