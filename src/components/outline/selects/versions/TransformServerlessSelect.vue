<template>
  <div id="transform-serverless">
    <v-app>
      <v-flex xs3>
        <v-select
          v-bind:items="items"
          v-model="selectedItem"
          box
          light
          solo
          no-data-text="No Transform Serverless Version found"
          placeholder="Transform Serverless Version"
          required
        ></v-select>
      </v-flex>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TransformServerlessSelect",
  data() {
    return {
      selectedItem: "",
      items: ["AWS::Serverless-2016-10-31"]
    };
  }
};
</script>
