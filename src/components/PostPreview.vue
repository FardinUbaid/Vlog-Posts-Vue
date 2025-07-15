<template>
  <div v-if="post.title || post.body">
    <h2>Preview:</h2>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({ title: "", body: "" }),
    },
  },
};
</script>
