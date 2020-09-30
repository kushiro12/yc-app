<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>

          <v-list-item v-else :key="item.text" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      flat
      color="white"
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>読売センター砂町</span>
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
      { icon: "edit", text: "お試し購読", link: "/trial" },
    ],
  }),
};
</script>
