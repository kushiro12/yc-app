<template>
  <v-app>
    <v-container>
      <div>
        <v-btn
          absolute
          top
          right
          large
          color="error"
          small
          class="mr-2"
          @click="logOut"
          >ログアウト</v-btn
        >
      </div>
    </v-container>
    <v-main>
      <v-tabs>
        <!-- <v-tab> -->
        <!-- <v-icon left> mdi-credit-card-check-outline </v-icon>
        新規契約
      </v-tab> -->
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          使い方
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          新規契約
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          継続契約
        </v-tab>
        <v-tab>
          <v-icon left> mdi-credit-card-check-outline </v-icon>
          配達の一時停止
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          資源回収
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          支払い方法の変更
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          集金希望日
        </v-tab>
        <v-tab>
          <v-icon left>mdi-clock-time-four-outline</v-icon>
          お試し購読
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <div><p>！これから作る</p></div>
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
      </v-tabs>
    </v-main>
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
export default {
  middleware: "authenticated",
  layout: "admin",
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
