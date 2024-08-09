const winston = require('winston');
const { combine, timestamp, json } = winston.format;

/**
* Creates the log format and filename.
*/
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
    }),
  ],
});


class LogUtils{

    /**
    * This method helps to log informational message
    */
    info(message){
        logger.info(message);
    }


    /**
    * This method helps to log error message
    */
    error(message){
      logger.error(message);
  }
}

module.exports = new LogUtils();