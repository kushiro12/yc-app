<template>
  <v-app>
    <div class="box17">
      <h3>配達の一時停止</h3>
      <p>
        ご旅行や急な用事でご自宅を留守にする際には新聞の配達を一時停止致しますので
        期間を入力ください。またその期間の新聞を取り置くかお選びください
      </p>
    </div>
    <h3 class="title1">ご入力フォーム</h3>

    <v-card>
      <div>
        <ValidationObserver ref="observer" v-slot="{ invalid }">
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
            <ValidationProvider
              v-slot="{ errors }"
              name="銘柄"
              rules="required"
            >
              <v-container fluid>
                <h5>期間中新聞を取り置くことも可能です</h5>
                <v-row align="center">
                  <v-col class="d-flex" cols="12">
                    <v-select
                      v-model="leave"
                      :items="dropdown_pause"
                      label="お選びください(必須)"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </ValidationProvider>
            <h5>停止期間をカレンダーからお選びください</h5>
            <v-card tile>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-date-picker
                    no-title
                    v-model="dates"
                    range
                    locale="jp-ja"
                    full-width
                    :day-format="(date) => new Date(date).getDate()"
                  ></v-date-picker>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="dateRangeText"
                    label="一時停止期間"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
          <v-container>
            <v-form v-on:submit.prevent="add">
              <div class="text-right">
                <v-btn color="primary" @click="pauseadd" :disabled="invalid"
                  >送信</v-btn
                >
                <p v-show="invalid">必須項目ご入力後送信できます</p>
              </div>
            </v-form>
          </v-container>
        </ValidationObserver>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import Vuetify from "vuetify/lib";
export default {
  data: () => ({
    name: "",
    address: "",
    address2: "",
    tell: "",
    leave: "",
    email: "",

    dates: ["", ""],
    dropdown_pause: ["取り置く", "取り置かない"],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  created: function () {
    this.$store.dispatch("pauses/init");
  },
  methods: {
    pauseadd() {
      this.$store.dispatch("pauses/pauseadd", {
        name: this.name,
        address: this.address,
        address2: this.address2,
        tell: this.tell,
        dateRangeText: this.dateRangeText,
        leave: this.leave,
        email: this.email,
      });
      this.$router.push("/success");
    },
  },
};
</script>


<style  scoped>
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
.title1 {
  background: #2887e6;
  color: #fff;
  text-align: center;
  margin-top: 10%;
}
h3 {
  text-align: center;
}
</style>