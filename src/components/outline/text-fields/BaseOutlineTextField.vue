<template>
  <div id="app">
    <v-app>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-text-field placeholder="Value" outline color="blue" v-bind:hint="description" />
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "BaseOutlineTextField",
  props: {
    description: {
      type: String,
      required: true,
      default: "Empty Description",
      description: "Provides the description for the AWS Property"
    },
    key: {
      type: String,
      required: true,
      default: "Parameter Variable Name",
      description: "Name of the Parameter"
    }
  }
};
</script>
