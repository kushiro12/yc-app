<template>
  <v-app>
    <div>
      <div class="box17">
        <h3>新潟県の十日町の米農家 柳さんのお米</h3>
        <p>
          新潟県十日町は、周囲を山々に囲まれた豪雪地帯です。たっぷりのミネラルを
          含んだ豊富な雪解け水、肥沃な土壌、昼夜の温度差が大きい山間地特有の気候
          風土は、美味しいお米づくりの最適な環境で柳さんは十二代続く
          お米農家さんです。皆様に最適な状態でお米をお届けする為の品質管理は徹底してます
          是非、一度ご賞味下さい。
          精米したての米ぬかもご希望の方には無料でお届け致します　
          ぬか漬けのぬか床として、大根や竹の子のアク抜きにもご使用下さい　
        </p>
      </div>
      <v-container>
        <div class="logo-coupon">
          <v-layout justify-center>
            <v-flex xs10 md8>
              <img src="~/static/images/rice.png" />
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
    <h3 class="title1">ご注文フォーム</h3>
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
                ></v-text-field>
                <p v-show="errors.length" class="error_message">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <v-text-field
                class="address2"
                label="マンション名、部屋番号など"
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
            <v-row align="center">
              <v-col class="d-flex" cols="12" md="6">
                <v-select
                  v-model="rice_order"
                  :items="dropdown_order"
                  label="ご注文内容"
                ></v-select>
              </v-col>

              <v-col
                class="d-flex"
                cols="12"
                md="6
              "
              >
                <v-select
                  v-model="rice_quantity"
                  :items="dropdown_quantity"
                  label="ご注文数"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex"
                cols="12"
                md="6
              "
              >
                <v-select
                  v-model="rice_bran"
                  :items="dropdown_bran"
                  label="米糠はご利用ですか？(無料)"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-form v-on:submit.prevent="add">
          <div class="text-right">
            <v-btn color="primary" @click="riceadd" :disabled="invalid"
              >送信</v-btn
            >
            <p v-show="invalid">必須項目ご入力後送信できます</p>
          </div>
        </v-form>
      </div>
    </ValidationObserver>
  </v-app>
</template>

<script>
import Vuetify from "vuetify/lib";
import firebase from "~/plugins/firebase";

export default {
  created: function () {
    this.$store.dispatch("rices/init");
  },
  data() {
    return {
      ricesdate: new Date().toISOString().substr(0, 10),
      menu: false,
      email: "",
      name: "",
      address: "",
      address2: "",
      tell: "",
      rice_bran: "",
      rice_quantity: "",
      rice_order: "",

      dropdown_order: [
        "新潟県産 魚沼コシヒカリ 3kg",
        "新潟県産 魚沼コシヒカリ 5kg",
        "新潟県産 魚沼コシヒカリ 10kg",
      ],
      dropdown_quantity: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      dropdown_bran: ["必要ない", "１kg", "2kg", "3kg", "4kg", "5kg"],
    };
  },

  methods: {
    riceadd() {
      this.$store.dispatch("rices/riceadd", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        email: this.email,
        ricesdate: this.ricesdate,
        rice_quantity: this.rice_quantity,
        rice_bran: this.rice_bran,
        rice_order: this.rice_order,
      });
      this.$router.push("/success");
    },
  },
};
</script>
<style scoped>
h3 {
  text-align: center;
}
.box17 {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px #e50113;
  border-bottom: solid 2px #e50113;
}
.box17:before,
.box17:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: #e50113;
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
}

img {
  max-width: 100%;
  height: auto;
}
</style>

