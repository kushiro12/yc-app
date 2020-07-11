<template>
<dir>
<h3>新聞銘柄</h3>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="お選びください"
      target="#dropdown-example-1">
    ></v-overflow-btn>
 

    <v-overflow-btn
      class="my-2"
      :items="dropdown_font2"
      label="ご契約期間"
      target="#dropdown-example-1"
    ></v-overflow-btn>

  </v-container>
  </dir>
</template>
<script>
  export default {
    data: () => ({
      dropdown_font: ['読売新聞 セット　4500円', '読売新聞 朝刊　4250円', ],
      dropdown_font2: ['4ヶ月契約','8ヶ月契約','12ヶ月契約', '24ヶ月契約'],
    }),
  }
</script>
<style scoped>
h3 {
  text-align: center;
}
</style>