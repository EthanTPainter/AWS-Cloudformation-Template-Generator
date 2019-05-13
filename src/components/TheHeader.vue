<template>
  <div id="header">
    <h1>AWS CloudFormation Template Generator</h1>
    <p>Designed to provide a better user interface and experience when building AWS Cloudformation templates</p>
    <h2>Instructions</h2>
    <ul>
      <li>Left panel describes the parameters for your template</li>
      <li>Middle panel allows the user to select AWS resources, provide values, use parameters, etc.</li>
      <li>Right panel provides a preview of the CFT template</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
p {
  color: black;
}
</style>
