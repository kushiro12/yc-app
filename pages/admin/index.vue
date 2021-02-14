<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>

          <v-list-item v-else :key="item.text" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#2887e6"
      dark
    >
      <!-- >設定画面完了後コメントアウト -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>管理画面</span>
      </v-toolbar-title>
      <v-row justify="end">
        <div>
          <v-btn class="pt-0" right large color="error" @click="logOut"
            >ログアウト</v-btn
          >
        </div>
      </v-row>
    </v-app-bar>

    <v-card outlined class="mx-auto mb-2" color="#EF5350" dark>
      <v-card-title v-show="totalTask > 0">
        {{ totalTask }}件の新規お申し込みがあります
      </v-card-title>
    </v-card>

    <v-card width="100%" class="mx-auto mt-0">
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>申し込みリスト</v-toolbar-title>
      </v-toolbar>
      <v-tabs background-color="primary" vertical dark>
        <v-tab> 使い方 </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remaining"
            :value="remaining"
            overlap
            offset-x="3"
          >
            新規契約</v-badge
          >
        </v-tab>

        <v-tab>
          <v-badge
            color="red"
            :content="remainingusers"
            :value="remainingusers"
            overlap
            offset-x="3"
          >
            契約更新
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingpause"
            :value="remainingpause"
            overlap
            offset-x="3"
          >
            配達の一時停止
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingrecycles"
            :value="remainingrecycles"
            overlap
            offset-x="3"
          >
            資源回収
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingpayments"
            :value="remainingpayments"
            overlap
            offset-x="3"
          >
            支払い方法の変更
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingdesireds"
            :value="remainingdesireds"
            overlap
            offset-x="3"
          >
            集金希望日
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingtrials"
            :value="remainingtrials"
            overlap
            offset-x="3"
          >
            お試し購読
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingaquas"
            :value="remainingaquas"
            overlap
            offset-x="3"
          >
            アクアクララ
          </v-badge>
        </v-tab>
        <v-tab>
          <v-badge
            color="red"
            :content="remainingrices"
            :value="remainingrices"
            overlap
            offset-x="3"
          >
            新潟産お米注文
          </v-badge>
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <div class="text-center">
              <h1>管理画面の使い方</h1>
              <h3>
                1.お客様は以下７つのお申し込みがサイト上から出来ます<br />
                「新規購読」「契約更新」「配達の一時停止」<br />「資源回収」「お支払い方法の変更」「集金希望日」「お試し購読」
              </h3>
              <h3>
                <br />
                2.新しくお申し込みがあればサイト上部に赤く「○件の新規申し込みがあります」と表示されます。<br />
                この表示はお申し込みの処理が全て完了したら自動的に表示されなくなります。
              </h3>
              <h3>
                <br />3.カテゴリごとに新規お申し込みの件数が赤く表示されています。カテゴリ名をクリックしましたらリストが切り替わります。
                <br />下記画像では「新規契約」をクリックしています。
              </h3>

              <v-img
                v-bind:src="require('@/assets/images/12345-1.jpg')"
                class="mx-auto"
                max-height="600px"
                max-width="600px"
              ></v-img>
              <h3>
                4.未処理のお申し込みはリストの左端に赤く未完了と表示されています。<br />
                リストの右から２番目水色の詳細ボタンをクリックし<br />
                詳細ページを開いて読売システムへ情報を入力します。<br />
              </h3>
              <h3>
                <br />
                5.読売システムへの入力が完了しましたら左端の赤い未完了ボタンをクリックして<br />
                表示が緑色の完了ボタンに変わったのを確認して操作は完了です。
              </h3>
              <h1><br />詳細ページ</h1>
              <h3>
                <br />詳細ページでは編集が可能です。<br />編集を保存するには詳細ページ右下の「保存」ボタンをクリックします。<br />
                「閉じる」ボタンやページ外をクリックしてページを閉じた際は編集が反映されませんので、<br />
                編集をした際は必ず「保存」ボタンで詳細ページ閉じてください。
              </h3>
              <v-img
                v-bind:src="require('@/assets/images/1234567-1.jpg')"
                class="mx-auto"
                max-height="600px"
                max-width="600px"
              ></v-img>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <NewContruct />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <Form />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Pause />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <Recycle />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <PayMent />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Desired />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Trial />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <AquaWater />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Rice />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import moment from "moment";
import Form from "~/components/Form";
import Recycle from "~/components/Recycle";
import PayMent from "~/components/PayMent";
import Pause from "~/components/Pause";
import Desired from "~/components/Desired";
import NewContruct from "~/components/NewContruct";
import Trial from "~/components/Trial";
import AquaWater from "~/components/AquaWater";
import Rice from "~/components/Rice";
import Vuetify from "vuetify/lib";

export default {
  middleware: "authenticated",

  props: {
    source: String,
  },
  data: () => ({
    dialog: null,
    drawer: false,
    items: [
      { icon: "mdi-home", text: "管理画面トップ", link: "/admin" },
      { icon: "mdi-setting", text: "使い方", link: "/admin/use" },
    ],
  }),

  created: function () {
    this.$store.dispatch("newcontructs/init");
    this.$store.dispatch("pauses/init");
    this.$store.dispatch("payments/init");
    this.$store.dispatch("users/init");
    this.$store.dispatch("trials/init");
    this.$store.dispatch("recycles/init");
    this.$store.dispatch("desireds/init");
    this.$store.dispatch("aquas/init");
    this.$store.dispatch("rices/init");
  },

  computed: {
    totalTask: function () {
      return (
        this.remainingpause +
        this.remaining +
        this.remainingpayments +
        this.remainingusers +
        this.remainingtrials +
        this.remainingrecycles +
        this.remainingdesireds +
        this.remainingaquas +
        this.remainingrices
      );
    },

    remainingpause: function () {
      var count = 0;
      var pauses = this.pauses;
      var length = pauses.length;
      for (var i = 0; i < length; i++) {
        if (!pauses[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingaquas: function () {
      var count = 0;
      var aquas = this.aquas;
      var length = aquas.length;
      for (var i = 0; i < length; i++) {
        if (!aquas[i].done) {
          count++;
        }
      }
      return count;
    },
    remaining: function () {
      var count = 0;
      var newcontructs = this.newcontructs;
      var length = newcontructs.length;
      for (var i = 0; i < length; i++) {
        if (!newcontructs[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingpayments: function () {
      var count = 0;
      var payments = this.payments;
      var length = payments.length;
      for (var i = 0; i < length; i++) {
        if (!payments[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingusers: function () {
      var count = 0;
      var users = this.users;
      var length = users.length;
      for (var i = 0; i < length; i++) {
        if (!users[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingtrials: function () {
      var count = 0;
      var trials = this.trials;
      var length = trials.length;
      for (var i = 0; i < length; i++) {
        if (!trials[i].done) {
          count++;
        }
      }
      return count;
    },

    remainingrecycles: function () {
      var count = 0;
      var recycles = this.recycles;
      var length = recycles.length;
      for (var i = 0; i < length; i++) {
        if (!recycles[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingdesireds: function () {
      var count = 0;
      var desireds = this.desireds;
      var length = desireds.length;
      for (var i = 0; i < length; i++) {
        if (!desireds[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingaquas: function () {
      var count = 0;
      var aquas = this.aquas;
      var length = aquas.length;
      for (var i = 0; i < length; i++) {
        if (!aquas[i].done) {
          count++;
        }
      }
      return count;
    },
    remainingrices: function () {
      var count = 0;
      var rices = this.rices;
      var length = rices.length;
      for (var i = 0; i < length; i++) {
        if (!rices[i].done) {
          count++;
        }
      }
      return count;
    },
    rices() {
      return this.$store.getters["rices/doneDeleted"];
    },
    aquas() {
      return this.$store.getters["aquas/doneDeleted"];
    },
    desireds() {
      return this.$store.getters["desireds/doneDeleted"];
    },

    recycles() {
      return this.$store.getters["recycles/doneDeleted"];
    },

    trials() {
      return this.$store.getters["trials/doneDeleted"];
    },

    users() {
      return this.$store.getters["users/doneDeleted"];
    },

    newcontructs() {
      return this.$store.getters["newcontructs/doneDeleted"];
    },
    pauses() {
      return this.$store.getters["pauses/doneDeleted"];
    },
    payments() {
      return this.$store.getters["payments/doneDeleted"];
    },
  },

  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
