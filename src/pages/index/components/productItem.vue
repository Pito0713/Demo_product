<template>
  <div>
    <div class="categoryslider" style="flex:25%" >
        <ul id="categoryLIst">
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
                <a @click="CatchProductItem('necklace')">項鍊</a>
            </li>
        </ul>
      </div>
    <div  style="flex:75%">
      <div class="filterButton">
        <button @click="sortPrice()">價錢高低</button>
        <button>購買次數</button>
        <button @click="sortDate()">上架時間</button>
      </div>
      <div class="Product" id="Product">
        <div v-for="(Product,index) in Products" :key="Product[1]+index" class="ProductItem">
          <div class="ProductItemInfo">
            <a style="font-size:1.5vw;">{{Product[2]}}</a>
            <a style="float:right; padding-top:5px; padding-right:10px;" @click="showUp(Product[0])">
              <i class="far fa-heart" :class="{fas : Product[5] }"></i>
            </a>
            <br />
            <div style="padding-top:1vw; display:flex; justify-content: space-between;">
              <a style="font-size:1.4vw;">NT: {{Product[3]}}</a>
              <a>{{Product[9]}}</a>
            </div>
          </div>
          <div class="ProductImg">
            <img :src="Product[7]" />
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
const moment = require('moment')
export default {
  data: function () {
    return {
      Products: [],
      pageTotals: [],
      paginationTotal: '',
      currentPage: '',
      datapage: 12,
      CatchProductId: '',
      catchData: [],
      sortPriceData: [],
      sortDateData: [],
      sortRe: true
    }
  },
  methods: {
    showUp (i) {
      this.ProdcutData[i][5] = !this.ProdcutData[i][5]
      this.pageSelect()
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
      if (this.currentPage < this.paginationTotal) {
        if (this.currentPage > 0) {
          document.body.scrollTop = 0
        }
        console.log(this.currentPage)
      }
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
        this.catchData = this.ProdcutData.filter( //    用id 屬性篩選我要的
          function (item) {
            return item[0] !== '' // 篩掉空值
          }
        )
      } else {
        this.catchData = this.ProdcutData.filter( //    用id 屬性篩選我要的
          function (item) {
            return item[1] === Id
          }
        )
        console.log(Id)
      }
      for (let i = 0; i < this.catchData.length; i++) {
        this.catchData[i][9] = moment(this.catchData[i][9]).format('MM/DD/YYYY')
      }
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
      console.log(this.catchData)
    },
    sort0 () {
      this.catchData.sort(function (a, b) {
        return a[0] - b[0]
      })
    },
    sortPrice () {
      if (this.sortRe === true) {
        this.catchData.sort(function (a, b) {
          return a[3] - b[3]
        })
        console.log(this.catchData)
        this.sortRe = !this.sortRe
      } else {
        this.catchData.sort(function (a, b) {
          return a[3] - b[3]
        })
        this.catchData.reverse()
        console.log(this.catchData)
        this.sortRe = !this.sortRe
      }
      console.log(this.sortRe)
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.sort0()
    },
    sortDate () {
      if (this.sortRe === true) {
        this.catchData.sort(function (a, b) {
          return a[9] < b[9] ? 1 : -1
        })
        console.log(this.catchData)
        this.sortRe = !this.sortRe
      } else {
        this.catchData.sort(function (a, b) {
          return a[9] < b[9] ? 1 : -1
        })
        this.catchData.reverse()
        console.log(this.catchData)
        this.sortRe = !this.sortRe
      }
      console.log(this.sortRe)
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.sort0()
    }
  },
  mounted () {
    fetch('https://script.google.com/macros/s/AKfycbwzGM7BJ8SnGD626ebzQi3xGdBsJzUlOSdiDIkMmBhplN65FtQ/exec')
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
    padding-top:10vw;
    li{
        padding: 1.5vw 0;
    }
    li:hover{
        border-bottom:1px var(--border-color) solid;
    }
    a{
        font-size: 1.8vw;
    }
}
.Product {
  display: flex;
  position: relative;
  flex-wrap: wrap;
}
.filterButton {
    display: flex;
    justify-content:flex-end;
    align-items: center;
    button {
        margin: 1vw 2vw;
        background-color: #ffffff;
        border: var(--border-color) 1px solid;
        color: var(--plat-color);
        font-size: 1.2vw;
    }
}
.ProductItem {
  display: flex;
  flex-direction: column;
  margin: 0.75vw;
  width: 30%;
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
.ProductImg {
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
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
