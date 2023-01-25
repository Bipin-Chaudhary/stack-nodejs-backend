require('dotenv').config()
console.log(process.env.NODE_ENV)

const config = {
  dev: {
    PORT: process.env.PORT || 4000
  },
  prod: {
    PORT: process.env.PORT || 4000
  }
}

module.exports = process.env.NODE_ENV === 'dev' ? config.dev : config.prod
