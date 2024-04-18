<template>
  <NavBar currentPage="home"></NavBar>
  <div class="container">
    <div class="row my-2">
      <div class="col-3">
        <SelectStandart
          :modelValue="selectedSort"
          @update:modelValue="setSelectedSort"
          :options="sortOptions"
        ></SelectStandart>
      </div>
      <div>
        <ProductsSlider :products="sortedAndSearchedProducts"></ProductsSlider>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductsSlider from "@/components/products/ProductsSlider.vue";

import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
  components: {
    NavBar,
    ProductsSlider,
  },
  methods: {
    ...mapMutations({
      setSelectedSort: "main/setSelectedSort",
    }),
    ...mapActions({
      fetchProducts: "main/fetchProducts",
    }),
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapState({
      isLoadingData: (state) => state.main.isLoadingData,
      selectedSort: (state) => state.main.selectedSort,
      searchQuery: (state) => state.main.searchQuery,
      products: (state) => state.main.products,
      sortOptions: (state) => state.main.sortOptions,
    }),
    ...mapGetters({
      sortedAndSearchedProducts: "main/sortedAndSearchedProducts",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
