import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [],
  }),

  actions: {
    async fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data.slice(0, 10);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },

    async addPost(newPost) {
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );

        const createdPost = { ...res.data, ...newPost };
        this.posts.unshift(createdPost);
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },

    async deletePost(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.posts = this.posts.filter((post) => post.id !== id);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
  },
});
