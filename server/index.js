/* eslint-disable no-console */

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  server.(5000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:5000');
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
