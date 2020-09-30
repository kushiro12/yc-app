
  <template>
  <v-app id="inspire">
    <v-main>
      <v-row justify="center">
        <v-col cols="6">
          <v-form>
            <v-text-field
              label="IDを入力してください"
              name="login"
              prepend-icon="mdi-account"
              v-model="email"
              type="text"
            ></v-text-field>

            <v-text-field
              id="password"
              label="パスワードを入力してください"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              autocomplete="“on”"
              v-model="password"
            ></v-text-field>
          </v-form>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import firebase from "@/plugins/firebase";
export default {
  layout: "admin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ログイン後のページに遷移する
        this.$router.push("/admin");
      } else {
      }
    });
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
  },
};
</script>