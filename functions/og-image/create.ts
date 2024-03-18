import { Event, Context, CustomReturnType } from "../../types/lambda";
import 'dotenv/config'
import { makeResponse } from "../../helpers/Response";
import { bugsnagHandler } from "../../helpers/Bugsnag";

export const create = bugsnagHandler(createFunction);

async function createFunction(event: Event, context: Context) {

    console.log(event, context);
    

  return makeResponse({
    statusCode: 200,
    body: {
      message: "Hello World!",
    },
  });
}
