import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

export default async function sendMessage(Name, Email, Message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIN_USER, // Your email address
      pass: process.env.PASS, // Your email password
    },
  });

  const mailOptions = {
    from: Email, // Sender's email address
    to: process.env.MAIN_USER, // Your email address
    subject: `Message from ${Name}`,
    html: `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message from User</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header {
          background-color: #007bff;
          color: #ffffff;
          padding: 10px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }

        .content {
          padding: 20px;
          text-align: left;
        }

        .footer {
          text-align: center;
          color: #777777;
          font-size: 12px;
          margin-top: 20px;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <div class="header">
          <h1>Message from ${Name}</h1>
        </div>
        <div class="content">
          <p><strong>Email:</strong> ${Email}</p>
          <p><strong>Message:</strong></p>
          <p>${Message}</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 kinbech. All rights reserved.</p>
        </div>
      </div>
    </body>

    </html>
    `,
  };

  await transporter
    .sendMail(mailOptions)
    .then(() => console.log("Message sent successfully"))
    .catch((err) => {
      console.log(`Error while sending message: ${err.message}`);
    });
}
