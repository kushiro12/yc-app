<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="payments"
        sort-by="created"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <h2 justify="center">お支払い方法変更</h2>
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
                          v-model="payment.name"
                          label="名前"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="payment.tell"
                          label="電話番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="payment.address"
                          label="住所１"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="payment.address2"
                          label="住所２"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="payment.email"
                          label="email"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="payment.payment"
                          label="支払い方法"
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
    this.$store.dispatch("payments/init");
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
      { text: "支払い方法", value: "payment" },

      { text: "電話番号", value: "tell" },
      { text: "E-Mail", value: "email" },
      { text: "申込日", value: "created" },

      { text: "詳細", value: "actions", sortable: false },
      { text: "削除", value: "remove", sortable: false },
    ],
    payment: {},
  }),

  computed: {
    payments() {
      return this.$store.state.payments.payments;
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
    edit(payment) {
      this.payment = Object.assign({}, payment);
      this.dialog = true;
    },
    update(payment) {
      const payload = { payment: this.payment };
      this.$store.dispatch("payments/toggle", payment);
      this.close();
    },
    remove(payment) {
      const payload = { payment: payment };
      // this.$store.commit("removepayment", payload);
      this.$store.dispatch("payments/remove", payment);
    },
    close() {
      this.dialog = false;
      this.payment = {};
    },
    getColor(done) {
      if (done === false) return "#616161";
      else if (done === true) return "green";
      else return "pink";
    },
    toggle(payment) {
      const payload = { payment: payment };
      this.$store.dispatch("payments/toggle", payment);
    },
    logOut() {
      firebase.auth().signOut();
      this.$router.push("/login");
    },
  },
};
</script>
