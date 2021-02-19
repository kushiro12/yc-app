<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="#2251a6"
      dark
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
      color="#2151a7"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>読売センター砂町</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless color="#2151a7" class="lighten-1" dark>
      <v-container id="google-maps" tag="section">
        <v-row justify="end">
          <v-col lg="6" md="6" sm="6" xs="6" align="center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7171351439147!2d139.82623681525882!3d35.68396638019371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888ee1aa281b5%3A0x457b4e2dc404545f!2z44CSMTM2LTAwNzMg5p2x5Lqs6YO95rGf5p2x5Yy65YyX56CC77yT5LiB55uu77yU4oiS77yT77yS!5e0!3m2!1sja!2sjp!4v1601017074562!5m2!1sja!2sjp&z=16"
              height="200"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            />
          </v-col>

          <v-col lg="6" md="6" sm="6" xs="6" align-self="center">
            <v-layout justify-center>
              <v-flex>
                <div class="address text-center">
                  <h3>読売センター砂町</h3>
                  <h4>店舗所在地</h4>

                  <p>
                    <v-icon small class="icon">home</v-icon
                    >東京都江東区北砂3-4-32
                  </p>
                  <p id="tel">
                    <v-icon small class="icon">mdi-phone</v-icon>03-3644-2921
                  </p>
                  <p><v-icon small class="icon">mdi-fax</v-icon>03-3644-2922</p>
                  <p>
                    <v-icon small class="icon">mdi-email</v-icon
                    >zzzbubuzzz@gmail.com
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>

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
    drawer: false,
    items: [
      { icon: "home", text: "ホーム", link: "/" },
      { icon: "edit", text: "新聞を購読したい方", link: "/newcontruct" },
      { icon: "edit", text: "継続購読される方", link: "/form" },
      { icon: "mdi-motorbike", text: "配達の一時停止", link: "/pause" },
      {
        icon: "mdi-package-variant",
        text: "古新聞の回収依頼",
        link: "/recycle",
      },
      {
        icon: "mdi-credit-card-check-outline",
        text: "お支払い方法の変更",
        link: "/payment",
      },
      { icon: "money", text: "日曜朝市開催中！", link: "/asaichi" },
      { icon: "mdi-cart-outline", text: "美味しいお米の通販", link: "/rice" },
      {
        icon: "mdi-cart-outline",
        text: "アクアクララのご注文",
        link: "/aquawater",
      },
    ],
  }),
};
</script>
