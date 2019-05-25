<template>
  <v-app id="app">
    <v-flex xs4>
      <v-text-field
        v-model="text"
        label="Solo"
        placeholder="Transform"
        solo
        readonly
      ></v-text-field>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: "TheTransformServerlessVersionTextField",
  data() {
    return {
      text: "Transform"
    };
  }
};
</script>
