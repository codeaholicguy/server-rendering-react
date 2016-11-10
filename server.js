require('babel-register')({
  presets: ['react']
})

const express = require('express');
const React =  require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('./Component')

const app = express();
const PORT = 9000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Component));

  res.send(html);
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

