import { BaseResourceAndPropertyType } from "../../../../../base-models";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-overrides
export type AlexaOverrides = {
  Manifest: BaseResourceAndPropertyType,
};
export const alexaOverrides: AlexaOverrides = {
  Manifest: { 
    Type: "JSON",
    Required: false,
    Description: "provides overrides to the skill package to apply when creating or updating the skill",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html#cfn-ask-skill-overrides-manifest",
  },
}