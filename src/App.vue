<template>
  <button @click="addLike">like</button>
  <button @click="addDislike">dislike</button>

  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>

  <Button @click="showDialog">Visible</Button>
  <MyDialog v-model:show="dialogVisible">
    <PostsForm @create="createPost"></PostsForm>
  </MyDialog>

  <PostsList :posts="posts" @remove="removePost"></PostsList>
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
      dialogVisible: false,
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
  },
};
</script>

<style></style>
