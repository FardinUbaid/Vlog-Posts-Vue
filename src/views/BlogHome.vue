<template>
  <div class="blog-home">
    <h1 class="blog-home__heading">Blog Posts</h1>

    <button
      class="blog-home__create-btn"
      @click="$router.push({ name: 'CreatePost' })"
    >
      Create New Post
    </button>

    <div v-if="!posts.length" class="blog-home__loading">Loading posts...</div>

    <div v-else class="blog-home__posts-list">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete="deletePost"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { usePostStore } from "../store/postStore";
import PostCard from "../components/PostCard.vue";

const postStore = usePostStore();
const { posts, fetchPosts, deletePost } = postStore;

onMounted(() => {
  if (!posts.length) {
    fetchPosts();
  }
});
</script>
