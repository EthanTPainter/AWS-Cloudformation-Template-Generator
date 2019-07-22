<template>
  <div class="app">
    <v-container>
      <v-layout align-center>
        <v-flex xs12>
          <v-text-field solo v-bind:label="label" v-model="text" v-bind:hint="hint"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ResourceTextField",
  data() {
    return {
      text: ""
    };
  },
  props: {
    placeholder: {
      type: String,
      description: "Placeholder text in the text field",
      required: true
    },
    hint: {
      type: String,
      description: "Hint provided for the text field",
      required: true
    },
    label: {
      type: String,
      description: "The label associated with the text field",
      required: true
    }
  }
};
</script>
