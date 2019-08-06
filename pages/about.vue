<template>
  <v-layout
    id="about"
    wrap
    justify-space-between
    :class="{ 'is-mobile': isMobile }"
  >
    <v-flex class="id-card">
      <v-card width="330px">
        <v-img class="white--text" width="330px" height="126px" :src="avatar">
          <v-card-title class="black--text">{{ $config.author }}</v-card-title>
          <v-card-text>{{ $config.signature }}</v-card-text>
        </v-img>
        <v-card-text>{{ $config.description }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="social-account">
          <v-flex>
            <v-btn
              v-for="item in webSocialAccount"
              :key="item.type"
              text
              icon
              color="black"
              :href="item.url"
              target="_blank"
              height="3em"
              width="3em"
            >
              <v-icon size="2.5em" class="web-social-account">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn
              text
              color="indigo"
              :href="email.url"
              height="40px"
              target="_blank"
              class="email"
            >
              <v-icon size="2em" left>contact_mail</v-icon>Contact Me
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex class="content">
      <md-content :content="htmlContent"></md-content>
    </v-flex>
  </v-layout>
</template>

<script>
import MdContent from '~/components/MdContent';
import avatar from '~/static/totalAvatar.JPG';
import content from '~/README.md';

export default {
  components: {
    MdContent
  },
  data() {
    return {
      avatar,
      socialAccount: this.$config.socialAccount,
      htmlContent: ''
    };
  },
  computed: {
    webSocialAccount() {
      return this.socialAccount.filter((account) => account.type !== 'email');
    },
    email() {
      return this.socialAccount.find((account) => account.type === 'email');
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  asyncData({ app }) {
    return {
      htmlContent: app.$markdown(content).html
    };
  }
};
</script>

<style scoped lang="scss">
#about {
  padding: 30px 20px;
  &.is-mobile {
    padding: 15px 0;
  }
}
.id-card {
  flex-basis: 330px;
  flex-grow: 0;
  padding: 0 15px;
  margin-bottom: 30px;
  .social-account {
    padding: 8px 12px;
    flex-direction: column;
    align-items: flex-start;
    .web-social-account:hover {
      transform: scale(1.1);
    }
    .email {
      margin-top: 5px;
      padding: 0 15px;
    }
  }
}
.content {
  padding: 0 15px;
  flex-basis: 460px;
}
</style>
