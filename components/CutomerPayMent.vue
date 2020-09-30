
<template>
  <v-app>
    <div class="box17">
      <h3>お支払い方法の変更</h3>
      <p>
        読売センター砂町では新聞購読代金のお支払い方法として下記の方法を選択できます。
        「訪問集金」 「銀行振替」 「ゆうちょ銀行振替」 「クレジット決済」
        「コンビニ支払い」
        変更希望の方は入力フォームより必要事項を入力ください。
        必要書類をお届けにあがります。
      </p>
    </div>
    <h3 class="title1">ご入力フォーム</h3>
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <div class="form">
        <v-card>
          <v-container>
            <v-col cols="12">
              <ValidationProvider
                v-slot="{ errors }"
                name="お名前"
                rules="required"
              >
                <v-text-field
                  class="name"
                  label="お名前(必須)"
                  placeholder="読売太郎"
                  v-model="name"
                  :error-messages="errors"
                  required
                ></v-text-field>
                <p v-show="errors.length" class="error_message">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <ValidationProvider
                v-slot="{ errors }"
                name="ご住所"
                rules="required"
              >
                <v-text-field
                  class="address"
                  label="ご住所(必須)"
                  placeholder="江東区〇〇"
                  v-model="address"
                  :error-messages="errors"
                ></v-text-field>
                <p v-show="errors.length" class="error_message">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <v-text-field
                class="address2"
                label="マンション名、部屋番号など(必須)"
                placeholder="〇〇マンション 111"
                v-model="address2"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <ValidationProvider
                v-slot="{ errors }"
                name="お電話番号"
                rules="required"
              >
                <v-text-field
                  class="tell"
                  label="電話番号(必須)"
                  :error-messages="errors"
                  placeholder="03-1234-5678"
                  v-model="tell"
                ></v-text-field>
                <p v-show="errors.length" class="error_message" color>
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider
                v-slot="{ errors }"
                name="メールアドレス"
                rules="required|email"
              >
                <v-text-field
                  class="email"
                  label="メールアドレス(必須)"
                  placeholder="your@email"
                  v-model="email"
                ></v-text-field>
                <p v-show="errors.length" class="error_message">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>
          </v-container>

          <div>
            <v-container>
              <h3>変更後のお支払い方法</h3>
              <ValidationProvider
                v-slot="{ errors }"
                name="お支払い方法"
                rules="required"
              >
                <v-overflow-btn
                  v-model="payment"
                  class="my-2"
                  :items="dropdown_payment"
                  :error-messages="errors"
                  label="変更後のお支払い方法（必須）"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </ValidationProvider>
            </v-container>
          </div>
        </v-card>
        <v-container>
          <v-form v-on:submit.prevent="add">
            <div class="text-right">
              <v-btn color="primary" @click="paymentadd" :disabled="invalid"
                >送信</v-btn
              >
              <p v-show="invalid">必須項目ご入力後送信できます</p>
            </div>
          </v-form>
        </v-container>
      </div>
    </ValidationObserver>
  </v-app>
</template>
<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      name: "",
      address: "",
      address2: "",
      email: "",
      tell: "",
      payment: "",
      dropdown_payment: [
        "銀行振替",
        "ゆうちょ銀行振替",
        "クレジットカード",
        "コンビニ支払い",
        "訪問集金 (12時〜18時)",
        "訪問集金 (18時〜21時)",
      ],
    };
  },
  created: function () {
    this.$store.dispatch("payments/init");
  },
  methods: {
    paymentadd() {
      this.$store.dispatch("payments/paymentadd", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        email: this.email,
        payment: this.payment,
      });
      this.$router.push("/success");
    },
  },
};
</script>
<style  scoped>
h3 {
  text-align: center;
}
.title1 {
  background: #2887e6;
  color: #fff;
  text-align: center;
  margin-top: 10%;
}
.box17 {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px #3d97f0;
  border-bottom: solid 2px #3d97f0;
}
.box17:before,
.box17:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: #3d97f0;
}
.box17:before {
  left: 10px;
}
.box17:after {
  right: 10px;
}
.box17 p {
  margin: 0;
  padding: 0;
  text-align: center;
}
.pause-title {
  text-align: center;
}
</style>