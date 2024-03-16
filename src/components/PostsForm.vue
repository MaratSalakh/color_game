<template>
  <form @submit.prevent>
    <h4>Creating post</h4>

    <InputStandart v-model="post.title" type="text" placeholder="title" />
    <InputStandart v-model="post.content" type="text" placeholder="content" />

    <ButtonStandart @click="createPost">Create</ButtonStandart>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        content: "",
      };
    },
  },
};
</script>

<style></style>
