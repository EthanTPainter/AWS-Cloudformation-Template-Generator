<template>
  <div id="cloudformation-version">
    <v-container>
      <v-layout warp align-center>
        <v-flex xs12>
          <v-text-field v-model="property" label="Solo" placeholder="Transform" solo readonly></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
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
