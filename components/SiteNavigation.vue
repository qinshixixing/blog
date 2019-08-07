<template>
  <nav>
    <v-navigation-drawer
      v-model="showDrawer"
      clipped
      fixed
      app
      :mini-variant="showMiniVariant"
      :mobile-break-point="mobileBreakPoint"
      width="280"
    >
      <v-list>
        <v-list-item class="hidden-md-and-up">
          <v-list-item-content class="flex-center title">
            {{ siteTitle }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="hidden-md-and-up flex-center mb-3">
          <v-list-item-avatar size="80">
            <v-img :src="avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item
          v-for="(item, index) in list"
          :key="index"
          :to="item.url"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="setNavStatus" />
      <v-avatar class="ml-2 mr-2 hidden-xs-only">
        <v-img :src="avatar"></v-img>
      </v-avatar>
      <v-toolbar-title class="ml-2">{{ siteTitle }}</v-toolbar-title>
      <v-toolbar-title class="subtitle-1 ml-5 hidden-sm-and-down">
        {{ signature }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="item in socialAccount"
        :key="item.type"
        text
        icon
        color="rgb(0, 0, 0, 0.87)"
        :href="item.url"
        target="_blank"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import avatar from '~/static/avatar.jpeg';

export default {
  name: 'SiteNavigation',
  data() {
    return {
      siteTitle: this.$config.title,
      signature: this.$config.signature,
      showDrawer: !this.$vuetify.breakpoint.smAndDown,
      pcShowMiniVariant: false,
      list: this.$config.navigationList,
      socialAccount: this.$config.socialAccount,
      avatar
    };
  },
  computed: {
    mobileBreakPoint() {
      return this.$vuetify.breakpoint.thresholds.sm;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    showMiniVariant() {
      if (this.isMobile) return false;
      return this.pcShowMiniVariant;
    }
  },
  methods: {
    setNavStatus() {
      if (this.isMobile) {
        this.showDrawer = !this.showDrawer;
      } else {
        this.pcShowMiniVariant = !this.pcShowMiniVariant;
      }
    }
  }
};
</script>

<style scoped>
.flex-center {
  justify-content: center;
}
</style>
