<template>
  <button @click="addLike">like</button>
  <button @click="addDislike">dislike</button>

  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>

  <InputStandart placeholder="Search..." v-model="searchQuery"></InputStandart>

  <div>
    <Button @click="showDialog">Create Post</Button>
    <SelectStandart
      v-model="selectedSort"
      :options="sortOptions"
    ></SelectStandart>
  </div>

  <MyDialog v-model:show="dialogVisible">
    <PostsForm @create="createPost"></PostsForm>
  </MyDialog>

  <PostsList
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isLoadingData"
  ></PostsList>
  <h3 v-else>Loading...</h3>
  <div ref="observer" class="observer"></div>
</template>

<script>
import axios from "axios";
import PostsForm from "@/components/PostsForm.vue";
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
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      sortOptions: [
        { value: "title", name: "Name sort" },
        { value: "body", name: "Description sort" },
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error!");
      } finally {
        this.isLoadingData = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Error!");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      treshhold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery)
      );
    },
  },
  watch: {},
};
</script>

<style>
.observer {
  height: 30px;
  width: 30px;
}
</style>
