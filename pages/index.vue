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



