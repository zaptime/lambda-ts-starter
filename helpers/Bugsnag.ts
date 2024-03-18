import Bugsnag from "@bugsnag/js";
import BugsnagPluginAwsLambda from "@bugsnag/plugin-aws-lambda";

Bugsnag.start({
    apiKey: process.env.BUGSNAG_API_KEY || "",
    plugins: [BugsnagPluginAwsLambda],
  });


const bugnsagPlugin = Bugsnag.getPlugin("awsLambda");

if(bugnsagPlugin === undefined) {
    throw new Error("Bugsnag plugin not found");
}
  
export const bugsnagHandler =  bugnsagPlugin.createHandler();