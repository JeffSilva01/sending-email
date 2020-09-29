// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default (req, res) => {
  const { email, name, texto, subject } = req.body
  
  const user = "jeffsilva01.dev@gmail.com"
  const pass = "senha do email"

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //servidor de envio 
    port: 587, // porta do servidor de envio
    auth: { user, pass }
  })

  transporter.sendMail({
    from: user,
    to: user,
    replyTo: email,
    subject,
    text: `nome: ${name} \n email: ${email} \n ${texto}`
  }).then(info => {
    res.send(info)
  }).catch(error => {
    res.send(error)
  })
}
