<template>
  <button @click="addLike">like</button>
  <button @click="addDislike">dislike</button>

  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>

  <Button @click="showDialog">Visible</Button>
  <MyDialog v-model:show="dialogVisible">
    <PostsForm @create="createPost"></PostsForm>
  </MyDialog>

  <PostsList
    :posts="posts"
    @remove="removePost"
    v-if="!isLoadingData"
  ></PostsList>
  <h3 v-else>Loading...</h3>
</template>

<script>
import axios from "axios";
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
      posts: [],
      dialogVisible: false,
      isLoadingData: false,
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
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(
        (currentPost) => currentPost.id !== post.id
      );
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isLoadingData = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error!");
      } finally {
        this.isLoadingData = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style></style>
