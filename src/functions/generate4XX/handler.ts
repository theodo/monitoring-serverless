import { middyfy } from '@libs/lambda';


const generate4XX = async () =>  {
  console.error('Error log in 4xx error');
  return ({
    statusCode: 400,
    body: JSON.stringify({message:"Oops, you've made a mistake"}),
  });
}

export const main = middyfy(generate4XX);
