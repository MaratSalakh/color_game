<template>
  <div>
    <div>Title: {{ post.title }}</div>
    <div>Content: {{ post.body }}</div>
    <ButtonStandart @click="$emit('remove', post)">Delete</ButtonStandart>
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
