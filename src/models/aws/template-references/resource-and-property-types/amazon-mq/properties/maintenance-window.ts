export class MaintenanceWindow {
  DayOfWeek: {
    Type: string;
    Required: true;
    Description: "The day of the week, for example MONDAY, TUESDAY";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-dayofweek";
  };
  TimeofDay: {
    Type: string;
    Required: true;
    Description: "The time, in 24-hour format";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-timeofday";
  };
  TimeZone: {
    Type: string;
    Required: true;
    Description: "The time zone, UTC by default, in either the Country/City format, or the UTC offset format";
    URL: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-timezone";
  };
}