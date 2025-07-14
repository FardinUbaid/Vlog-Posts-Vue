<template>
  <div class="create-post">
    <h1 class="create-post__heading">Create New Post</h1>

    <PostForm @submit="submitPost" @updatePreview="updatePreview" />

    <PostPreview :post="preview" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { usePostStore } from "../store/postStore";
import { useRouter } from "vue-router";

import PostForm from "../components/PostForm.vue";
import PostPreview from "../components/PostPreview.vue";

const postStore = usePostStore();
const router = useRouter();

const preview = reactive({
  title: "",
  body: "",
});

const submitPost = async (post) => {
  await postStore.addPost(post);
  router.push({ name: "BlogHome" });
};

const updatePreview = (post) => {
  preview.title = post.title;
  preview.body = post.body;
};
</script>
