<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="Title" />
    <textarea v-model="body" placeholder="Body"></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref, watch } from "vue";

export default {
  emits: ["submit", "updatePreview"],
  setup(props, { emit }) {
    const title = ref("");
    const body = ref("");

    watch([title, body], () => {
      emit("updatePreview", { title: title.value, body: body.value });
    });

    function submitForm() {
      emit("submit", { title: title.value, body: body.value });
      title.value = "";
      body.value = "";
    }

    return { title, body, submitForm };
  },
};
</script>
