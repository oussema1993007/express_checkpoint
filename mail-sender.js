const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'oussemaarmani@gmail.com',
    pass: 'ctab jbnd uqtk hdlr'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendMail = (to, subject, text, callback) => {
    const mailOptions = {
        from: 'oussemaarmani@gmail.com',
        to: 'oussemaarmani@gmail.com',
        subject: subject,
        text: text
    };

    console.log('Sending email to:', to);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return callback(error, null);
        }
        console.log('Email sent:', info.response);
        callback(null, info.response);
    });
};

module.exports = sendMail;