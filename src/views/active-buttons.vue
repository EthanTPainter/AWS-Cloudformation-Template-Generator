<template>
  <div class="temp-app">
    <the-parameter-button />
    <the-outline-button />
    <the-preview-button />
  </div>
</template>

<script>
import TheParameterButton from "./components/buttons/TheParameterButton.vue"
import TheOutlineButton from "./components/buttons/TheOutlineButton.vue"
import ThePreviewButton from "./components/buttons/ThePreviewButton.vue"

export default {
  name: "TempApp",
  template: "TempApp",
  components: {
    TheParameterButton,
    TheOutlineButton,
    ThePreviewButton
  }
}
</script>

<style scoped>
</style>