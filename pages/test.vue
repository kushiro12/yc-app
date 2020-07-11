<template>
<v-app>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '名前',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '電話番号', value: 'tell' },
          { text: '住所', value: 'address' },
          { text: 'メールアドレス', value: 'email' },
          { text: '銘柄', value: 'type' },
          { text: '期間', value: 'priod' },
        
          
        ],
        users: [
          {
            name: '山田太郎',
            tell: '09000000000',
            address: '東京都',
            email: 'email@mail',
            type: '朝刊',
            priod: '24ヶ月',
          },
         
        ],
      }
    },
  }
</script>