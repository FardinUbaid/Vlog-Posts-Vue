<template>
  <main>
    <h1>Blog Posts</h1>
    <button @click="$router.push({ name: 'CreatePost' })">
      Create New Post
    </button>

    <div v-if="loading">Loading posts...</div>

    <div v-else>
      <PostCard
        v-for="post in posts"
        :key="post.id || post.title"
        :post="post"
        @delete="postStore.deletePost(post.id)"
      />
    </div>
  </main>
</template>

<script>
import { onMounted } from "vue";
import { usePostStore } from "../store/postStore";
import { storeToRefs } from "pinia";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  setup() {
    const postStore = usePostStore();
    const { posts, loading } = storeToRefs(postStore);

    onMounted(() => {
      // Fetch posts only if posts array is empty
      if (!postStore.posts.length) {
        postStore.getPosts();
      }
    });

    return { postStore, posts, loading };
  },
};
</script>
