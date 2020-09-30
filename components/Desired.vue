<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="desireds"
        sort-by="desiredsdate"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <h2 justify="center">集金希望日</h2>
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
                          v-model="desired.name"
                          label="名前"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="desired.tell"
                          label="電話番号"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="desired.address"
                          label="住所１"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="desired.address2"
                          label="住所２"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="desired.desiredsdate"
                          label="希望日"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="desired.desiredstime"
                          label="希望時間"
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
    this.$store.dispatch("desireds/init");
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
      { text: "希望日", value: "desiredsdate" },
      { text: "希望時間", value: "desiredstime" },
      { text: "電話番号", value: "tell" },

      { text: "申込日", value: "created" },

      { text: "詳細", value: "actions", sortable: false },
      { text: "削除", value: "remove", sortable: false },
    ],
    desired: {},
  }),

  computed: {
    desireds() {
      return this.$store.state.desireds.desireds;
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
    edit(desired) {
      this.desired = Object.assign({}, desired);
      this.dialog = true;
    },
    update(desired) {
      const payload = { desired: this.desired };
      this.$store.dispatch("desireds/toggle", desired);
      this.close();
    },
    remove(desired) {
      const payload = { desired: desired };
      // this.$store.commit("removedesired", payload);
      this.$store.dispatch("desireds/remove", desired);
    },
    close() {
      this.dialog = false;
      this.desired = {};
    },
    getColor(done) {
      if (done === false) return "#616161";
      else if (done === true) return "green";
      else return "pink";
    },
    toggle(desired) {
      const payload = { desired: desired };
      this.$store.dispatch("desireds/toggle", desired);
    },
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
