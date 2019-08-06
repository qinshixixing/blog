<template>
  <v-footer class="grey darken-3 white--text" height="68">
    <v-flex class="text-center">
      Copyright &copy; {{ year }} qinshixixing.
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped></style>
