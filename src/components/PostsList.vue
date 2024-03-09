<template>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
