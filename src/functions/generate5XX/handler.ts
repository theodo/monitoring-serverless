import { middyfy } from '@libs/lambda';

const generate5XX = async () => {
  throw new Error('This is an unhandled error !');
}

export const main = middyfy(generate5XX);
