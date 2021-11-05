import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';


const hello = async () => {
  return formatJSONResponse({
    message: `Hello Kumojin, welcome to the exciting Serverless world!`,
  });
}

export const main = middyfy(hello);
