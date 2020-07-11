<template>
<div>
  <p>ご契約の期間に合わせてプレゼントをお選びください</p>
<h3 class="sub-title">
トイレットペーパー(2ロール)</h3>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="数量"
      target="#dropdown-example-1">
    </v-overflow-btn>
  </v-container>

      <h3 class="sub-title">
ティッシュ(二箱)</h3>
<v-container id="dropdown-example-2">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="数量"
      target="#dropdown-example-1"
    ></v-overflow-btn>
</v-container>

  </div>
</template>
<script>
  export default {
    data: () => ({
      dropdown_font: ['1','2','3','4','5','6','7','8','9','10'],
    }),
  }
</script>
<style scoped>
h3 {
  text-align: center;
}
</style>