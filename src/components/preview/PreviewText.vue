<template>
  <div id="preview-text">
    <p>{{ content }} </p>
  </div>
</template>

<script>
export default {
  name: "ThePreviewText",
  props: {
    content: {
      type: String,
      required: true,
      default: "Preview Text",
      description: "Text for the AWS CFT Preview"
    }
  }
};
</script>
