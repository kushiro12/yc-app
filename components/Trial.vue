<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="trials"
        sort-by="dateRangeText"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <h2 justify="center">お試し新聞</h2>

            <v-dialog v-model="dialog" max-width="700px">
              <v-card>
                <v-card-title>
                  <span class="headline">詳細</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.id"
                          label="ID"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.name"
                          label="名前"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.tell"
                          label="電話番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.email"
                          label="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.address"
                          label="住所１"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.address2"
                          label="住所２"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.papertype1"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.papertype2"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.papertype3"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.kodomo"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.school"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="trial.trialsdate"
                          label="開始日"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close"
                    >閉じる</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="update(trial)"
                    >保存</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }"></template>

        <template v-slot:item.done="{ item }">
          <v-btn :color="getColor(item.done)" @click="toggle(item)" dark>{{
            getText(item.done)
          }}</v-btn>
        </template>
        <template v-slot:item.created="{ item }">
          <span>{{ item.created.toDate() | dateFilter }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn small class="mr-2" @click="edit(item)" color="#039BE5" dark
            >詳細</v-btn
          >
        </template>
        <template v-slot:item.remove="{ item }">
          <v-icon small @click="deletedtrial(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
import firebase from "@/plugins/firebase";
export default {
  created: function () {
    this.$store.dispatch("trials/init");
  },

  data: () => ({
    dialog: false,
    headers: [
      {
        text: "完了",
        align: "start",
        sortable: false,
        value: "done",
      },

      { text: "名前", value: "name" },

      { text: "電話番号", value: "tell" },
      { text: "E-Mail", value: "email" },
      { text: "申込日", value: "created" },

      { text: "詳細", value: "actions", sortable: false },
      { text: "削除", value: "remove", sortable: false },
    ],
    trial: {},
  }),

  computed: {
    trials() {
      return this.$store.getters["trials/doneDeleted"];
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  filters: {
    dateFilter: function (date) {
      return moment(date).format("YYYY/MM/DD ");
    },
  },
  methods: {
    edit(trial) {
      this.trial = Object.assign({ id: trial.id }, trial);
      this.dialog = true;
    },
    update(id) {
      this.$store.dispatch("trials/updatetrial", id);
      this.close();
    },
    async deletedtrial(trial) {
      const result = await confirm("削除してもよろしいですか？");

      if (result === true) {
        this.$store.dispatch("trials/deletedtrial", trial);
      }
    },

    close() {
      this.dialog = false;
      this.trial = {};
    },
    getColor(done) {
      if (done === false) return "error";
      else if (done === true) return "green";
      else return "pink";
    },
    getText(done) {
      if (done === false) return "未完了";
      else if (done === true) return "完了";
      else return "pink";
    },
    toggle(trial) {
      this.$store.dispatch("trials/toggle", trial);
    },
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
