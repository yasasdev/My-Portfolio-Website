module.exports = {
  apps: [
    {
      name: 'yasas_portfolio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/root/yasas_porfolio', // Matches your exact folder spelling on the server
      env: {
        NODE_ENV: 'production',
        PORT: 4002
      }
    }
  ]
};