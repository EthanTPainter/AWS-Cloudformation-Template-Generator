export class User {
  ConsoleAccess: {
    Type: boolean;
    Required: false;
    Description: "Enables access to the ActiveMQ Web Console for the ActiveMQ user";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-consoleaccess";
  };
  Groups: {
    Type: string[];
    Required: false;
    Description: "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-groups";
  };
  Password: {
    Type: string;
    Required: true;
    Description: "The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-password";
  };
  Username: {
    Type: string;
    Required: true;
    Description: "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-username";
  };
}