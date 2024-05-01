<template>
  <div class="card" style="width: 15rem; height: 15rem">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <label for="customRange1" class="form-label">Select speed</label>
      <input type="range" class="form-range" id="animationSpeed" />
      <div class="d-flex justify-content-center align-items-center h-50">
        <div class="animation"></div>
      </div>
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
}
</style>
