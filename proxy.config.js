const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8090'
    }
  ];
module.exports = proxy;