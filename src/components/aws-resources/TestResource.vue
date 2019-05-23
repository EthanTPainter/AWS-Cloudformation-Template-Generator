<template>
  <div class="base-parameter-text-field">
    <base-outline-text-field />
  </div>
</template>

<script>
import BaseOutlineTextField from "../text-fields/BaseOutlineTextField";

export default {
  name: "TestResource",
  components: {
    BaseOutlineTextField
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
