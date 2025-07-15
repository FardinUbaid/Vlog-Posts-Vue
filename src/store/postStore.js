import { defineStore } from "pinia";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
    loading: false,
  }),
  getters: {
    firstTen() {
      return this.posts.slice(0, 10);
    },
    totalCount() {
      return this.posts.length;
    },
  },
  actions: {
    async getPosts() {
      this.loading = true;
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        const imagePresets = Array.from(
          { length: 6 },
          (_, i) => `/img/${i + 1}.jpg`
        );
        this.posts = data.slice(0, 10).map((post) => ({
          ...post,
          image: imagePresets[Math.floor(Math.random() * imagePresets.length)],
        }));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async addPost(post) {
      this.posts.unshift(post);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
        const data = await res.json();

        this.posts[0] = { ...post, ...data };
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },

    async deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id);
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
  },
});
