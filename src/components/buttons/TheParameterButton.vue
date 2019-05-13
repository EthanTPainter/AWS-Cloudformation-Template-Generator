<template>
  <div class="parameter-button">
    <v-btn v-bind:color="buttonColor" v-on:click="toggleButtonColor">Parameters</v-btn>
  </div>
</template>

<script>
export default {
  name: "TheParameterButton",
  data() {
    return {
      buttonColor: "red"
    };
  },
  methods: {
    toggleButtonColor() {
      if (this.buttonColor === "red") {
        this.buttonColor = "gray";
      } else {
        this.buttonColor = "red";
      }
    }
  }
};
</script>
