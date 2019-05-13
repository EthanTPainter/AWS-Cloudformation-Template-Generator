<template>
  <div class="preview-button">
    <v-btn v-bind:color="buttonColor" v-on:click="toggleButtonColor">Preview</v-btn>
  </div>
</template>

<script>
export default {
  name: "ThePreviewButton",
  data() {
    return {
      buttonColor: "blue"
    };
  },
  methods: {
    toggleButtonColor() {
      if (this.buttonColor === "blue") {
        this.buttonColor = "gray";
      } else {
        this.buttonColor = "blue";
      }
    }
  }
};
</script>
