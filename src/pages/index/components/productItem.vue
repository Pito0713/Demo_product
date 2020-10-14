<template>
  <div>
    <div class="categoryslider" style="flex:25%">
        <ul>
            <li>
                <a @click="CatchProductItem('All')">熱銷</a>
            </li>
            <li>
                <a @click="CatchProductItem('new')">新品</a>
            </li>
            <li>
                <a @click="CatchProductItem('earing')">耳環</a>
            </li>
            <li>
                <a @click="CatchProductItem('necklace')">戒指</a>
            </li>
            <li>
                <a @click="CatchProductItem('necklace')">項鍊</a>
            </li>
        </ul>
      </div>
    <div  style="flex:75%">
      <div class="Product" id="Product">
        <div v-for="(Product,index) in Products" :key="Product.name+index" class="ProductItem">
          <div class="ProductItemInfo">
            <a style="font-size:1.5vw;">{{Product.name}}</a>
            <br />
            <div style="padding-top:1vw;">
              <a style="font-size:1.4vw;">NT: {{Product.price}}</a>
              <a style="float:right; padding-top:5px; padding-right:10px;" @click="showUp(Product.no)">
                <i class="far fa-heart" :class="{fas : Product.add }"></i>
              </a>
            </div>
          </div>
          <div>
            <img :src="Product.img" />
          </div>
        </div>
      </div>
        <div class="productPage">
          <div class="pagination">
              <div @click="pagination(catchData,currentPage-1)">
                <a>上一頁</a>
              </div>
              <div class="pagination" id="productPage">
                <div v-for="pageTotal in pageTotals" :key="pageTotal[i]" @click="pagination(catchData,pageTotal)">
                  <a>{{pageTotal}}</a>
                </div>
              </div>
              <div @click="pagination(catchData,currentPage+1)">
                <a>下一頁</a>
              </div>
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
      pageTotals: [],
      paginationTotal: '',
      currentPage: '',
      datapage: 8,
      CatchProductId: '',
      catchData: []
    }
  },
  methods: {
    showUp (i) {
      this.ProdcutData[i].add = !this.ProdcutData[i].add
    },
    pagination (ProdcutData, currentPage) {
      if (currentPage > this.paginationTotal) {
        document.getElementById('Product').innerHTML = ''
        currentPage = this.paginationTotal
      } else {
        document.getElementById('Product').innerHTML = ''
      }
      if (currentPage <= 0) {
        currentPage = 1
      }
      // 全部資料總數
      // 當前比總頁數大的，當前等於總頁數 //防止剛好進位
      // 最小 （當前)1*(單頁資料)4 - 4(起始頁資料) + 1 起始至少為1
      const minData = currentPage * this.datapage - this.datapage + 1
      // 最大
      const maxData = currentPage * this.datapage
      // 當前頁面(1) 比 minData(例如：1) 大且又小於 maxData(例如：4) 就push進去新陣列。
      //    建立新陣列//
      for (this.i = 0; this.i <= ProdcutData.length; this.i++) {
        if (this.i >= minData && this.i <= maxData) {
          this.Products.push(ProdcutData[this.i - 1])
        }
      }
      document.body.scrollTop = 0
      this.currentPage = currentPage
      //    console.log(this.paginationTotal)
      //    console.log(this.ProdcutData)
      //    console.log(this.pageTotals)
      //    console.log(this.Products)
    },
    pageSelect () {
      const dataTotal = this.catchData.length
      // 總共有幾頁//
      document.getElementById('productPage').innerHTML = ''
      this.paginationTotal = Math.ceil(dataTotal / this.datapage)
      for (this.i = 1; this.i <= this.paginationTotal; this.i++) {
        this.pageTotals.push(this.i)
      }
    },
    CatchProductItem (Id) {
      if (Id === 'All') {
        this.catchData = this.ProdcutData
      } else {
        this.catchData = this.ProdcutData.filter( //    用id 屬性篩選我要的
          function (item) {
            return item.id === Id
          }
        )
        console.log(Id)
        console.log(this.catchData)
      }
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
    }
  },
  mounted () {
    fetch('https://pito0713.github.io/Fetch/DemoProdcut.json')
      .then(res => {
        return res.json()
      })
      .then(Products => {
        this.ProdcutData = Products
        this.CatchProductItem('All')
      })
  }
}
</script>

<style scoped lang="scss">
.categoryslider{
    display: block;
    position: relative;
    padding-top:5vw;
    li{
        padding: 1.5vw 0;
    }
    li:hover{
        border-bottom:1px var(--border-color) solid;
    }
    a{
        font-size: 1.5vw;
    }
}
.Product {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding-top: 2vw;
  margin: 5vw 0;
}
.ProductItem {
  display: flex;
  flex-direction: column;
  margin: 0.75vw;
  width: 45%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.ProductItemInfo {
  text-align: start;
  color: var(--product-color);
  overflow:hidden;
  text-overflow: ellipsis;
  a{
    white-space:nowrap;
  }
}
.productPage{
    display: flex;
    justify-content: center;
    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            padding: 2vw;
        }
    }
}
@media screen and (max-width: 769px) {
    .ProductItem {
        width: 40%;
    }
    .ProductItemInfo{
        a{
            font-size: 1vw;
        }
    }
    .pagination{
        a{
            font-size: 1.5vw;
        }
    }
}
</style>
