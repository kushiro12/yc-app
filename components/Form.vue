<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="users"
        sort-by="dateRangeText"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <h2 justify="center">契約更新</h2>

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
                          v-model="user.id"
                          label="ID"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.name"
                          label="名前"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.tell"
                          label="電話番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.email"
                          label="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.address"
                          label="住所１"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.address2"
                          label="住所２"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.payment"
                          label="支払い方法"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.papertype1"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.sports"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.school"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.kodomo"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.japannews"
                          label="銘柄"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.papertype2"
                          label="契約期間"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="user.year"
                          label="開始年"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.month"
                          label="開始月"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.precent"
                          label="特典"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="user.precent2"
                          label="特典"
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
                  <v-btn color="blue darken-1" text @click="update(user)"
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
          <v-icon small @click="deleteduser(item)">mdi-delete</v-icon>
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
    this.$store.dispatch("users/init");
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
    user: {},
  }),

  computed: {
    users() {
      return this.$store.getters["users/doneDeleted"];
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
    edit(user) {
      this.user = Object.assign({ id: user.id }, user);
      this.dialog = true;
    },
    update(id) {
      this.$store.dispatch("users/updateuser", id);
      this.close();
    },
    async deleteduser(user) {
      const result = await confirm("削除してもよろしいですか？");

      if (result === true) {
        this.$store.dispatch("users/deleteduser", user);
      }
    },

    close() {
      this.dialog = false;
      this.user = {};
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
    toggle(user) {
      this.$store.dispatch("users/toggle", user);
    },
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
