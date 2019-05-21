<template>
  <div id="header">
    <h1>AWS CloudFormation Template Generator</h1>
    <p>Designed to provide a better user interface and experience when building AWS Cloudformation templates</p>
    <div id="instructions">
      <the-instructions/>
    </div>
  </div>
</template>

<script>
import TheInstructions from "./TheInstructions";

export default {
  name: "TheHeader",
  components: {
    TheInstructions
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
p {
  color: black;
}
</style>
