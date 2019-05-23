<template>
  <div>
    <v-app id="cloudformation-version">
      <v-card>
        <v-card-text>
          <v-autocomplete
            v-model="model"
            placeholder="AWS Template Format Version"
            v-bind:items="options"
            persistent-hint
          >
            <template v-slot:append-outer>
              <v-btn color="success">CREATE</v-btn>
            </template>
          </v-autocomplete>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TheCloudformationVersionDropdown",
  data() {
    return {
      model: "",
      options: ["Name1", "Name2", "Name3", "Name4"]
    };
  }
};
</script>
