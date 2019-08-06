<template>
  <article class="content" :class="{ 'is-mobile': isMobile }">
    <header class="display-2 article-title">{{ title }}</header>
    <md-content :content="html"></md-content>
  </article>
</template>

<script>
import MdContent from '~/components/MdContent';

export default {
  components: {
    MdContent
  },
  data() {
    return {
      title: '',
      introduction: '',
      html: ''
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  async asyncData({ params, app }) {
    const content = (await import(`~/articles/${params.name}.md`)).default;
    return app.$markdown(content);
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 30px 15px;
  max-width: 1200px;
  margin: 0 auto;
  &.is-mobile {
    padding: 15px;
  }
}
.article-title {
  margin-bottom: 40px;
}
</style>
