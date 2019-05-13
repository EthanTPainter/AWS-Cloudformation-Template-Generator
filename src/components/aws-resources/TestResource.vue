<template>
  <div class="app">
    <base-parameter-text-field />
  </div>
</template>

<script>
import BaseParameterTextField from "../text-fields/BaseParameterTextField.vue";

export default {
  name: "TestResource",
  template: "TestResource",
  components: {
    BaseParameterTextField
  },
  data() {
    return {
      type: "AWS::Test::Resource",
      description: "Existing Text that should be able to be changed",
      properties: {
        requestArn: {
          type: "SomeType",
          required: false,
          description: "Brief description of this property",
          url: "URL to the amazon docs"
        },
        responseArn: {
          type: "ResponseType",
          required: true,
          description: "Brief description of the ResponseType",
          url: "URL to the amazon docs"
        }
      }
    }
  }
}
</script>

<style>
</style>