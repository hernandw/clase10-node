const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
require("dotenv").config();


//1. Configurar el servidor SMTP
let transporter = nodemailer.createTransport({
  service: "gmail", // Puedes usar cualquier otro servicio
  auth: {
    user: process.env.GMAIL_USER, // Tu dirección de correo
    pass: process.env.GMAIL_PASSWORD, // Tu contraseña de aplicaciones
  },
});


// 2. Opciones del correo electrónico
  let mailOptions = {
    from: process.env.GMAIL_USER, // De quién
    to: process.env.GMAIL_USER, //Para quién
    subject: 'Hola saludos es una prueba', // Asunto del correo
    html: '<h1> Hola mundo</h1>' // Contenido del correo en HTML
  };

   //Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Mensaje enviado: %s", info.messageId);
  });

router.get("/", (req, res) => {
  res.send("Hola mundo desde el router tal cosa nuevamente");
});

router.get('/enviar', (req, res) => {
    res.send('Hola mundo desde enviar');
})



module.exports = router