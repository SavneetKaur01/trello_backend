require('dotenv').config()   

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME
  };


//  The dotenv package is a popular Node.js module that loads environment variables from a file named .env into process.env. 


