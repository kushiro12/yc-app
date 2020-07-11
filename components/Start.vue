<template>
<div>
<h3>
ご契約開始月</h3>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_year"
      label="2020年(必須)"
      target="#dropdown-example-1">
    </v-overflow-btn>
    
    <v-overflow-btn
      class="my-2"
      :items="dropdown_month"
      label="1月（必須）"
      target="#dropdown-example-1"
    ></v-overflow-btn>
</v-container>

  </div>
</template>
<script>
  export default {
    data: () => ({
      dropdown_year: ['2020年','2021年'],
      dropdown_month: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }),
  }
</script>
<style scoped>
h3 {
  text-align: center;
}
</style>