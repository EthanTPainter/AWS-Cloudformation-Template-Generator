<template>
  <div class="outline-button">
    <v-btn v-bind:color="buttonColor" v-on:click="toggleButtonColor">Outline</v-btn>
  </div>
</template>

<script>
export default {
  name: "TheOutlineButton",
  data() {
    return {
      buttonColor: "green"
    };
  },
  methods: {
    toggleButtonColor() {
      if (this.buttonColor === "green") {
        this.buttonColor = "gray";
      } else {
        this.buttonColor = "green";
      }
    }
  }
};
</script>
