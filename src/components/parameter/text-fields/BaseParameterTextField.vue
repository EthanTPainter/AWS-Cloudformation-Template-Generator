<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs3>
            <v-text-field
              type="string"
              placeholder="Parameter Key"
              outline
              color="blue"
              solo
              v-model="keyText"
              v-on:input="update(id, keyText, valueText)"
            />
          </v-flex>
          <v-flex xs7>
            <v-text-field
              type="string"
              placeholder="Parameter Value"
              outline
              color="blue"
              solo
              v-model="valueText"
              v-on:input="update(id, keyText, valueText)"
            />
          </v-flex>
          <v-flex xs2>
            <v-btn color="red" v-on:click="remove(id)">X</v-btn>
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
    identifier: {
      type: Number,
      required: true,
      description: "ID or identifier of the parameter pair"
    },
    remove: {
      type: Function,
      required: true,
      description: "Function for removing this component"
    },
    update: {
      type: Function,
      required: true,
      description: "Function for updating this component"
    }
  },
  data() {
    return {
      id: this.identifier,
      keyText: "",
      valueText: ""
    };
  }
};
</script>
