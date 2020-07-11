<template>
<v-app>
 <ul>
      <li v-for="user in users" :key="user.id">
        <!-- {{ todo }} -->
    {{ user.name }} {{user.address}} {{user.email}} {{user.period}} {{user.tell}}{{user.type}}  
      </li>
    </ul>
</v-app>
</template>

<<script>
 export default {
    data: function() {
      return {
        name: '',
        done: false
      }
    },
    created: function() {
      this.$store.dispatch('users/init')
    },
    methods: {
      add() {
        this.$store.dispatch('users/add', this.name)
        this.name = ''
      }
    },
    computed: {
      users() {
        return this.$store.state.users.users
      }
    }
  }
  
      
      /*users: [
        {
          name: '鈴木',
          tel: '090-0000-1111',
          email: 'sample1@mail.com',
          address: '東京都渋谷区',
          period:"24ヶ月",
          type:"読売セット",

        },
        {
           name: '山田',
          tel: '090-0000-1111',
          email: 'sample1@mail.com',
          address: '東京都渋谷区',
           period:"24ヶ月",
          type:"読売朝刊",
        }
      ]*/
  
</script>