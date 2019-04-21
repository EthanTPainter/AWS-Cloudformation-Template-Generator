import { ResourceTag } from "../shared-property-types/resource-tag";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html
export class Configuration {
  Description: "create Amazon MQ configurations, add configuration changes or modify users, and return information about the specified configuration";
  Type: "AWS::AmazonMQ::Configuration";
  Properties: {
    Data: {
      Type: string;
      Required: true;
      Description: "The base64-encoded XML configuration";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-data";
    };
    Description: {
      Type: string;
      Required: false;
      Description: "The description of the configuration";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-description";
    };
    EngineType: {
      Type: string;
      Required: true;
      Description: "The type of broker engine. Currently only supports ACTIVEMQ";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-enginetype";
    };
    EngineVersion: {
      Type: string;
      Required: true;
      Description: "The version of the broker engine";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-engineversion";
    };
    Name: {
      Type: string;
      Required: true;
      Description: "The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-name";
    };
    Tags: {
      Type: ResourceTag;
      Required: false;
      Description: "An array of key-value pairs";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-tags";
    };
  };
}