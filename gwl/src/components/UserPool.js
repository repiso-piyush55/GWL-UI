
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-south-1_WZgsuGnbg",

  ClientId: "5iba4s43lhc4mr7iuogcjikmu8",
};

export default new CognitoUserPool(poolData);
