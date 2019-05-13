<template>
  <div class="app">
    <the-header/>
    <parameter-text-field/>
    <the-aws-dropdown/>
    <div class="row">
      <div class="column">
        <the-parameters/>
      </div>
      <div class="column">
        <the-outline/>
      </div>
      <div class="column">
        <the-preview/>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheAwsDropdown from "./components/dropdowns/TheAwsDropdown.vue";
import ParameterTextField from "./components/ParameterTextField.vue";
import TheParameters from "./components/TheParameters.vue";
import TheOutline from "./components/TheOutline.vue";
import ThePreview from "./components/ThePreview.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheParameters,
    TheOutline,
    ThePreview,
    ParameterTextField,
    TheAwsDropdown
  }
};
</script>

<style scoped>
.column {
  float: left;
  width: 33%;
  height: 1000px;
}
</style>
