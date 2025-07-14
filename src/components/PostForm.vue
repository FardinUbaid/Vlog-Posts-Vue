<template>
  <form @submit.prevent="$emit('submit', { title, body })">
    <div>
      <input v-model="title" placeholder="Title" />
      <textarea v-model="body" placeholder="Body"></textarea>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const title = ref("");
    const body = ref("");

    watch([title, body], ([newTitle, newBody]) => {
      emit("updatePreview", {
        title: title.value,
        body: body.value,
      });
    });

    const emit = defineEmits(["submit", "updatePreview"]);

    return { title, body, emit };
  },
};
</script>
