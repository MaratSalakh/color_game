<template>
  <button @click="addLike">like</button>
  <button @click="addDislike">dislike</button>

  <PostsForm></PostsForm>
  <PostsList :posts="posts"></PostsList>

  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>
</template>

<script>
import PostsForm from "./components/PostsForm.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  components: {
    PostsList,
    PostsForm,
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
        { id: 1, title: "post1", content: 1 },
        { id: 2, title: "post2", content: 2 },
        { id: 3, title: "post3", content: 3 },
      ],
      title: "",
      content: "",
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
    createPost() {
      this.posts.push({
        id: Date.now(),
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style></style>
