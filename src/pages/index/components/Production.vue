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
}
</style>
