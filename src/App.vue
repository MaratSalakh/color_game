<template>
  <button @click="addLike">like</button>
  <button @click="addDislike">dislike</button>

  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>

  <PostsForm @create="createPost"></PostsForm>
  <PostsList :posts="posts"></PostsList>
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
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style></style>
