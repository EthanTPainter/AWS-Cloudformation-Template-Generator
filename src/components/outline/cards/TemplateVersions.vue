<template>
  <div id="app">
    <div id="template-version">
      <the-cloudformation-version-text-field/>
      <template-format-version-select />
    </div>
    <div id="transform-version">
      <the-transform-serverless-version-text-field />
      <transform-serverless-select />
    </div>
  </div>
</template>

<script>
import TheTransformServerlessVersionTextField from "../text-fields/versions/TheTransformServerlessVersionTextField";
import TheCloudformationVersionTextField from "../text-fields/versions/TheCloudformationVersionTextField";

import TemplateFormatVersionSelect from "../selects/versions/TemplateFormatVersionSelect";
import TransformServerlessSelect from "../selects/versions/TransformServerlessSelect";

export default {
  name: "TemplateVersions",
  components: {
    TheTransformServerlessVersionTextField,
    TheCloudformationVersionTextField,
    TemplateFormatVersionSelect,
    TransformServerlessSelect
  }
};
</script>
