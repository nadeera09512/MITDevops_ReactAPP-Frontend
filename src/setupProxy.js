const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_JAVA_GET_STUDENTS,
    createProxyMiddleware({
      target: process.env.REACT_APP_JAVA,
      changeOrigin: true,
    })
  );
  app.use(
    process.env.REACT_APP_JAVA_DELETE_STUDENT,
    createProxyMiddleware({
      target: process.env.REACT_APP_JAVA,
      changeOrigin: true,
    })
  );
  app.use(
    process.env.REACT_APP_JAVA_ADD_STUDENT,
    createProxyMiddleware({
      target: process.env.REACT_APP_JAVA,
      changeOrigin: true,
    })
  );

  app.use(
    process.env.REACT_APP_JAVA_UPDATE_STUDENT,
    createProxyMiddleware({
      target: process.env.REACT_APP_JAVA,
      changeOrigin: true,
    })
  );

  app.use(
    process.env.REACT_APP_MONGO_SIGNUP,
    createProxyMiddleware({
      target: process.env.REACT_APP_MONGO,
      changeOrigin: true,
      useWSL: true,
    })
  );

  app.use(
    process.env.REACT_APP_MONGO_LOGIN,
    createProxyMiddleware({
      target: process.env.REACT_APP_MONGO,
      changeOrigin: true,
      useWSL: true,
    })
  );
};
