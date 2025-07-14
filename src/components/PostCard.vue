<template>
  <div class="post-card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

    <button @click="$emit('delete', post.id)">Delete</button>
  </div>
</template>

<script>
defineProps({
  post: Object,
});
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
}
.post-card h2 {
  margin: 0 0 0.5em;
}
.post-card p {
  margin: 0 0 1em;
}
.post-card button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>
