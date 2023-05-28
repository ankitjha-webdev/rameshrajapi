/* eslint-disable no-undef */
import nodemailer from "nodemailer";

const SendMail = async (req, res) => {
  console.log(req.body);
  // req.body should not be blank or null or undefiend
  if (req.body.name ==='' | req.body.name === null|| req.body.name === undefined){
    return res.status(400).json({
      message: "Please add email and message"
      });
  } 


  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rameshraj.in2023@gmail.com",
      pass: "zuusgtdrrbcywqvj",
    },
  });
  const mailOptions = {
    from: `${name} <${email}>`,
    to: "rameshraj.in2023@gmail.com",
    subject: `${name} has sent you a message from your portfolio`,
    text: `
Dear Ramesh Raj,

I hope this email finds you well.

${message}

Thank you for your time and consideration.

Sincerely,
${name}
${email}
${phone}
    `,
    };
  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error sending email",
      });
    }
    return res.status(200).json({
      message: "Email sent successfully",
    });
  });
};

export default SendMail;
