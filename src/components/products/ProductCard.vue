<template>
  <div class="card" style="width: 15rem; height: 15rem">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <span class="card-text">{{ product.description }}</span>
      <div class="d-flex justify-content-center align-items-center h-50">
        <div class="animation"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.main.products,
    }),
  },
  watch: {
    products() {
      this.changeAnimation();
    },
  },
};
</script>

<style lang="css" scoped></style>
