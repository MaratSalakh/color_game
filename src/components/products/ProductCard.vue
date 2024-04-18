<template>
  <div class="card" style="width: 15rem; height: 15rem">
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <p class="card-text">
        {{ product.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
