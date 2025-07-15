<template>
  <div class="post-card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <button v-if="showDelete" @click="$emit('delete', post.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    showDelete: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
