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
    <v-card>
      <v-container id="google-maps" fluid tag="section">
        <v-row justify="end">
          <v-col lg="6" md="6" sm="6" xs="6" align="center">
            <v-card-text class="px-0 pb-0">
              <v-sheet title="Satellite Map" class="px-5 py-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7171351439147!2d139.82623681525882!3d35.68396638019371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888ee1aa281b5%3A0x457b4e2dc404545f!2z44CSMTM2LTAwNzMg5p2x5Lqs6YO95rGf5p2x5Yy65YyX56CC77yT5LiB55uu77yU4oiS77yT77yS!5e0!3m2!1sja!2sjp!4v1601017074562!5m2!1sja!2sjp&z=16"
                  height="200"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen
                />
              </v-sheet>
            </v-card-text>
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
    </v-card>

    <IndexMenu />
  </v-app>
</template>
<script>
import IndexMenu from "~/components/IndexMenu";

export default {
  data() {
    return {
      title: "タイトルタグのテストページ",

      items: [
        {
          color: "warning",
          link: "/coupon",
          slide: "毎月お得な朝一開催中！",
        },
        {
          color: "pink darken-2",
          link: "/trial",
          slide: "読売中高生新聞 お試し無料！",
        },
      ],
      imagetop: require("~/assets/images/topvue.png"),
    };
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



