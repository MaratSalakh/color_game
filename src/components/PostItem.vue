<template>
  <div>
    <div>{{ post.title }}</div>
    <div>{{ post.content }}</div>
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
