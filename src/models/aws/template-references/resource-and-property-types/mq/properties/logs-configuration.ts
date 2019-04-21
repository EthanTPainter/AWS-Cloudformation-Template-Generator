export class LogsConfiguration {
  Audit: { 
    Type: boolean;
    Required: false;
    Description: "Enables audit logging";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-logsconfiguration.html#cfn-amazonmq-broker-logsconfiguration-id";
  };
  General: {
    Type: boolean;
    Required: false;
    Description: "Enables general logging";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-logsconfiguration.html#cfn-amazonmq-broker-logsconfiguration-revision";
  };
}