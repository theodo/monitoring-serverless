import type { AWS } from "@serverless/typescript";

import hello from "@functions/hello";
import generate4XX from "@functions/generate4XX";
import generate5XX from "@functions/generate5XX";

const serverlessConfiguration: AWS = {
  service: "monitoring-backend",
  frameworkVersion: "2",
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
    },
  },
  plugins: ["serverless-esbuild", "serverless-dotenv-plugin"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "eu-west-1",
    stage: "dev",
    profile: "${env:AWS_PROFILE}",

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    lambdaHashingVersion: "20201221",
  },
  functions: { hello, generate4XX, generate5XX },
};

module.exports = serverlessConfiguration;
