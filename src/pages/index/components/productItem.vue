<template>
  <div>
    <div class="categoryslider" style="flex:20%" >
        <ul id='categoryLIst'>
            <li>
                <a @click="CatchProductItem('All')">熱銷</a>
            </li>
            <li>
                <a @click="filterNew()">新品</a>
            </li>
            <li>
                <a @click="CatchProductItem('earing')">耳環</a>
            </li>
            <li>
                <a @click="CatchProductItem('necklace')">項鍊</a>
            </li>
            <div class="cartSlider">
              <a>待會再看</a><br />
              <a v-if="CartInNothing">還沒有看到喜歡的！</a>
              <div v-for="(Product,index) in cartData" :key="Product[1]+index">
                <a style="font-size:1.2vw;"  @click="backData (Product[0])">{{Product[2]}}</a>
              </div>
            </div>
        </ul>
      </div>
    <div style="background-color: var(--product-bg-color); flex:80%">
      <div class="filterButton">
        <div style="margin: 1vw 3vw;">
          <input class="searcher" style="margin:0vw;" placeholder="要找..." v-model="searchValue">
          <button style="margin:0vw;" @click="search ()">search</button>
        </div>
        <div>
          <button @click="sortPrice()">價錢高低</button>
          <button>購買次數</button>
          <button @click="sortDate()">上架時間</button>
        </div>
      </div>
      <div class="Product" id="Product">
        <div v-for="(Product,index) in Products" :key="Product[1]+index" class="ProductItem">
          <div class="ProductItemInfo">
            <div class="ProductImg"  @click="backData (Product[0])">
              <img :src="Product[7]" />
            </div>
            <a style="font-size:1.2vw;"  @click="backData (Product[0])">{{Product[2]}}</a>
            <br />
            <div style="padding-top:1vw; display:flex; justify-content: space-between;">
              <a style="font-size:1.4vw;">NT: {{Product[3]}}</a>
              <a style="float:right; margin:3px 5px;" >
                <i class="far fa-heart" :class="{fas : Product[5] }" @click="addCart(Product[0])"></i>
              </a>
            </div>
          </div>
          <a style="font-size:0.5vw">上架：{{Product[9]}}</a>
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
import $ from 'jquery'
const moment = require('moment')
export default {
  data: function () {
    return {
      Products: [],
      pageTotals: [],
      paginationTotal: '',
      currentPage: '',
      datapage: 12,
      catchData: [],
      sortRe: true,
      searchValue: '',
      cartData: [],
      CartInNothing: true
    }
  },
  watch: {
    cartData: function () {
      if (this.cartData[0] === undefined) {
        this.CartInNothing = !this.CartInNothing
        // console.log(this.CartInNothing)
      }
    }
  },
  methods: {
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
        // console.log(this.currentPage)
      }
      this.currentPage = currentPage
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
        // console.log(Id)
      }
      for (let i = 0; i < this.catchData.length; i++) {
        this.catchData[i][9] = moment(this.catchData[i][9]).format('MM/DD/YYYY')
      }
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
      // console.log(this.catchData)
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
        // console.log(this.catchData)
        this.sortRe = !this.sortRe
      } else {
        this.catchData.sort(function (a, b) {
          return a[3] - b[3]
        })
        this.catchData.reverse()
        // console.log(this.catchData)
        this.sortRe = !this.sortRe
      }
      // console.log(this.sortRe)
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
      this.sort0()
    },
    sortDate () {
      if (this.sortRe === true) {
        this.catchData.sort(function (a, b) {
          return a[9] < b[9] ? 1 : -1
        })
        // console.log(this.catchData)
        this.sortRe = !this.sortRe
      } else {
        this.catchData.sort(function (a, b) {
          return a[9] < b[9] ? 1 : -1
        })
        this.catchData.reverse()
        // console.log(this.catchData)
        this.sortRe = !this.sortRe
      }
      // console.log(this.sortRe)
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
      this.sort0()
    },
    filterNew () {
      for (let i = 0; i < this.catchData.length; i++) {
        var day1 = new Date(this.catchData[i][9].replace(/-/g, '/'))
        var day2 = new Date() // 當前日期
        var day = day2.getTime() - day1.getTime()
        var time = parseInt(day / (1000 * 60 * 60 * 24))
        this.catchData[i].push(time)
      }
      this.catchData = this.catchData.filter(
        function (item) {
          return item[11] < 30 // 篩掉小於值
        }
      )
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
      this.pageSelect()
    },
    search () {
      this.catchData = this.ProdcutData
      var searched = this.catchData.map(obj => {
        if (Object.keys(obj).some(property => obj[2].toString().indexOf(this.searchValue) !== -1)) {
          // 用陣列提供的map函式，遍歷出每筆資料
          // 由於object無map、filter函式，使用Object.keys取得object裡的每個property以遍歷每一object裡的內容。而Object提供some函式，只要其中一筆內容符合則回傳true
          // 接著使用obj[property] 取得該物件屬性內的值。
          return obj
        }
      })
      var Realsearched = searched.filter(function (obj) {
        return obj !== undefined
      })
      this.catchData = Realsearched
      // console.log(this.catchData)
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1)
      this.pageSelect()
    },
    addCart (i) {
      if (this.cartData[0] === undefined) {
        this.CartInNothing = !this.CartInNothing
      }
      this.ProdcutData[i][5] = !this.ProdcutData[i][5]
      this.pageSelect() // 重新載入
      this.cartData = this.catchData.filter(
        function (item) {
          return item[5] === true // 篩掉出true
        }
      )
    },
    backData (i) {
      console.log(this.catchData[i])
      var data = [[
        this.catchData[i][0],
        this.catchData[i][1],
        this.catchData[i][2],
        this.catchData[i][3],
        this.catchData[i][4],
        this.catchData[i][5],
        this.catchData[i][6],
        this.catchData[i][7],
        this.catchData[i][8],
        this.catchData[i][9],
        this.catchData[i][10]
      ]]
      var parameter = {}
      parameter = {
        url: 'https://docs.google.com/spreadsheets/d/1LhZ_9DO6JNX2Q7DO_HKRVDoGtyRGEp2ne-m_aIlYQq4/edit#gid=0',
        name: '工作表1',
        data: data.toString(),
        row: this.catchData[i][0],
        column: this.catchData[i].length
      }
      $.get('https://script.google.com/macros/s/AKfycbzKEwZkfPc610W7d8w8cktq6OO2R8Tfw6GgmHe1aZVGDbkXlGQ/exec', parameter)
      window.setTimeout(window.location.href = 'productSingle.html', 2000)
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
    padding-top:1vw;
    ul{
      background-color: var(--product-bg-color);
    }
    li{
        padding: 1.5vw 0;
    }
    li:hover{
        border-bottom:1px var(--border-color) solid;
    }
    a{
        font-size: 1.5vw;
    }
    .cartSlider{
      padding-top:2vw;
      border-top:1px solid var(--border-color);
      background-color: var(--cart-bg-color)
    }
}
.Product {
  display: flex;
  position: relative;
  flex-wrap: wrap;
}
.filterButton {
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: var(--background-color);
    button {
        margin: 1vw 2vw;
        background-color: #ffffff;
        border: var(--border-color) 1px solid;
        color: var(--plat-color);
        font-size: 1.2vw;
    }
    .searcher{
      border: var(--border-color) 1px solid;
      margin: 1vw 2vw;
      font-size: 1.2vw;
    }
}
.ProductItem {
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: calc(25% - 30px);
  padding: 10px;
  background-color: #ffffff;
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
