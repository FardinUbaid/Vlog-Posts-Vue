<template>
  <div class="post-card">
    <img
      v-if="post.image"
      :src="post.image"
      alt="Post Image"
      class="post-image"
    />

    <div class="post-content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>

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
