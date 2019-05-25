<template>
  <div id="ask">
    <ul id="required-list">
      <resource-text-field
        v-for="property in requiredProperties"
        v-bind:placeholder="property.name"
        v-bind:label="property.type"
        v-bind:hint="property.description"
        v-bind:key="property.id"
      ></resource-text-field>
    </ul>
  </div>
</template>

<script>
import ResourceTextField from "../outline/text-fields/ResourceTextField";

export default {
  name: "Ask",
  components: {
    ResourceTextField
  },
  data() {
    return {
      type: "Alexa::ASK::Skill",
      url:
        "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html",
      optionalAttributes: {
        Description: {
          type: "String"
        }
      },
      requiredProperties: {
        AuthenticationConfiguration: {
          name: "Authentication Configuration",
          id: 1,
          type: "AuthenticationConfiguration",
          description:
            "Login with Amazon (LWA) configuration used to authenticate with the Alexa service",
          url:
            "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html"
        },
        SkillPackge: {
          name: "Skill Package",
          id: 2,
          type: "SkillPackage",
          description:
            "Configuration for the skill package that contains the components of the Alexa skill",
          url:
            "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html"
        },
        VendorId: {
          name: "Vendor Id",
          id: 3,
          type: "String",
          description:
            "The vendor ID associated with the Amazon developer account that will host the skill",
          url: "None"
        }
      },
      optionalProperties: {}
    };
  }
};
</script>
