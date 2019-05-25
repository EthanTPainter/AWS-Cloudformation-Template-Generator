<template>
  <div class="parameter-button">
    <v-app>
      <v-content>
        <v-layout row wrap>
          <v-flex xs2>
            <v-btn v-bind:color="buttonColor" v-on:click="toggleButtonColor">Parameters</v-btn>
          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
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
