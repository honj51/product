var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware')
// var httpProxy = require('http-proxy')

var app = express()
var compiler = webpack(config)
// var proxy = httpProxy.createProxyServer()

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = {
  '/images': {
    target: 'http://localhost:8012'
    // target: 'http://127.0.0.1:8083'
  },
  '/rs/user': {
    target: 'http://localhost:8012'
    // target: 'http://127.0.0.1:8083'
  },
  '/rs/search': {
    target: 'http://localhost:8012'
    // target: 'http://127.0.0.1:8083'
  },
  '/rs/db': {
   // target: 'http://192.168.50.202:8081'
    target: 'http://localhost:8012'
  },
  '/excel': {
    target: 'http://127.0.0.1:8081/product'
  },
  '/rs': {
    target: 'http://127.0.0.1:8081/product'
  }
}

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE, OPTIONS')
//   res.header('X-Powered-By', '3,2,1')
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use('/static', express.static('./static'))

module.exports = app.listen(8084, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8084')
})
