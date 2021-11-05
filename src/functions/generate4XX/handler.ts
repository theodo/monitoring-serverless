import { middyfy } from '@libs/lambda';


const generate4XX = async () =>  ({
    statusCode: 400,
    body: JSON.stringify({message:"Oops, you've made a mistake"}),
  });

export const main = middyfy(generate4XX);
