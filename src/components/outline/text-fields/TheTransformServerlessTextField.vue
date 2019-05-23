<template>
  <v-text-field v-model="text" label="Solo" placeholder="Transform" solo readonly></v-text-field>
</template>

<script>
export default {
  name: "TheTransformServerlessTextField",
  data() {
    return {
      text: "Transform"
    };
  }
};
</script>
