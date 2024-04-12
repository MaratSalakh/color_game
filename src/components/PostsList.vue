<template>
  <h3 class="mt-">List of users</h3>
  <div v-if="posts.length > 0">
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    ></PostItem>
  </div>
  <h3 v-else>List is empty</h3>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
