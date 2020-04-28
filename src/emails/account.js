const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "nathanpriyasadie@gmail.com",
      subject: "First email",
      text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "nathanpriyasadie@gmail.com",
      subject: "Goodbye",
      text: `Sorry ${name} to let you go.`,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
module.exports = { sendWelcomeEmail, sendCancelationEmail };
