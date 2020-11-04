<template>
  <div id="app">
      <div class="ProductItemInfo">
        <a style="font-size:1.5vw;" @click="aa()">12</a>
        <div v-for="(Product,index) in Products" :key="Product[0]+index" class="ProductItem">
          <div class="ProductItemInfo">
            <a style="font-size:1.5vw;">{{Product[2]}}</a>
            <br />
            <div style="padding-top:1vw;">
              <a style="font-size:1.4vw;">NT: {{Product[3]}}</a>
            </div>
          </div>
          <div>
            <a>{{Product[6]}}</a>
            <img :src="Product[7]" />
          </div>
        </div>
        <br />
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
  methods: {
    aa (i) {
      console.log(this.Products)
    }
  },
  mounted () {
    fetch('https://script.google.com/macros/s/AKfycbwzGM7BJ8SnGD626ebzQi3xGdBsJzUlOSdiDIkMmBhplN65FtQ/exec')
      .then((response) => {
        return response.json()
      }).then((jsonData) => {
        this.Products = jsonData
        this.aa()
      })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
