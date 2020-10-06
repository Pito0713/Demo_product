<template>
  <div>
    <div>
      <a>商品</a>
      <div class="Product">
        <div v-for="Product in Products" :key="Product.no" class="ProductItem">
          <div class="ProductItemInfo">
            <a style="font-size: 1.8vw;">{{Product.name}}</a>
            <a style="float:right" @click="showUp(Product.no)">
              <i class="far fa-heart" :class="{fas : Product.add }"></i>
            </a>
            <br />
            <div style="padding-top:1vw;">
              <a style="font-size: 1.5vw;">NT: {{Product.price}}</a>
            </div>
          </div>
          <div>
            <img :src="Product.img" />
          </div>
        </div>
      </div>
      <div id="productPage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      Products: [],
      ProdcutData: ''
    }
  },
  methods: {
    showUp (i) {
      this.Products[i].add = !this.Products[i].add
      console.log(this.Products[i].add)
    },
    pagination (ProdcutData, currentPage) {
      // 全部資料總數
      const dataTotal = ProdcutData.length

      // 每一頁顯示幾筆資料。
      var datapage
      datapage = 8
      // 總共有幾頁//
      const pageTotal = Math.ceil(dataTotal / datapage)
      // 當前比總頁數大的，當前等於總頁數 //防止剛好進位
      if (currentPage > pageTotal) {
        currentPage = pageTotal
      }

      // 最小 （當前)1*(單頁資料)4 - 4(起始頁資料) + 1 起始至少為1
      const minData = currentPage * datapage - datapage + 1
      // 最大
      const maxData = currentPage * datapage
      // 當前頁面(1) 比 minData(例如：1) 大且又小於 maxData(例如：4) 就push進去新陣列。
      //    建立新陣列//
      for (this.i = 0; this.i <= ProdcutData.length; this.i++) {
        if (this.i >= minData && this.i <= maxData) {
          this.Products.push(ProdcutData[this.i - 1])
        }
      }
      //    建立頁面變數
      const page = {
        pageTotal, //   整頁數
        currentPage //  當前
      }
      this.pageSelect(page)
    },
    pageSelect (page) {
      let str = ''
      //    寫入所有頁數
      for (let i = 1; i <= page.pageTotal; i++) {
        str += `<a data-page="${i}">${i}</a>`
      }
      //    寫入變數str所有資料
      document.getElementById('productPage').innerHTML = str
    }
  },
  mounted () {
    fetch('https://pito0713.github.io/Fetch/DemoProdcut.json')
      .then(res => {
        return res.json()
      })
      .then(Products => {
        this.pagination(Products, 1)
      })
  }
}
</script>

<style scoped lang="scss">
.Product {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding-top: 2vw;
  margin-bottom: 8vw;
}
.ProductItem {
  display: flex;
  flex-direction: column;
  padding: 0.25vw;
  margin: 0.5vw;
  flex: 45%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.ProductItemInfo {
  text-align: start;
  padding: 0.5vw;
  a {
    font-size: 1.2vw;
    color: var(--product-color);
  }
}
@media screen and (max-width: 769px) {
}
</style>
