<template>
  <div class="container">
    <h1>Blog Posts</h1>

    <button @click="$router.push({ name: 'create' })">Create New Post</button>

    <div v-if="!usePostStore.posts.length">Loading posts...</div>

    <div v-else class="posts-list">
      <PostCard
        v-for="post in usePostStore.posts"
        :key="post.id"
        :post="post"
        @delete="usePostStore.deletePost(post.id)"
      />
    </div>
  </div>
</template>

<script>
import { usePostStore } from "@/stores/post";
import { onMounted } from "vue";
import PostCard from "@/components/PostCard.vue";

export default {
  setup() {
    const usePostStore = usePostStore();
    const { posts, fetchPosts, deletePost } = usePostStore;

    onMounted(() => {
      if (!posts.length) {
        fetchPosts();
      }
    });

    return { usePostStore, posts, deletePost };
  },
};
</script>
