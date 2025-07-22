const swaggerAutogen = require('swagger-autogen')();
const config = require('../config/config');

const doc = {
  info: {
    title: 'Authen Exercise API',
    description: 'Description'
  },
  host: `localhost:${config.port}`,  
  tags: [
    {
      name: 'Authen',
    },
    {
      name: 'User',
    },
  ],
  definitions: require('./definitions'),
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
