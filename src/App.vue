<template>
  <div>
    <!-- <nav>
      <router-link to="/register">Реєстрація</router-link> |
      <router-link to="/home">Головна</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 20px;
  padding: 10px;
  background: #f3f3f3;
}
</style>
