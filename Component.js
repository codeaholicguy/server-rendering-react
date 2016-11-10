const React = require('react')

class Component extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Server side rendering</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>Hello world</h1>
          <p>Server side rendering</p>
          <button onClick={() => {
            console.log('clicked')
          }}>Click me</button>
          <script src='/bundle.js'/>
        </body>
      </html>
    )
  }
}

module.exports = Component
