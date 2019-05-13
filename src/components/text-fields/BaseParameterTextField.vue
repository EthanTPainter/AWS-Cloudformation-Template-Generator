<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs3>
            <v-text-field
              placeholder="Placeholder"
              outline
              color="blue"
              solo
              v-bind:hint="description"
            />
          </v-flex>
          <v-flex xs5>
            <v-text-field placeholder="Parameter Value" outline color="blue" solo/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "BaseParameterTextField",
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

<style>
</style>
