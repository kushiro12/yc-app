<template>
  <v-app fluid>
    <v-container>
      <div class="bg"></div>
      <v-img dark :lazy-src="imagetop" :src="imagetop" width="100%">
        <div class="logo">
          <img src="~/assets/images/yclogo1.png" height="50px" />
        </div>
      </v-img>
    </v-container>
    <v-card class="pt-5">
      <v-container>
        <v-row>
          <v-col>
            <div class="giantsposter">
              <div>
                <h2>限定100本非売品ポスターGIANTS PRIDE2021</h2>
                <h3>
                  ここでしか手に入らない非売品ポスターを期間限定で配布中！
                </h3>
                <h3>お申し込みはLINEから受付中！</h3>
              </div>
              <!-- <v-img
                class="mx-auto"
                :lazy-src="giants"
                :src="giants"
                max-height="300"
                max-width="300"
                contain
              ></v-img> -->

              <v-card
                class="mx-auto"
                elevation="2"
                max-width="400"
                max-height="470"
                color="#10b901"
                href="https://lin.ee/hpYLiJg"
                dark
              >
                <v-img
                  max-height="405"
                  max-width="405"
                  v-for="(carouselitem, i) in carouselitem"
                  :key="i"
                  :lazy-src="carouselitem.src"
                  :src="carouselitem.src"
                ></v-img>
                <v-card-title>LINE友だち登録はこちら</v-card-title>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <IndexMenu />

    <v-card class="mt-5">
      <v-timeline dense>
        <v-timeline-item
          ><n-link to="/">3/5 トップページの更新を行いました</n-link>
        </v-timeline-item>
        <v-timeline-item
          ><n-link to="/newcontruct"
            >2/19 新聞を購読したい方ページの更新を行いました</n-link
          >
        </v-timeline-item>
        <v-timeline-item
          ><n-link to="/form">2/19 継続購読ページの更新を行いました</n-link>
        </v-timeline-item>
      </v-timeline>
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
.giantsposter {
  color: #f27900;
  text-align: center;
}

p {
  text-align: center;
}
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



