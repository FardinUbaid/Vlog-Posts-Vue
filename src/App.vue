<template>
  <div>
    <nav class="main-nav">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/create" exact-active-class="active"
        >Create Post</router-link
      >
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>
