<template>

<v-app>
<div class="box17">

    <p>いつも読売新聞をご愛読いただき、誠にありがとうございます。
昨今の状況を鑑み、
今後は訪問契約をハガキ・WEB申込へ変更させていただくことに致しました。
お客様にはご不便をおかけ致しますが、何卒ご理解・ご協力のほどお願い申し上げます。</p>


</div>
 <h3 class="title1">ご契約更新フォーム</h3>
<div class="form">
  
    <v-card>
    <v-container>
       <v-col cols="12">
          <v-text-field
       class="name"
            label="お名前(必須)"
            placeholder="読売　太郎"
            v-model="name1"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
           class="address"
            label="ご住所(必須)"
            placeholder="江東区〇〇"
            v-model="name2"
            
          ></v-text-field>
</v-col>

        <v-col cols="12">
          <v-text-field
             class="address2"
            label="マンション名、部屋番号など(必須)"
            placeholder="〇〇マンション 111"
           v-model="name3"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
              class="name"
            label="電話番号(必須)"
            placeholder="03-1234-5678"
            v-model="name4"
          ></v-text-field>
        </v-col>
  
        <v-col cols="12">
          <v-text-field
            class="email"
            label="メールアドレス(必須)"
            placeholder="your@email"
            v-model="email"
          ></v-text-field>
        </v-col>
    </v-container>
    
    <br>
    
    <PaperType/> 
      <Start/>

    <h3 class="title2">特典プレゼント</h3>
<table>
  
 <tr>
    <td>24ヶ月</td>
    <td>10点まで</td>
 </tr>
  <tr>
    <td>12ヶ月</td>
    <td>8点まで</td>
 </tr>
  <tr>
    <td>8ヶ月</td>
    <td>4点まで</td>
 </tr>
  <tr>
    <td>4ヶ月</td>
    <td>2点まで</td>
 </tr>

</table>  


  <br>
 
 <CustmerPresent/>

          


  <Peyment/>

<Contact/>
    </v-card>
 <v-form v-on:submit.prevent="add">
     <div class="text-right" >
    <v-btn color="primary"  @click="add">送信</v-btn>
      </div>
  </v-form>
 
</div>
  </v-app>

</template>

<script>
import Vuetify from 'vuetify/lib'


export default {
    
    data: function(){
        return{
            name:'',
            email:'',
        }
    },
 created: function() {
      this.$store.dispatch('users/init')
    },

    methods: {
        add(){
            this.$store.dispatch('users/add', this.name)
              this.name = ""
    
        }
    },
    computed:{
        users(){
            return this.$store.state.users.users
        }
    }
   
}
 
</script>

<style>
.radio {
  margin: 20px;
   width: 100%;
}
.title1{
  background: linear-gradient(#6dbff5,#2887e6);
  color: #eee;
  text-align: center;
  margin-top: 10%;
  
}
.title2{
  background: linear-gradient(#6dbff5,#2887e6);
  color: #eee;
  text-align: center;
  
}


table{
  width: 100%;
  border-collapse:separate;
  border-spacing: 0;
  margin-bottom: 30px;

}

.box17{
    margin:2em 0;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px #3d97f0;
    border-bottom: solid 2px #3d97f0;
}
.box17:before, .box17:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #3d97f0;
}
.box17:before {left: 10px;}
.box17:after {right: 10px;}
.box17 p {
    margin: 0; 
    padding: 0;
}


.text-right {
margin: 30px;
}

table th{
  text-align: center;
  color:white;
  background: linear-gradient(#829ebc,#225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  
  width: 25%;
  padding: 10px 0;
}

table td{
  text-align: center;
  border-left: 1px solid #a8b7c5;

  border-bottom: 1px solid #a8b7c5;
  border-top:none;
 
  width: 50%;
  padding: 10px 0;
}



</style>