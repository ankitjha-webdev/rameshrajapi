import express from 'express'
import SendMail from './controller/SendMailer.js'
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express()
const port = 3000
app.use(cors())

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
}),

app.use('/sendmail', SendMail);

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})