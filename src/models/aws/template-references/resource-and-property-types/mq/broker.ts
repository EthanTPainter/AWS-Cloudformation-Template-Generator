import { User, ConfigurationId, LogsConfiguration, MaintenanceWindow } from "./properties";
import { ResourceTag } from "../shared-property-types/resource-tag";

// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html
export class Broker {
  Description: "create Amazon MQ brokers, add configuration changes or modify users for the specified broker, return information about the specified broker, and delete the specified broker";
  Type: "AWS::AmazonMQ::Broker"
  Properties: {
    AutoMinorVersionUpgrade: {
      Type: boolean;
      Required: true;
      Description: "Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-autominorversionupgrade";
    };
    BrokerName: {
      Type: string;
      Required: true;
      Description: "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-brokername";
    };
    Users: {
      Type: User[];
      Required: true;
      Description: "The list of all ActiveMQ usernames for the specified broker";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-users";
    };
    Configuration: {
      Type: ConfigurationId;
      Required: false;
      Description: "The broker configuration. If no configuration exists for a broker, Amazon MQ creates a default configuration";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-configuration";
    };
    DeploymentMode: {
      Type: string;
      Required: true;
      Description: "The deployment mode of the broker. SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-deploymentmode";
    };
    EngineType: {
      Type: string;
      Required: true;
      Description: "The type of broker engine";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-enginetype";
    };
    EngineVersion: {
      Type: string;
      Required: true;
      Description: "The version of the broker engine";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-engineversion";
    };
    HostInstanceType: {
      Type: string;
      Required: true;
      Description: "The broker's instance type";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-hostinstancetype";
    };
    Logs: {
      Type: LogsConfiguration;
      Required: false;
      Description: "The Amazon CloudWatch Logs configuration for the broker";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-logs";
    };
    MaintenanceWindowStartTime: {
      Type: MaintenanceWindow;
      Required: false;
      Description: "The parameters that determine the WeeklyStartTime";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-maintenancewindowstarttime";
    };
    PubliclyAccessible: {
      Type: boolean;
      Required: true;
      Description: "Enables connections from applications outside of the VPC that hosts the broker's subnets";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-publiclyaccessible";
    };
    SecurityGroups: {
      Type: string[];
      Required: false;
      Description: "The list of rules (1 minimum, 125 maximum) that authorize connections to brokers";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-securitygroups";
    };
    SubnetIds: {
      Type: string[];
      Required: false;
      Description: "The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-subnetids";
    };
    Tags: {
      Type: ResourceTag[];
      Required: false;
      Description: "An array of key-value pairs";
      URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-tags";
    };
  };
}