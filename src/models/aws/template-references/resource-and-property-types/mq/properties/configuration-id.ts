// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html
export class ConfigurationId {
  Id: {
    Type: string;
    Required: true;
    Description: "The unique ID that Amazon MQ generates for the configuration";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html#cfn-amazonmq-broker-configurationid-id"
  };
  Revision: {
    Type: number;
    Required: true;
    Description: "The revision number of the configuration";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html#cfn-amazonmq-broker-configurationid-revision"
  };
}