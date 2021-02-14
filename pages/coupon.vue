<template>
  <v-app>
    <div>
      <v-card color="red" dark>
        <v-card-title>
          新型コロナウイルスの影響で２月の読売日曜朝市は開催中止となりました
        </v-card-title>
      </v-card>
      <div class="box17">
        <h3>読売日曜朝市</h3>
        <h4>毎月第三日曜日に開催中！</h4>
        <p>
          開催場所 東京都江東区北砂2-1-37 志演尊空神社（しのぶそんくうじんじゃ）
        </p>
        <p>日時 毎月第三日曜日 午前７時～</p>
        <p>
          読売日曜朝市に関するお問い合わせは（出品品目 出店依頼等）
          読売センター砂町 鍋谷 右田まで
        </p>
      </div>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            src="/asaichi/DSC00030.jpg"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<style scoped>
h3,
h4,
p {
  text-align: center;
}

.box17 {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px #e50215;
  border-bottom: solid 2px #e50215;
}
.box17:before,
.box17:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: #e50215;
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