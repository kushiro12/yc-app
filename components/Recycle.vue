<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="recycles"
        sort-by="recyclesdate"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <h2 justify="center">資源回収</h2>
            <v-spacer></v-spacer>
            <v-spacer />

            <v-dialog v-model="dialog" max-width="700px">
              <v-card>
                <v-card-title>
                  <span class="headline">詳細</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.name"
                          label="名前"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.tell"
                          label="電話番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.email"
                          label="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.address"
                          label="住所１"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.address2"
                          label="住所２"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="recycle.recyclesdate"
                          label="回収日"
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
                  <v-btn color="blue darken-1" text @click="update">保存</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }"></template>

        <template v-slot:item.done="{ item }">
          <v-btn :color="getColor(item.done)" @click="toggle(item)" dark
            >完了</v-btn
          >
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
          <v-icon small @click="remove(item)">mdi-delete</v-icon>
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
    this.$store.dispatch("recycles/init");
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
      { text: "回収日", value: "recyclesdate" },
      { text: "電話番号", value: "tell" },
      { text: "E-Mail", value: "email" },
      { text: "申込日", value: "created" },

      { text: "詳細", value: "actions", sortable: false },
      { text: "削除", value: "remove", sortable: false },
    ],
    recycle: {},
  }),

  computed: {
    recycles() {
      return this.$store.state.recycles.recycles;
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
    edit(recycle) {
      this.recycle = Object.assign({}, recycle);
      this.dialog = true;
    },
    update(recycle) {
      const payload = { recycle: this.recycle };
      this.$store.dispatch("recycles/toggle", recycle);
      this.close();
    },
    remove(recycle) {
      const payload = { recycle: recycle };
      // this.$store.commit("removerecycle", payload);
      this.$store.dispatch("recycles/remove", recycle);
    },
    close() {
      this.dialog = false;
      this.recycle = {};
    },
    getColor(done) {
      if (done === false) return "#616161";
      else if (done === true) return "green";
      else return "pink";
    },
    toggle(recycle) {
      const payload = { recycle: recycle };
      this.$store.dispatch("recycles/toggle", recycle);
    },
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
