
<template>
  <!-- <MainContainer> -->
    <div class="registerContainer">
      <form action="">
        <div class="formContainer">
          <div class="" className="">
            <div class="formTitle">Реєстріція акаунту</div>
            <input type="text" v-model="userName" name="" id="" placeholder="Iм'я користувача" className="formInput">
            <input type="email" v-model="userEmail" name="" id="" placeholder="Електронна пошта" className="formInput">
            <input type="password" v-model="userPassword" name="" id="" placeholder="Пароль" className="formInput">
          </div>
          <div class="formButtonContainer">
            <button type="button" className="formButton" @click="sendUserData()">Зареєструватись</button>
          </div>
        </div>
      </form>
    </div>
  <!-- </MainContainer> -->
</template>

<script>
import MainContainer from '../components/MainContainer.vue'

export default {
  components: {MainContainer},

  data() {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
    }
  },
  methods: {
    sendUserData() {
      if (!this.userName || !this.userEmail || !this.userPassword) {
        alert("Будь ласка, заповніть всі поля!");
        return; 
      }

      setTimeout(() => {
        console.log('Реєстріція успішна');
        this.$router.push('/home')
      },3000) // провіряю 'переадресацію' 
      }
    }
  }

  
</script>

<style>
  .registerContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .formContainer{
    background-color: white;
    padding: 50px 40px
  }
  .formTitle{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
  }
  .formInput {
    display: block;
    padding: 15px 10px;
    width: 250px;
    box-sizing: border-box;
    margin-bottom: 15px;
    outline: none;
    border: 2px solid rgba(128, 128, 128, 0.215);
    cursor: pointer;
    border-radius: 8px;
    text-align: center;
    color: rgb(75, 74, 74);
    font-family: monospace;
    font-size: 17px;
  }
  .formInput::placeholder{
    color: grey;
  }
 
 .formInput:nth-child(1){
 }
  .formButtonContainer{
    display: flex;
    justify-content: space-around;
  }
  .formButton{
    padding: 12px 25px;
    border: none;
    color: white;
    background-color: green;
    border-radius: 6px;
    transition: 0.2s;
    cursor: pointer;
  }
  /* .formButton:last-child{
    background-color: red;
  } */
  .formButton:hover{
    transform: scale(1.1);
  }
  .formButton:active{
    transform: scale(1);
    background-color: rgb(3, 102, 3);
  }
</style>