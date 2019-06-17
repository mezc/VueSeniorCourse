<template>
  <div>
    <!-- 轮播图部分 -->
    <mt-swipe :auto="2000">
      111111111111111
      <mt-swipe-item v-for="(item,index) in imgInfo" :key="index">
        
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格部分 -->
    <div class="grid">

      <ul>
        <li><a href="">
          <span class="back-img"></span>
          <div>11111111111111111111</div>
          </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return {
      imgInfo:[]//用来保存轮播图数据
    }
  },
  created(){
    //访问服务器url为“https://www.sinya.online/api/getlunbo”
    this.$axios.get("getlunbo")
    .then(res=>{
      // console.log(res)
      this.imgInfo = res.data.message
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe-items-wrap{

  }
</style>
