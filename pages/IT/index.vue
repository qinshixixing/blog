<template>
  <main>
    <v-layout class="list" wrap>
      <v-flex
        v-for="item in list"
        :key="item.title"
        class="item"
        xs12
        sm6
        md4
        lg3
      >
        <v-card width="300px" class="item-content">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.introduction }}</v-card-text>
          <v-divider class="to-article-divider"></v-divider>
          <v-card-actions class="action-blank"></v-card-actions>
          <v-card-actions class="to-article">
            <v-flex>
              <v-btn
                text
                color="indigo"
                height="40px"
                @click="toArticleDetail(item.title)"
              >
                查看文章
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  async asyncData({ app }) {
    const getArticles = app.$articleFiles.map(async (file) => {
      let content = (await import(`~/articles/${file}`)).default;
      content = app.$markdown(content);
      Reflect.deleteProperty(content, 'html');
      return content;
    });
    return {
      list: await Promise.all(getArticles)
    };
  },
  methods: {
    toArticleDetail(name) {
      this.$router.push({
        path: '/article',
        params: {
          name
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
$linkHeight: 56px;
.list {
  .item {
    display: flex;
    justify-content: center;
    margin: 18px 0;
    .item-content {
      margin: 0 5px;
      .to-article-divider {
        position: absolute;
        bottom: $linkHeight;
        width: 100%;
      }
      .to-article {
        position: absolute;
        bottom: 0;
      }
      .action-blank {
        height: $linkHeight;
      }
    }
  }
}
</style>
