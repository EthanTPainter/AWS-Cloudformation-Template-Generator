<template>
  <div id="parameters">
    <the-parameter-title/>
    <div ref="container">
      <v-btn color="green" v-on:click="createParameterTextField($event)">Add</v-btn>
    </div>
    <ul>
      <div v-for="param in parameters" :key="param.id">
        <component
          v-bind:is="textFieldComponent"
          v-bind:identifier="count"
          v-bind:remove="removeParameter"
          v-bind:update="updateParameter"
        ></component>
      </div>
    </ul>
  </div>
</template>

<script>
import TheParameterTitle from "./header/TheParameterTitle";
import BaseParameterTextField from "./text-fields/BaseParameterTextField";
import { mapState } from "vuex";

export default {
  name: "TheParameters",
  components: {
    TheParameterTitle,
    BaseParameterTextField
  },
  data() {
    return {
      count: 0,
      textFieldComponent: "BaseParameterTextField"
    };
  },
  methods: {
    createParameterTextField() {
      if (this.parameters.count !== 0) {
        this.count++;
      }
      this.parameters.push({
        id: this.count,
        key: "",
        value: ""
      });
    },
    removeParameter(id) {
      this.$store.commit("removeParameter", id);
    },
    updateParameter(id, key, value) {
      const payload = { id, key, value };
      this.$store.commit("updateParameter", payload);
    }
  },
  computed: {
    ...mapState(["parameters"])
  }
};
</script>
