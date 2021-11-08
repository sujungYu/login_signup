<template>
  <div>
    <h1>offco</h1>  
    <hr style= "width:100%; height:2px; border:none; background-color:rgb(255, 134, 94)">
    <h2>회원가입</h2>
    <form v-on:submit.prevent="signup">
      <!-- <div> -->
        <!-- <label for="user.name">이름</label><br> -->
        <input class="sg_form" type="text" placeholder="이름" v-model="user.name"><br>
      <!-- </div>
      <div> -->
        <!-- <label for="user.mail">이메일</label><br> -->
        <input class="sg_form" type="text" placeholder="이메일" v-model="user.mail"><br>
      <!-- </div>
      <div> -->
        <!-- <label for="user.id">아이디</label><br> -->
        <input class="id_form" type="text" placeholder="아이디" v-model="user.id" >
        <button class="check" v-on:click.prevent="idcheck">중복확인</button>
        <br>
        
      <!-- </div>
      <div> -->
        <!-- <label for="user.pw">비밀번호</label><br> -->
        <input class="sg_form" type="password" placeholder="비밀번호" v-model="user.pw"><br>
      <!-- </div>
      <div> -->
        <!-- <label for="user.repw">비밀번호 확인</label><br> -->
        <input class="sg_form" type="password" placeholder="비밀번호 확인" v-model="user.repw"><br>
      <!-- </div> -->
      <button class="bt_signup_form" type="submit">회원가입</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return{
            user: {
                name: '',
                mail: '',
                id: '',
                pw: '',
                repw: ''
            }
        }
    },
    methods: {
        signup: function() {
          console.log(this.user.name, this.user.pw);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data = {
          username: this.user.name,
          usermail: this.user.mail,
          userid: this.user.id,
          userpw: this.user.pw,
          userrepw: this.user.repw
      }
      var self = this;
      axios.post(url, data)
        .then(function(response){
          console.log(response);
          self.$router.push('./');
        }) 
        .catch(function(error) {
          console.log(error);
        })
        },
        idcheck: function() {
      console.log("idcheck");
    }
    }
    

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    font-size: 10px;
    background-color: white;
    text-align: center;
    /* width: 100vw;
    height: 100vh; */
    /* position: relative; */
    
}

h1 {
    display: inline-block;
    font-family: 'Kite One', sans-serif;
    font-weight: lighter;
    color: rgb(255, 134, 94);
    font-size: 3em;
    width: 22vw;
    height: 7vh;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
   h2 {
      display: inline-block;
      font-family: 'Kite One', sans-serif;
      font-weight: normal;
      color: rgb(255, 134, 94);
      font-size: 18px;
      width: 25vw;
      height: 6vh;
      margin: 0
  }
  .sg_form {
      /* display: inline-block; */
      /* position: relative; */
      width: 82vw;
      height: 6.1vh;
      margin-left: 0;
      margin-bottom: 1.15em;
      border:1px solid rgba(57, 62, 70, 100);
      border-radius: 0px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
  }
  .id_form {
      /* display: inline-block; */
      /* position: relative; */
      /* position: relative; */
      /* justify-content: space-between; */
      /* margin-left: -130px; */
      width: calc(200/320*100vw);
      height: 6.1vh;
      /* margin-left: 2em; */
      margin-bottom: 1.15em;
      border:1px solid rgba(57, 62, 70, 100);
      border-radius: 0px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
  }

  .bt_signup_form {
      font-family: 'Gothic A1', sans-serif;
      font-size: 2.6em;
      width: 82vw;
      height: 9vh;
      border:1px solid rgb(255, 134, 94);
      border-radius: 15px;
      background-color: white;
      color: rgb(255, 134, 94);
      margin-top: 0.8em;
  }
  .check {
      /* position: ; */
      /* display: inline-block;
      justify-content: space-between; */
      font-family: 'Gothic A1', sans-serif;
      font-size: 1.5em;
      width: 13.3vh;
      height: 6.9vh;
      border:1px solid rgb(255, 134, 94);
      border-radius: 15px;
      background-color: white;
      color: rgb(255, 134, 94);
      left: 70vw;
      
  }
  label {
    display: inline;
     font-family: 'Gothic A1', sans-serif;
     font-size: 15px;
     margin-left: 0;
     text-align: left;
  }
  
  input {
      position: relative;
      display: inline-block;
      justify-content: space-between;
  }
</style>