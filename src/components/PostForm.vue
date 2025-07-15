<template>
  <form @submit.prevent="submitForm" class="post-form">
    <div class="form-group">
      <label>Title</label>
      <input v-model="title" placeholder="Enter title..." />
    </div>

    <div class="form-group">
      <label>Body</label>
      <textarea v-model="body" placeholder="Enter body..."></textarea>
    </div>

    <div class="form-group image-picker">
      <label>Select a cover image</label>
      <div class="image-options">
        <label
          v-for="(img, index) in imagePresets"
          :key="index"
          class="image-option"
        >
          <input
            type="radio"
            name="selectedImage"
            :value="img"
            v-model="selectedImage"
          />
          <img :src="img" :alt="'Image ' + (index + 1)" />
        </label>
      </div>
    </div>

    <button type="submit">Submit Post</button>
  </form>
</template>

<script>
import { ref, watch } from "vue";

export default {
  emits: ["submit", "updatePreview"],
  setup(_, { emit }) {
    const title = ref("");
    const body = ref("");
    const selectedImage = ref("");

    const imagePresets = Array.from(
      { length: 6 },
      (_, i) => `/img/${i + 1}.jpg`
    );

    watch([title, body, selectedImage], () => {
      emit("updatePreview", {
        title: title.value,
        body: body.value,
        image: selectedImage.value,
      });
    });

    const submitForm = () => {
      emit("submit", {
        title: title.value,
        body: body.value,
        image: selectedImage.value,
      });

      title.value = "";
      body.value = "";
      selectedImage.value = "";
    };

    return {
      title,
      body,
      selectedImage,
      imagePresets,
      submitForm,
    };
  },
};
</script>
