<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.push('/')">NFTs</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button
              :class="{ 'nav-link': true, active: currentPage === 'home' }"
              aria-current="page"
              @click="$router.push('/')"
            >
              Home
            </button>
          </li>
          <li class="nav-item">
            <button
              :class="{ 'nav-link': true, active: currentPage === 'shop' }"
              @click="$router.push('/shop')"
            >
              Shop
            </button>
          </li>
        </ul>
        <div>
          <InputStandart
            placeholder="Search"
            :modelValue="searchQuery"
            @update:modelValue="setSearchQuery"
          ></InputStandart>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setSearchQuery: "main/setSearchQuery",
    }),
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.main.searchQuery,
    }),
    ...mapMutations({}),
  },
};
</script>

<style lang="scss" scoped></style>
