<template>
  <div id="cloudformation-version">
    <v-app>
      <v-flex xs4>
        <v-text-field v-model="property" label="Solo" placeholder="Transform" solo readonly></v-text-field>
      </v-flex>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TheCloudformationVersionTextField",
  data() {
    return {
      property: "AWSTemplateFormatVersion"
    };
  }
};
</script>
