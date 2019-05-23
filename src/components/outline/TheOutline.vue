<template>
  <div id="outline">
    <h1>Outline</h1>
    <div class="dropdown">
      <custom-component />
    </div>
    <ul>
      <li>Should provide a dropdown for users to select AWS Resources</li>
      <li>When a resource is selected, it should be automatically added below</li>
      <li>Required inputs should have a specific mark/icon on or in the text box</li>
      <li>Optional inputs should be presented</li>
      <li>Should be able to remove or delete AWS resources (Red X to the right?)</li>
    </ul>
  </div>
</template>

<script>
import CustomComponent from "./dropdowns/TheAwsDropdown";
export default {
  name: "TheOutline",
  components: {
    CustomComponent
  },
  data() {
    return {
      inputName: "",
      options: [],
      placeholder: "PlaceholderXYZ",
      maxItem: 2
    };
  }
};
</script>

<style scoped>
</style>
