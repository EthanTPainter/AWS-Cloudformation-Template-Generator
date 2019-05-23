<template>
  <div class="temp-app">
    <the-resource-dropdown />
  </div>
</template>

<script>
import TheResourceDropdown from "./components/parameter/buttons/TheParameterButton";
import { store } from "./store/store";

export default {
  name: "TempApp",
  store: store,
  template: "TempApp",
  components: {
    TheResourceDropdown
  }
};
</script>
