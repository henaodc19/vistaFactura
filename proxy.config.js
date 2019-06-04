const proxy = [
    {
      context: '/api',
      target: 'localhost:8080/api/factura/pais',
      pathRewrite: {'^/api' : '/factura'}
    }
  ];
  module.exports = proxy;