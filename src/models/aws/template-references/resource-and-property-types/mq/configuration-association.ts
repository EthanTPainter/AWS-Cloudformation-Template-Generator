import { ConfigurationId } from "./properties";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html
export class ConfigurationAssociation {
  Description: "associate a Configuration with a Broker, or return information about the specified configurationassociation";
  Type: "AWS::AmazonMQ::ConfigurationAssociation";
  Properties: {
    Broker: {
      Type: string;
      Required: true;
      Description: "The broker to associate with a configuration";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-broker";
    };
    Configuration: {
      Type: ConfigurationId;
      Required: true;
      Description: "The configuration to associate with a broker";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configuration";
    };
  };
}