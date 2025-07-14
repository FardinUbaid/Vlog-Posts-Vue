<template>
  <div v-if="post.title || post.body" class="preview">
    <h2>Preview:</h2>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>
<script>
export default {
  setup() {
    const props = defineProps({
      post: Object,
    });
    return { props };
  },
};
</script>
