<template>
  <v-app>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>お支払いについて</v-toolbar-title>
    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left> mdi-credit-card-check-outline </v-icon>
        お支払い方法の変更
      </v-tab>
      <v-tab>
        <v-icon left>mdi-clock-time-four-outline</v-icon>
        訪問集金日時のご希望
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <CutomerPayMent />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <CutomerDesired />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>