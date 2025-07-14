<template>
  <div v-if="post.title || post.body" class="post-preview">
    <h2 class="post-preview__heading">Preview:</h2>
    <h3 class="post-preview__title">{{ post.title }}</h3>
    <p class="post-preview__body">{{ post.body }}</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
