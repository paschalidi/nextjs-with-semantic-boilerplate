/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.json()); // support json encoded bodies
  server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  server.get('/aboutme-success', (req, res) => {
    const actualPage = ' /aboutme';
    app.render(req, res, actualPage);
  });

  server.post('/aboutme-success', (req, res) => {
    console.log("process.env")
    console.log(process.env)
    sgMail.setApiKey(process.env.SENDGRID_API);

    const msg = {
      to: 'paschalidi@outlook.com',
      from: 'paschalidi@outlook.com',
      subject: 'You are getting a new project Christos',
      text: req.body.textRedux,
      html: req.body.textRedux
    };
    sgMail.send(msg);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
