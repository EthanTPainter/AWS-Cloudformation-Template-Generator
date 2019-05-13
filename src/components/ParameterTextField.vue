<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm2 md3>
            <v-text-field
              placeholder="Placeholder"
              outline
              color="blue"
              solo
              v-bind:hint="description"
            />
            <v-text-field placeholder="Text" outline color="purple" solo v-bind:hint="description"/>
          </v-flex>
          <v-flex xs12 sm2 md3>
            <v-text-field value="Property" readonly="true" type="text" outline light color="black"/>
            <v-text-field
              placeholder="Placeholder"
              type="text"
              outline
              light
              color="blue"
              hint="Put something here"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ParameterTextField",
  props: {
    description: {
      type: String,
      required: false,
      default: "Empty Description",
      description: "Provides the description for the AWS Property"
    }
  }
};
</script>

<style>
</style>
