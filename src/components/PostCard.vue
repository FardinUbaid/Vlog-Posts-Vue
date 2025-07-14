<template>
  <div class="post-card">
    <h2 class="post-card__title">{{ post.title }}</h2>
    <p class="post-card__body">{{ post.body }}</p>
    <button class="post-card__delete-btn" @click="$emit('delete', post.id)">
      Delete
    </button>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
