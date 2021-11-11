
import { BadRequest } from "http-errors";
const Sentry = require("@sentry/serverless");


Sentry.AWSLambda.init({
  dsn: "https://9d2f4361305e4a01a8242d17053b9b36@o1061187.ingest.sentry.io/6051415",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const generate4XX = async () =>  {
  console.error('Error log in 4xx error');

  throw new BadRequest('Ooops you have made a mistake');

  
}

export const main = Sentry.AWSLambda.wrapHandler(generate4XX);
