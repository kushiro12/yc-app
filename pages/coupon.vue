<template>
  <v-app>
    <div>
      <div class="box17">
        <h3>特別クーポン</h3>
        <p>
          読売センター砂町主催の読売日曜朝市が毎月北砂２丁目の志宣神社にて行われます。 こちらで使用できる特別クーポンです。当日会場にて読売新聞ブースにて画面をスタッフにご提示ください。
          <strong>３００円</strong>分の引換券と交換致します。
        </p>
      </div>
      <v-container>
        <div class="logo-coupon">
          <v-layout justify-center>
            <v-flex xs10 md8>
              <img src="~/static/images/morning.jpg" />
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
  </v-app>
</template>
<style scoped>
h3 {
  text-align: center;
}
.box17 {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px #3d97f0;
  border-bottom: solid 2px #3d97f0;
}
.box17:before,
.box17:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: #3d97f0;
}
.box17:before {
  left: 10px;
}
.box17:after {
  right: 10px;
}
.box17 p {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>