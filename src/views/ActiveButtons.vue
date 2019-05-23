<template>
  <div class="active-buttons">
    <the-parameter-button />
    <the-outline-button />
    <the-preview-button />
  </div>
</template>

<script>
import TheParameterButton from "./components/buttons/TheParameterButton"
import TheOutlineButton from "./components/buttons/TheOutlineButton"
import ThePreviewButton from "./components/buttons/ThePreviewButton"

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