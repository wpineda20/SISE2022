<template>
  <span v-if="validation.error || validation.$error" class="orange-text">
    <p class="mb-0 mt-1">
      <i class="material-icons">error_outline</i> {{ message }}
    </p>
  </span>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    validation: {
      type: Object,
      default: () => {
        return {
          $error: false,
          $params: {},
        };
      },
    },
  },
};
</script>

<style>
</style>

