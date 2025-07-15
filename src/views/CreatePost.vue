<template>
  <main>
    <h1>Create New Post</h1>
    <PostForm @submit="handleSubmit" @updatePreview="updatePreview" />
    <h2>Preview:</h2>
    <PostCard :post="preview" :showDelete="false" />
  </main>
</template>

<script>
import { ref } from "vue";
import { usePostStore } from "../store/postStore";
import { useRouter } from "vue-router";
import PostForm from "../components/PostForm.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: { PostForm, PostCard },
  setup() {
    const preview = ref({ title: "", body: "" });
    const postStore = usePostStore();
    const router = useRouter();

    const updatePreview = (post) => {
      preview.value = post;
    };

    const handleSubmit = async (post) => {
      await postStore.addPost(post);
      router.push({ name: "BlogHome" });
    };

    return { preview, updatePreview, handleSubmit };
  },
};
</script>
