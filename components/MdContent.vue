<template>
  <article class="md-content markdown-body" v-html="content"></article>
</template>

<script>
export default {
  name: 'MdContent',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss"></style>
