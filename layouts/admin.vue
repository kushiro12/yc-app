<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#2887e6"
      hide-on-scroll
      dark
    >
      <v-toolbar-title>
        <span>読売センター砂町 管理画面</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      dark
      padless
      color="#2887e6"
      class="lighten-1 white--text text-center"
    >
      <v-col cols="12">
        <v-card-text class="white--text">
          <div class="shopdata">
            <!-- <h3>読売センター砂町</h3> -->
          </div>
        </v-card-text>
        <v-divider></v-divider>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Vuetify from "vuetify/lib";
export default {
  props: {
    source: String,
  },
  data: () => ({
    dialog: null,
    drawer: null,
    items: [
      { icon: "home", text: "ホーム", link: "/" },
      { icon: "edit", text: "ご契約更新", link: "/form" },
      { icon: "edit", text: "配達の一時停止", link: "/pause" },
      {
        icon: "edit",
        text: "古新聞 段ボールの回収",
        link: "/recycle",
      },
      { icon: "edit", text: "お支払い方法の変更", link: "/payment" },
      { icon: "money", text: "特別クーポン", link: "/coupon" },
      { icon: "money", text: "おすすめ通販", link: "/ycsec" },
    ],
  }),
};
</script>
