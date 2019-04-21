// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html
export class ResourceTag {
  Key: {
    Type: string;
    Required: true;
    Description: "";
    URL: "";
  };
  Value: {
    Type: string;
    Required: true;
    Description: "";
    URL: "";
  };
}