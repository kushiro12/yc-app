<template>
  <v-app>
    <v-card>
      <v-container max-width="1200" class="mx-auto">
        <v-row dense>
          <v-col v-for="(item, i) in items" :key="i" md="6" cols="12">
            <v-card
              :color="item.color"
              :to="item.link"
              href="https://lin.ee/hpYLiJg"
              dark
            >
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
        color: "#10b901",
        title: "LINE友だち登録でジャイアンツのポスター(非売品)をプレゼント！",
        subtitle: "友だち登録はこちら",
      },

      {
        color: "#2151a7",
        title: "新聞を購読したい方",
        subtitle: "新たなご購読はこちら",
        link: "/newcontruct",
      },
      {
        color: "#2151a7",
        title: "ご契約更新フォーム",
        subtitle: "購読継続される方",
        link: "/form",
      },
      {
        color: "#e50213",
        title: "読み終わった新聞の回収依頼",
        subtitle: "古新聞、段ボールの回収はこちら",
        link: "/recycle",
      },
      {
        color: "#e50213",
        title: "お出かけになる際には",
        subtitle: "配達の一時停止はこちら",
        link: "/pause",
      },

      {
        color: "#2151a7",
        title: "お支払い方法を変更されたい方",
        subtitle: "お支払い方法の変更はこちら",
        link: "/payment",
      },
      {
        color: "#2151a7",
        title: "ジャイアンツが勝った翌日新聞",
        subtitle: "お試しで７勝分をお届け！",
        link: "/trial1",
      },
      {
        color: "#e50213",
        title: "連載コラムセレクト読み切り新聞",
        subtitle: "お試しでご興味のあるコラムをお届けします",
        link: "/trial2",
      },
      {
        color: "#e50213",
        title: "土日だけ新聞",
        subtitle: "土日限定のお試し新聞",
        link: "/trial3",
      },
      {
        color: "#2151a7",
        title: "読売KODOMO新聞",
        subtitle: "お試し読売KODOMO新聞",
        link: "/trial4",
      },
      {
        color: "#2151a7",
        title: "読売中高生新聞",
        subtitle: "お試し読売中高生新聞",
        link: "/trial5",
      },
      {
        color: "#e50213",
        title: "美味しいお米の通販",
        subtitle: "特別なクーポンはこちら",
        link: "/rice",
      },
      {
        color: "#e50213",
        title: "アクアクララご注文をしたい方",
        subtitle: "お得な通販はこちら",
        link: "/aquawater",
      },
      {
        color: "#2151a7",
        title: "日曜朝市開催中！",
        subtitle: "",
        link: "/asaichi",
      },
    ],
  }),
};
</script>