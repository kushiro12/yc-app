<template>
  <v-app>
    <h2 class="mt-6">お申し込み頂きありがとうございます。</h2>
    <div>
      <v-banner />
      <v-container>
        <v-row>
          <v-col>
            <v-img
              :src="sendmail"
              :lazy-src="sendmail"
              max-height="100px"
              mx-auto
              contain
            >
            </v-img>
            <h4 class="mt-6">確認メールを送信いたしました。</h4>
            <div>
              <p class="mt-6">
                ご記入されたお客様のメールアドレスに受信確認のための自動返信メールが送信されます。
              </p>
              <p class="ma-6">
                24時間以内に自動返信メールが届かない場合には
                お手数ですが再度お申し込みいただくかこちらまでご連絡ください
              </p>

              <p class="mx-auto">読売センター砂町 03-3644-2921</p>
              <n-link to="/" class="back text-justify-center"
                >トップへ戻る</n-link
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-banner />
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
                    :lazy-src="giantspos"
                    :src="giantspos"
                  ></v-img>
                  <v-card-title>LINE友だち登録はこちら</v-card-title>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      sendmail: require("~/assets/images/contact.png"),
      giantspos: require("~/assets/images/210204.png"),
    };
  },
};
</script>
<style >
.back {
  text-align: center;
}
h2 {
  text-align: center;
}
p,
h4 {
  text-align: center;
}
</style>