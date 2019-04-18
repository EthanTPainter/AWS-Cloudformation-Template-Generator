import { AuthenticationConfiguration, SkillPackage } from "./properties";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html
export class Skill {
  Description: "Alexa skill that enables customers to access new abilities"
  Type: "Alexa::ASK::Skill"
  Properties: {
    AuthenticationConfiguration: { 
      Type: AuthenticationConfiguration;
      Required: true;
      Description: "Login with Amazon (LWA) configuration used to authenticate with the Alexa service";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html";
    };
    SkillPackage: {
      Type: SkillPackage;
      Required: true;
      Description: "Configuration for the skill package that contains the components of the Alexa Skill";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#cfn-ask-skill-skillpackage";
    };
    VendorId: {
      Type: string;
      Required: true;
      Desc: "The vendor ID associated with the Amazon developer account that will host the skill";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#cfn-ask-skill-vendorid";
    };
  }
}