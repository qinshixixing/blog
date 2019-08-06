<template>
  <v-app>
    <site-navigation></site-navigation>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <site-footer></site-footer>
  </v-app>
</template>

<script>
import SiteFooter from '~/components/SiteFooter';
import SiteNavigation from '~/components/SiteNavigation';

export default {
  components: {
    SiteFooter,
    SiteNavigation
  }
};
</script>
