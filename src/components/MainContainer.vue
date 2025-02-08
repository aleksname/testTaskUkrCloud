<template>
  <div class="wrapper">
    <AppHeader />
    <main class="content">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },      
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    max-width: 1440px;
    margin: 0 auto;
    padding: 0px 10px;
}
@media (max-width: 750px){
  .wrapper{
    padding: 0px 5px;
  }
}
.content {
    flex: 1;
}

</style>
