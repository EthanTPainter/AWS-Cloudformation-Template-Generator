import { BaseResourceAndPropertyType } from "../../../../../base-models";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html
export type AlexaAuthenticationConfiguration = {
  ClientId: BaseResourceAndPropertyType,
  ClientSecret: BaseResourceAndPropertyType,
  RefreshToken: BaseResourceAndPropertyType,
};

export const alexaAuthenticationConfiguration: AlexaAuthenticationConfiguration = {
  ClientId: {
    Type: "string",
    Required: true,
    Description: "Client ID from Login with Amazon (LWA)",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-clientid",
  },
  ClientSecret: {
    Type: "string",
    Required: true,
    Description: "Client Secret from Login with Amazon (LWA)",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-clientsecret",
  },
  RefreshToken:  {
    Type: "string",
    Required: true,
    Description: "Refresh Token from Login with Amazon (LWA)",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-refreshtoken",
  },
};