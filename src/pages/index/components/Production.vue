<template>
  <div class="slider">
    <categoryslider style="flex:25%"/>
    <productItem  style="flex:75%"/>
  </div>
</template>

<script>
import productItem from '../components/productItem.vue'
import categoryslider from '../components/categoryslider.vue'

export default {
  components: {
    productItem,
    categoryslider
  }
}
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  position: relative;
}
</style>
