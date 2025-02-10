<template>
  <div class="loginContainer">
    <form @submit.prevent="loginUser">
      <div class="formContainer">
        <div class="formTitle">Вхід в акаунт</div>
        <input type="email" v-model="userEmail" placeholder="Електронна пошта" class="formInput">
        <input type="password" v-model="userPassword" placeholder="Пароль" class="formInput">
        <div class="formButtonContainer">
          <button type="submit" class="formButton">Увійти</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      userPassword: ''
    };
  },
  methods: {
    loginUser() {
      let storedUser = JSON.parse(localStorage.getItem('userData'));

      if (!storedUser) {
        alert("Користувача не знайдемо!");
        return;
      }

      if (this.userEmail === storedUser.userEmail && this.userPassword === storedUser.userPassword) {
        storedUser.verified = true;
        localStorage.setItem('userData', JSON.stringify(storedUser));

        alert('Логін успішний!');
        this.$router.push('/home');
      } else {
        alert("Невірний email або пароль!");
      }
    }
  }
};
</script>

<style>
  .loginContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
