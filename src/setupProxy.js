const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/slovar',
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
      })
    );
  };