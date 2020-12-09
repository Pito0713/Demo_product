<template>
  <div id="app">
    <div v-for="(Product,index) in Products" :key="Product[0]+index" class="ProductItem">
      <div class="ProductImg" style="flex:50%">
        <img :src="Product[7]" />
      </div>
      <div class="ProductItemInfo" style="flex:50%">
        <div>
          <a style="ProductName">{{Product[2]}}</a>
        </div>
        <div style="padding-top:1vw;">
          <a style="font-size:1.4vw;">NT: {{Product[3]}}</a>
        </div>
        <div>
          <a>{{Product[6]}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      Products: [],
      ProductData: {}
    }
  },
  mounted () {
    fetch('https://script.google.com/macros/s/AKfycbxguddnzylMny9C4bu2lm3ojmd_NYQPw2HjfzmbrPVnV9laIX4/exec')
      .then(res => {
        return res.json()
      })
      .then(Products => {
        this.Products = Products
      })
  }
}
</script>

<style  scoped lang="scss">
.ProductItem{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ProductImg img{
  max-width: 100%;
  max-height: 100%;
}
</style>
