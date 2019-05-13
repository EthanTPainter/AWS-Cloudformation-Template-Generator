<template>
  <div id="parameters">
    <h1>Parameters</h1>
    <div class="row"> 
      <div class="key">
        <p><strong>Key</strong></p>
      </div>
      <div class="value">
        <p><strong>Value</strong></p>
      </div>
    </div>
    <h3>Expected Functionality</h3>
    <ul>
      <li>Should provide two empty text boxes for entering input</li>
      <li>After at lease one character is entered for the first key, another key/value text box combo should be made</li>
      <li>There should be a red X to the right of each value to remove the key/value pair</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheParameters"
}
</script>

<style scoped>
.key {
  float: left;
  width: 50%;
}
.value {
  float: right;
  width: 50%;
}
</style>
