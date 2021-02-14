<template>
  <v-app>
    <v-card>
      <v-container max-width="1200" class="mx-auto">
        <v-row dense>
          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card :color="item.color" :to="item.link" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="item.subtitle"
                    class="title font-weight-medium"
                  ></v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="90">
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#e50213",
        // src: require("~/assets/images/2742729.jpg"),
        title: "新聞を購読したい方",
        subtitle: "新たなご購読はこちら",
        link: "/newcustomers",
      },
      {
        color: "#2151a7",
        // src: require("~/assets/images/form.jpg"),
        title: "ご契約更新フォーム",
        subtitle: "購読継続される方",
        link: "/form",
      },
      {
        color: "#e50213",
        // src: require("~/assets/images/recycle.jpg"),
        title: "読み終わった新聞の回収依頼",
        subtitle: "古新聞、段ボールの回収はこちら",
        link: "/recycle",
      },
      {
        color: "#2151a7",
        // src: require("~/assets/images/pause.jpg"),
        title: "お出かけになる際には",
        subtitle: "配達の一時停止はこちら",
        link: "/pause",
      },

      {
        color: "#e50213",
        // src: require("~/assets/images/payment.jpg"),
        title: "お支払い方法を変更されたい方",
        subtitle: "お支払い方法の変更はこちら",
        link: "/payment",
      },
      {
        color: "#2151a7",
        // src: require("~/assets/images/coupon.jpg"),
        title: "美味しいお米の通販",
        subtitle: "特別なクーポンはこちら",
        link: "/rice",
      },
      {
        color: "#e50213",
        // src: require("~/assets/images/ycsec.jpg"),
        title: "アクアクララご注文をしたい方",
        subtitle: "お得な通販はこちら",
        link: "/aquawater",
      },
      {
        color: "#2151a7",
        // src: require("~/assets/images/63.jpg"),
        title: "お試し一週間",
        subtitle: "お試し購読はこちら",
        link: "/trial",
      },
    ],
  }),
};
</script>