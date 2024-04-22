<template>
  <div class="card" style="width: 15rem; height: 15rem">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  mounted() {
    gsap.to(".animation", {
      duration: 2,
      scale: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.out",
      yPercent: 50,
    });
  },
};
</script>

<style lang="css" scoped>
.animation {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 100%;
  border-style: solid;
  border-color: violet;
}
</style>
