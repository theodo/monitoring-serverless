

import createHttpError from "http-errors";
import {AWSLambda, setContext} from "@sentry/serverless";
import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";

AWSLambda.init({
  dsn: "https://9d2f4361305e4a01a8242d17053b9b36@o1061187.ingest.sentry.io/6051415",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class HelloError extends Error {
  statusCode = 500;

  constructor(message:string) {
    super(message)
    this.name = "HelloError"
  }
}

class GoodbyeError extends Error {
  statusCode = 500;

  constructor(message:string) {
    super(message)
    this.name = "GoodbyeError"
    
  }
}


const generate5XX = async () => {

  

  if(getRandomInt(2) === 0){
    setContext("type", {message: 'hello'})
    throw new HelloError('Heeeelo')
  } else {
    setContext("type", {message: 'goodbye'})
    throw new GoodbyeError('Goooodbye')
    
  }

}

export const main = AWSLambda.wrapHandler(middy(generate5XX).use(httpErrorHandler()));
