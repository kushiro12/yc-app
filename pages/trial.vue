<template>
  <v-app>
    <div class="box17">
      <h3>お試し新聞</h3>

      <p>購読申し込みの方読売新聞</p>
      <p>
        読売新聞、THE JAPAN NEWS、スポーツ報知まずは一週間！
        読売KODOMOE新聞、読売中高生新聞はバックナンバーも含めて最新号をお届けします。
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
          </v-container>

          <div>
            <h3>新聞銘柄</h3>

            <v-container>
              <v-row>
                <v-checkbox
                  v-model="papertype1"
                  class="mx-2"
                  value="読売新聞"
                  label="読売新聞"
                ></v-checkbox>
                <v-checkbox
                  v-model="kodomo"
                  class="mx-2"
                  value="読売KODOMO新聞"
                  label="読売KODOMO新聞"
                ></v-checkbox>
                <v-checkbox
                  v-model="school"
                  class="mx-2"
                  value="読売中高生新聞"
                  label="読売中高生新聞"
                ></v-checkbox>

                <v-checkbox
                  v-model="japannews"
                  class="mx-2"
                  value="THE JAPAN NEWS "
                  label="THE JAPAN NEWS "
                ></v-checkbox>
                <v-checkbox
                  v-model="sports"
                  class="mx-2"
                  value="スポーツ報知"
                  label="スポーツ報知"
                ></v-checkbox>
              </v-row>
            </v-container>
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