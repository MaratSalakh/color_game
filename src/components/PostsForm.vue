<template>
  <form @submit.prevent>
    <input v-model="post.title" type="text" placeholder="title" />
    <input v-model="post.content" type="text" placeholder="content" />

    <button @click="createPost">Создать</button>
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
