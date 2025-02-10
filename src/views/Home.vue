<template>
  <div>
    <MainContainer>
         <MediaCard/>
    </MainContainer>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import MediaCard from '../components/MediaCard.vue'

export default {
  components: {
    MainContainer,
    MediaCard,
  }    

}
</script>

<style>
.home{
  font-size: 30px;
  font-weight: 600;
}
</style>