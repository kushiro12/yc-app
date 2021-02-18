<template>
  <v-app fluid>
    <v-container>
      <div class="bg"></div>
      <v-img dark :src="imagetop" width="100%">
        <div class="logo">
          <img src="~/assets/images/yclogo1.png" height="50px" />
        </div>
      </v-img>
    </v-container>

    <IndexMenu />

    <v-card class="pt-5">
      <v-container>
        <v-row>
          <v-col class="d-md-flex pa-2 justify-space-around">
            <v-card
              elevation="2"
              max-width="400"
              color="#10b901"
              href="https://lin.ee/hpYLiJg"
              dark
            >
              <v-img
                max-height="405"
                max-width="405"
                v-for="(carouselitem, i) in carouselitem"
                :key="i"
                :src="carouselitem.src"
              ></v-img>
              <v-card-title>LINE友だち登録でポスタープレゼント！</v-card-title>
            </v-card>

            <v-timeline dense>
              <v-timeline-item
                ><n-link to="/">2/18 トップページの更新を行いました</n-link>
              </v-timeline-item>
              <v-timeline-item
                ><n-link to="/newcontruct"
                  >2/18 新聞を購読したい方ページの更新を行いました</n-link
                >
              </v-timeline-item>
              <v-timeline-item
                ><n-link to="/form"
                  >2/18 継続購読ページの更新を行いました</n-link
                >
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
import IndexMenu from "~/components/IndexMenu";

export default {
  data() {
    return {
      carouselitem: [
        {
          src: require("@/assets/images/210204.png"),
        },
      ],

      imagetop: require("~/assets/images/topvue.png"),
    };
  },
  methods: {
    on() {},
  },
};
</script>


<style>
.address {
  justify-content: center;
}
.icon {
  position: relative;

  bottom: 1px;
  right: 3px;
}
.gmap {
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  padding-left: 100%;
  position: relative;
  margin: auto;
}
.gmap iframe {
  position: absolute;
  left: 30px;
  top: 50px;
  bottom: 0;
}
.topbtn {
  position: relative;
}
</style>



