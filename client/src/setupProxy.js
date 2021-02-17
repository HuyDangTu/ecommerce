const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api',createProxyMiddleware({
            target: 'https://shielded-spire-30008.herokuapp.com/',
            changeOrigin: true
        })
    );
};