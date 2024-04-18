<template>
  <div class="row row-cols-4" v-if="!isLoadingData">
    <div v-for="product in products" :key="product.id">
      <ProductsCard class="my-2" :product="product"></ProductsCard>
    </div>
  </div>
  <div class="row row-cols-4" v-else>
    <div
      v-for="card in cards"
      :key="card"
      class="card m-2"
      style="width: 15rem; height: 15rem"
      aria-hidden="true"
    >
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a
          class="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCard from "./ProductCard.vue";

export default {
  components: { ProductsCard },
  data() {
    return { cards: [] };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    arrayForCards() {
      for (let i = 0; i < 10; i += 1) {
        this.cards.push(i);
      }
    },
  },
  computed: {
    isLoadingData() {
      return this.$store.state.main.isLoadingData;
    },
  },
  mounted() {
    this.arrayForCards();
  },
};
</script>

<style lang="scss" scoped></style>
