<template>
  <div class="temp-app">
    <test-resource />
  </div>
</template>

<script>
import TestResource from "./components/aws-resources/TestResource.vue"

export default {
  name: "TempApp",
  template: "TempApp",
  components: {
    TestResource
  }
}
</script>

