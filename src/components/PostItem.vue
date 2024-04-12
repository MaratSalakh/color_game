<template>
  <div class="card mb-2">
    <div class="card-body">
      <div>Title: {{ post.title }}</div>
      <div>Content: {{ post.body }}</div>
      <ButtonStandart @click="$emit('remove', post)">Delete</ButtonStandart>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
