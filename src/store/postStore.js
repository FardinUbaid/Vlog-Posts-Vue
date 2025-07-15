import { defineStore } from "pinia";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
    loading: false,
  }),
  getters: {
    //getting posts with a specific property, adaptable as needed
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
        this.posts = data.slice(0, 10);
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
        // Optionally update the post with returned id
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
    //toggle fav method if needed to add a "favorite" feature
    // async toggleFav(id) {
    //   const post = this.posts.find((p) => p.id === id);
    //   if (post) post.isFav = !post.isFav;
    //   try {
    //     await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ isFav: post.isFav }),
    //     });
    //   } catch (error) {
    //     console.error("Error toggling favorite:", error);
    //   }
    // },
  },
});
