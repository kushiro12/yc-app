<template>
<v-app>

  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
    @click:row="toggle"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="remove(item)">mdi-pencil</v-icon>
      <v-icon small @click="remove(user.id)">mdi-delete</v-icon>
      <button v-on:click="remove(item)">X</button>
    </template>
    <template v-slot:item.done="{ item }">
      <v-chip :color="getColor(item.done)" dark>完了</v-chip>
    </template>
    <template v-slot:item.created="{ item }">
      <span>{{item.created.toDate()| dateFilter}}</span>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      headers: [
        {
          text: "完了/未完了",
          align: "start",
          sortable: false,
          value: "done",
        },
        { text: "申込日時", value: "created", sortable: false },
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tell" },
        { text: "E-Mail", value: "email" },
      ],
    };
  },
  created: function () {
    this.$store.dispatch("users/init");
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },

  methods: {
    show(done) {
      if (done === false) return "";
      else if (done === true) return "完了";
      else return "pink";
    },
    getColor(done) {
      if (done === false) return "未完了";
      else if (done === true) return "完了";
      else return "pink";
    },
    toggle(user) {
      this.$store.dispatch("users/toggle", user);
      console.log(event);
    },
    remove(id) {
      this.$store.dispatch("users/remove", id);
      console.log(event);
    },
  },
  filters: {
    dateFilter: function (date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    },
  },
};
</script>
<style  scoped>
h2 {
  text-align: center;
}
</style>