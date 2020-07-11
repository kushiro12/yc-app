<template>
  <v-container fluid>
  <h3>お支払い方法</h3>
    <v-radio-group v-model="row" row>
      <v-radio label="口座引き落とし" value="radio-1"></v-radio>
      <v-radio label="クレジットカード" value="radio-2"></v-radio>
       <v-radio label="コンビニ支払い" value="radio-3"></v-radio>
      <v-radio label="訪問集金(12時〜18時)" value="radio-4"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        column: null,
        row: null,
      }
    },
  }
</script>
<style scoped>
h3 {
  text-align: center;
}
</style>
