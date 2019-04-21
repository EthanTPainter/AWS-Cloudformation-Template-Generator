import { BaseResourceAndPropertyType } from "../../../../../base-models";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-overrides
export type SkillPackage = {
  Overrides: BaseResourceAndPropertyType,
  S3Bucket: BaseResourceAndPropertyType,
  S3BucketRole: BaseResourceAndPropertyType,
  S3Key: BaseResourceAndPropertyType,
  S3ObjectVersion: BaseResourceAndPropertyType,
}

export const skillPackage: SkillPackage = {
  Overrides: {
    Type: "Overrides",
    Required: false,
    Description: "Overrides to the skill package to apply when creating or updating the skill",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-overrides",
  },
  S3Bucket: {
    Type: "string",
    Required: true,
    Description: "The name of the Amazon S3 bucket where the .zip file that contains the skill package is stored",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3bucket",
  },
  S3BucketRole: {
    Type: "string",
    Required: false,
    Description: "ARN of the role that grants the Alexa service permission to access the bucket and retrieve the skill package",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3bucketrole",
  },
  S3Key: {
    Type: "string",
    Required: false,
    Description: "The location and name of the skill package .zip file",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3key",
  },
  S3ObjectVersion: {
    Type: "string",
    Required: false,
    Description: "If you have S3 versioning enabled, the version ID of the skill package.zip file",
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3objectversion",
  },
};