<template>
  <div id="template-version">
    <v-app>
      <v-flex xs3>
        <v-select
          v-bind:items="items"
          v-model="selectedItem"
          box
          light
          solo
          no-data-text="No Template Format Versions found"
          placeholder="AWS Template Format Version"
          required
        ></v-select>
      </v-flex>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "TemplateFormatVersionSelect",
  data() {
    return {
      selectedItem: "",
      items: ["2010-09-09"]
    };
  }
};
</script>
