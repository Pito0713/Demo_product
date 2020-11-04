<template>
  <div >
    <productItem class="slider"/>
  </div>
</template>

<script>
import productItem from '../components/productItem.vue'

export default {
  components: {
    productItem
  }
}
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  position: relative;
  padding-top: 2vw;
  margin: 5vw 0;
}
</style>
