import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';


const hello = async () => {
  console.log('This is a log from hello lambda');
  return formatJSONResponse({
    message: `Hello Kumojin, welcome to the exciting Serverless world!`,
  });
}

export const main = middyfy(hello);
