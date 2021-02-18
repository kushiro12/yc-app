<template>
  <v-app>
    <div class="box17">
      <h3>連載コラムセレクト読み切り新聞</h3>
      <p>
        毎日、毎週、隔週で連載コラム・特別インタビュー・特集連載と
        興味がある連載だけを指定して読んでみませんか、新聞を
        自分に興味がある記事から手に取って伝わって下さい、読売新聞を。
      </p>
    </div>
    <h3 class="title1">お試し申請フォーム</h3>
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
            <v-col cols="12">
              <ValidationProvider
                v-slot="{ errors }"
                name="コラムタイトル"
                rules="required"
              >
                <v-text-field
                  class="title"
                  label="コラムタイトル"
                  placeholder="連載コラムセレクト読切り新聞をご希望の方はタイトルをご入力ください"
                  v-model="name"
                  required
                ></v-text-field>
                <p v-show="errors.length" class="error_message">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </v-col>
            <v-row>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="trialdate"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="trialdate"
                      label="お試し開始ご希望日"
                      prepend-icon="event"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="trialdate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(trialdate)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>

          <div>
            <v-spacer />
          </div>
        </v-card>
        <v-form v-on:submit.prevent="add">
          <div class="text-right">
            <v-btn color="primary" @click="trialadd" :disabled="invalid"
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
  data() {
    return {
      menu: false,
      name: "",
      address: "",
      address2: "",
      tell: "",
      email: "",
      sports: "",
      school: "",
      kodomo: "",
      japannews: "",
      papertype1: "連載コラムセレクト読み切り新聞",
      trialdate: "",
    };
  },

  methods: {
    trialadd() {
      this.$store.dispatch("trials/trialadd", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        email: this.email,
        sports: this.sports,
        school: this.school,
        kodomo: this.kodomo,
        japannews: this.japannews,
        papertype1: this.papertype1,
        trialdate: this.trialdate,
      });
      this.$router.push("/success");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
p {
  text-align: left;
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