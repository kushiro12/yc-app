<template>
  <v-app>
    <div class="box17">
      <h3>ご契約の更新</h3>
      <p>
        いつも読売新聞をご愛読いただき、誠にありがとうございます。
        今後は訪問契約の他にスマートフォンでのオンライン契約更新も行わせて頂きますので
        よろしければご利用ください。
      </p>
    </div>
    <h3 class="title1">ご契約更新フォーム</h3>
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
            <h3>新聞銘柄</h3>

            <v-container id="dropdown-example-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="銘柄"
                rules="required"
              >
                <v-overflow-btn
                  v-model="papertype1"
                  class="my-2"
                  :items="dropdown_font2"
                  :error-messages="errors"
                  label="お選びください"
                  target="#dropdown-example-1"
                  item-value="読売新聞 4400円"
                ></v-overflow-btn>
              </ValidationProvider>
            </v-container>
            <v-container>
              <v-row>
                <v-checkbox
                  v-model="kodomo"
                  class="mx-2"
                  value="読売KODOMO新聞 550円"
                  label="読売KODOMO新聞 550円"
                ></v-checkbox>
                <v-checkbox
                  v-model="school"
                  class="mx-2"
                  value="読売中高生新聞 850円"
                  label="読売中高生新聞 850円
"
                ></v-checkbox>
                <v-checkbox
                  v-model="japannews"
                  class="mx-2"
                  value="THE JAPAN NEWS 3665円"
                  label="THE JAPAN NEWS 3665円"
                ></v-checkbox>
                <v-checkbox
                  v-model="sports"
                  class="mx-2"
                  value="スポーツ報知 3355円"
                  label="スポーツ報知 3355円"
                ></v-checkbox>
              </v-row>
            </v-container>
            <h3>ご契約期間</h3>
            <v-container>
              <ValidationProvider
                v-slot="{ errors }"
                name="期間"
                rules="required"
              >
                <v-overflow-btn
                  v-model="papertype2"
                  class="my-2"
                  :items="dropdown_font3"
                  :error-messages="errors"
                  label="ご契約期間"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </ValidationProvider>
            </v-container>
          </div>

          <div>
            <h3>ご契約開始月</h3>

            <v-container id="dropdown-example-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="開始年"
                rules="required"
              >
                <v-overflow-btn
                  v-model="year"
                  class="my-2"
                  :items="dropdown_year"
                  :error-messages="errors"
                  label="2020年(必須)"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="開始月"
                rules="required"
              >
                <v-overflow-btn
                  v-model="month"
                  class="my-2"
                  :items="dropdown_month"
                  :error-messages="errors"
                  label="1月（必須）"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </ValidationProvider>
              <h3>お支払い方法</h3>
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
                  label="お支払い方法（必須）"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </ValidationProvider>
            </v-container>
          </div>

          <div>
            <h3 class="sub-title">特典プレゼント</h3>
            <h4>ご契約期間に応じてお好きな特典がお選びいただけます。</h4>
            <h4>
              12ヶ月以上のご契約の方はお好きな組み合わせで合計2セットお選びいただけます
            </h4>

            <v-card>
              <v-container>
                <v-row dense>
                  <v-col v-for="(item, i) in items" :key="i" cols="4">
                    <v-item>
                      <v-card max-width="300">
                        <div class="justify-space-between">
                          <div>
                            <v-img
                              :lazy-src="item.src"
                              :src="item.src"
                              max-height="200"
                              mx-auto
                              contain
                            >
                            </v-img>
                            <v-card-title
                              class="headline"
                              v-text="item.title"
                            ></v-card-title>
                          </div>
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
              <v-container id="dropdown-example-1">
                <v-overflow-btn
                  v-model="precent"
                  class="my-2"
                  :items="dropdown_font"
                  label="いずれかお一つお選びいただけます"
                  target="#dropdown-example-1"
                ></v-overflow-btn>
              </v-container>
              <v-container id="dropdown-example-2">
                <v-overflow-btn
                  v-model="precent2"
                  class="my-2"
                  :items="dropdown_font4"
                  label="12ヶ月以上ご契約の方はお選びください"
                  target="#dropdown-example-2"
                ></v-overflow-btn>
              </v-container>
            </v-card>
          </div>
        </v-card>
        <v-form v-on:submit.prevent="add">
          <div class="text-right">
            <v-btn color="primary" @click="add" :disabled="invalid">送信</v-btn>
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
    this.$store.dispatch("users/init");
  },
  data() {
    return {
      name: "",
      address: "",
      address2: "",
      tell: "",
      email: "",
      sports: "",
      school: "",
      kodomo: "",
      japannews: "",
      papertype1: "",
      papertype2: "",
      precent: "",
      precent2: "",
      year: "",
      month: "",
      payment: "",

      items: [
        {
          src: require("~/assets/images/ose.jpg"),
          title: "尾瀬の水 2L×6本",
          artist: "Foster the People",
        },
        {
          src: require("~/assets/images/mirin.jpg"),
          title: "ミリン風調味料 1.8L",
          artist: "Ellie Goulding",
        },
        {
          src: require("~/assets/images/11511.jpg"),
          title: "トイレットペーパー",
          artist: "Ellie Goulding",
        },
        {
          src: require("~/assets/images/oil.jpg"),
          title: "サラダ油 1.8L",
          artist: "Ellie Goulding",
        },
        {
          src: require("~/assets/images/senzai.jpg"),
          title: "液体洗剤",
          artist: "Ellie Goulding",
        },
        {
          src: require("~/assets/images/soy.jpg"),
          title: "上級本醸造醤油 1.8L",
          artist: "Ellie Goulding",
        },
      ],

      dropdown_font: [
        "トイレットペーパー(12ロール)",
        "尾瀬の水 ２L×６本 (１ケース)",
        "サラダ油 1.8L",
        "液体洗剤",
        "上級本醸造醤油 1.8L",
        "ミリン風調味料 1.8",
      ],
      dropdown_font4: [
        "選択しない",
        "トイレットペーパー(12ロール)",
        "尾瀬の水 ２L×６本 (１ケース)",
        "サラダ油 1.8L",
        "液体洗剤",
        "上級本醸造醤油 1.8L",
        "ミリン風調味料 1.8",
      ],
      dropdown_font2: [
        "読売新聞 4400円",
        "読売新聞 朝刊 4200円",
        "その他(以下からお選びください)",
      ],
      dropdown_font3: ["4ヶ月契約", "8ヶ月契約", "12ヶ月契約", "24ヶ月契約"],
      dropdown_year: ["2020年", "2021年"],
      dropdown_payment: [
        "銀行振替",
        "ゆうちょ銀行振替",
        "クレジットカード",
        "コンビニ支払い",
        "訪問集金 (12時〜18時)",
        "訪問集金 (18時〜21時)",
      ],
      dropdown_month: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    };
  },

  methods: {
    add() {
      this.$store.dispatch("users/add", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        email: this.email,
        precent: this.precent,
        precent2: this.precent2,
        sports: this.sports,
        school: this.school,
        kodomo: this.kodomo,
        japannews: this.japannews,
        papertype1: this.papertype1,
        papertype2: this.papertype2,
        year: this.year,
        month: this.month,
        payment: this.payment,
        osewater: this.osewater,
      });
      this.$router.push("/success");
    },
  },
};
</script>

<style lang="scss" scoped>
h2,
h4 {
  text-align: center;
}
h3 {
  text-align: center;
}
.radio {
  margin: 20px;
  width: 100%;
}
.title1 {
  background: #2887e6;
  color: #fff;
  text-align: center;
  margin-top: 10%;
}
.title2 {
  background: #2887e6;
  color: #fff;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 30px;
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
}

.text-right {
  margin: 30px;
}

table th {
  text-align: center;
  color: white;
  background: linear-gradient(#829ebc, #225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;

  width: 25%;
  padding: 10px 0;
}

table td {
  text-align: center;
  border-left: 1px solid #a8b7c5;

  border-bottom: 1px solid #a8b7c5;
  border-top: none;

  width: 50%;
  padding: 10px 0;
}

.error_message {
  color: red;
}
</style>