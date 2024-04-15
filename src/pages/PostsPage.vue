<template>
  <NavBar currentPage="shop"></NavBar>
  <div class="container">
    <div class="row my-2 gy-2">
      <div class="row row-cols-4">
        <div>
          <InputStandart
            placeholder="Search..."
            v-model="searchQuery"
          ></InputStandart>
        </div>
        <div>
          <SelectStandart
            v-model="selectedSort"
            :options="sortOptions"
          ></SelectStandart>
        </div>
      </div>

      <div class="col-2">
        <PostsForm @create="createPost"></PostsForm>
      </div>

      <div>
        <PostsList
          :posts="sortedAndSearchedPosts"
          @remove="removePost"
          v-if="!isLoadingData"
        ></PostsList>
        <div v-else class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div ref="observer" class="d-flex justify-content-center">
          <div
            class="spinner-grow text-primary"
            role="status"
            v-if="posts.length < 100 && searchQuery === ''"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="observer" v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostsForm from "@/components/PostsForm.vue";
import PostsList from "@/components/PostsList.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    PostsList,
    PostsForm,
    NavBar,
  },
  data() {
    return {
      posts: [],
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
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(
        (currentPost) => currentPost.id !== post.id
      );
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
