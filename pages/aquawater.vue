<template>
  <v-app>
    <div class="box17">
      <h3>アクアクララ申し込み受け付け</h3>
      <p></p>
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
                  v-model="aquawater"
                  :items="dropdown_aquawater"
                  label="ご注文内容"
                  name="開始月"
                ></v-select>
              </v-col>

              <v-col
                class="d-flex"
                cols="12"
                md="6
              "
              >
                <v-select
                  v-model="aquantity"
                  :items="dropdown_aquantity"
                  label="ウォーターボトルのご注文本数"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="aquasdate"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="aquasdate"
                      label="お届けご希望日"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="aquasdate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(aquasdate)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12">
                <v-select
                  v-model="aquatime"
                  :items="dropdown_aquatime"
                  label="お届けご希望時間"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-form v-on:submit.prevent="add">
          <div class="text-right">
            <v-btn color="primary" @click="aquaadd" :disabled="invalid"
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
    this.$store.dispatch("aquas/init");
  },
  data() {
    return {
      aquasdate: new Date().toISOString().substr(0, 10),
      menu: false,
      email: "",
      name: "",
      address: "",
      address2: "",
      tell: "",
      aquawater: "",
      aquasdate: "",
      aquantity: "",
      aquatime: "",
      dropdown_aquawater: [
        "ウォーターボトルの購入 １本1080円",
        "ウォーターサーバーの新規ご契約 月額1200円",
      ],
      dropdown_aquantity: ["1本", "2本", "3本", "4本", "5本"],
      dropdown_aquatime: ["12時〜18時", "18時〜21時"],
    };
  },

  methods: {
    aquaadd() {
      this.$store.dispatch("aquas/aquaadd", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        email: this.email,
        aquawater: this.aquawater,
        aquasdate: this.aquasdate,
        aquantity: this.aquantity,
        aquatime: this.aquatime,
      });
      this.$router.push("/success");
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
.radio {
  margin: 20px;
  width: 100%;
}
.title1 {
  background: #1e50a2;
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