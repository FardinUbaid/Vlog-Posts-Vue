<template>
  <div v-if="post.title || post.body || post.image" class="post-preview">
    <h2>Live Preview</h2>
    <br />
    <PostCard :post="post" :showDelete="false" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  components: { PostCard },
  props: {
    post: Object,
  },
};
</script>
