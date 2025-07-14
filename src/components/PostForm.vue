<template>
  <form class="post-form" @submit.prevent="handleSubmit">
    <input
      class="post-form__title"
      v-model="title"
      placeholder="Title"
      required
    />
    <textarea
      class="post-form__body"
      v-model="body"
      placeholder="Body"
      required
    ></textarea>
    <button class="post-form__submit-btn" type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue";

const title = ref("");
const body = ref("");

const emit = defineEmits(["submit", "updatePreview"]);

watch([title, body], () => {
  emit("updatePreview", { title: title.value, body: body.value });
});

const handleSubmit = () => {
  emit("submit", { title: title.value, body: body.value });

  title.value = "";
  body.value = "";
};
</script>
