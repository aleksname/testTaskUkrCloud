<template>
  <div>
    <MainContainer>
      <div className="home">Вітаємо на головній сторінці!</div>
    </MainContainer>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';

export default {
  components: {MainContainer}    
}
</script>

<style>
.home{
  font-size: 30px;
  font-weight: 600;
}
</style>