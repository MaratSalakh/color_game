<template>
  <div class="row row-cols-4">
    <div v-for="product in products" :key="product.id">
      <ProductsCard class="my-2" :product="product"></ProductsCard>
    </div>
  </div>
</template>

<script>
import ProductsCard from "./ProductCard.vue";

export default {
  components: { ProductsCard },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
