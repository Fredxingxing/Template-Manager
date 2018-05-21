<template>
  <div >
  <div class="swiper-container shake-constant">
    <div class="swiper-wrapper"><div class="swiper-slide" style="background-image: url(&quot;http://113.107.241.242/attachment/material/imageshho1ZeT3cSxcX8eA5XePqm82ffaiXz.jpg&quot;); display: block; z-index: 1;"></div><div class="swiper-slide" style="background-image: url(&quot;http://113.107.241.242/attachment/material/images95s9ZmT3cS1k8f7a9xASfbbc210qTw.jpg&quot;); display: none; z-index: 0;"></div><div class="swiper-slide" style="background-image: url(&quot;http://113.107.241.242/attachment/material/images7wo8UEoSaFIFTAUu60kXWle3F1Kd2F.jpg&quot;); display: none; z-index: 0;"></div><div class="swiper-slide" style="background-image: url(&quot;http://113.107.241.242/attachment/material/imagesCdPRsQqcL5ajVoVcB5j31X5VJRnJcs.jpg&quot;); display: none; z-index: 0;"></div><div class="swiper-slide" style="background-image: url(&quot;http://113.107.241.242/attachment/material/imagestVgUshKbtYOWHUVSl1BP59OTs3IgXD.jpg&quot;); display: block; z-index: 0;"></div></div>
  </div>
  <div class="container mask">
    <div class="navbar">
      <div class="logo">
        <img src="../../static/image/favicon.png" class="logo-image">
      </div>
      <div class="title">
        <span>BpHots - Templates</span>
      </div>
      <div class="nav-toggle">
        <i class="fa fa-bars show"></i>
        <i class="fa fa-chevron-right hide"></i>
      </div>
      <div class="clear"></div>
    </div>
    <div class="modal show" id="modal-logs">
      <div class="modal-body">
        <div class="templates">
          <div class="templates-herolist" >
            <div class="templates-herolist-row templates-bg" v-for="(item,index) in heronamelist" >
              <div v-on:click="selectHero(item,index)"  class=" btn-herolist  btn-herolist-default">
                <div  class="templates-herolist-row-heroname">{{item.basic}}</div>
                <img class="images" v-bind:src="item.heroImage" >
              </div>
            </div>
          </div>
          <div class="templates-detail">
            <div class="templates-detail-top">
              <div class="templates-detail-top-info templates-bg">
                <div class="templates-detail-top-info-title">{{HeroName}}</div>
                <div class="templates-detail-top-info-desc">- 英雄 -</div>
              </div>
              <div class="templates-detail-top-modes templates-bg">
                <div class="templates-detail-top-modes-btns">
                  <div class="templates-detail-top-modes-row">
                    <div class="templates-detail-top-modes-btn btn btn-default" v-bind:class="{'btn-default-active':relationNum==1}" v-on:click="relation(item.index,1)" >基础属性</div>
                    <div class="templates-detail-top-modes-btn btn btn-default " v-bind:class="{'btn-default-active':relationNum==2}" v-on:click="relation(item.index,2)" >相生关系</div>
                  </div>
                  <div class="templates-detail-top-modes-row">
                    <div class="templates-detail-top-modes-btn btn btn-default" v-bind:class="{'btn-default-active':relationNum==3}" v-on:click="relation(item.index,3)">被克制关系</div>
                    <div class="templates-detail-top-modes-btn btn btn-default" v-bind:class="{'btn-default-active':relationNum==4}" v-on:click="relation(item.index,4)">克制关系</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="templates-detail-main templates-bg" >
              <div class="templates-detail-main-herolist" >
                <div class="templates-detail-main-herolist-row"   v-for="detail in selectDetail"  v-model="selectDetail">
                  <a style="color: #eeeeee;align-self: center;margin-right: 4px;" v-on:click="changePoint(detail,1)">+</a>
                  <div class="templates-detail-main-herolist-row-heroname">{{detail.detailname}}</div>
                  <div class="progress progress-lg">
                    <div class="progress-bar p12" role="progressbar">{{detail.score}}</div>
                  </div>
                  <a style="color: #eeeeee;align-self: center;margin-left: 4px;"  v-on:click="changePoint(detail,-1)">-</a>
                </div>
                <button v-on:click="upload(detail)">上传</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="wrapper table">
      <div class="content td">
      </div>
      <div class="slide-info tr">
        <div class="td">
          <div class="author">
            <span class="text-i18n" data-word="author">插画作者：</span>
            <span class="author-name">Blizzard</span>
          </div>
        </div>
      </div>
      <div class="wrapper-footer tr">
        <div class="site-info td">
          <div class="copyrights">© 2018 BpHelper /
            <a class="icp-link" href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备17070591号</a>
          </div>
          <div class="license"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default { //会自动生成new vue({})
  name: 'Templates',
  data() {  //=function data(){ return msg:....} 所有的数据从这里展现
    return {
      newItem: '',
      heronamelist:[ ],
      HeroName:'',
      details:[],
      item:[],
      detail:[],
      Score:0,
      DetailName:[],
      detailname:[],
      score:[],
      detailss:[],
      relationNum:1,
      index:'',
      heroId:[],
      selectDetail:[],
      relationNum:1,
      jichu:[],
      xiangsheng:[],
      kezhi:[],
      beikezhi:[],
      heroindex:0,


    }
  },
  filters:{

  },
  mounted: function () {
    this.$nextTick(function () {
      this.templateView();

    })

  },
  watch:{
    selectDetail:function(selectDetail,electDetail){
      console.log(selectDetail);
     this.detail=selectDetail;
    }
  },
  methods: {
    selectHero: function (item,index) {

     this.HeroName=item.name;
     this.detail=item.details;
     this.selectDetail=item.jichu;
     this.heroId=item.id;
     this.DetailName=item.jichu.detailname;
     this.Score=item.jichu.score;
    console.log(this.DetailName);
    console.log(this.Score);
      console.log(this.item);
     console.log(index);
     this.heroindex=index;
   // console.log(selectDetail);
     if(index==(item.id-1))
      {
      console.log("您选中了"+item.name);
    }

},
  changePoint:function(detail,num){
     if(num>0){
       detail.score++;
       if(detail.score>10) {
         detail.score=10;
       }
     }
     else{
       detail.score--;
       if(detail.score<-10){
         detail.score=-10;
       }
     }
  },
    relation:function (index,num) {
      switch (num){
        case 1:
          this.relationNum=1;
          console.log(this.heroindex);
          this.selectDetail=this.heronamelist[this.heroindex].jichu;
          this.detail=this.heronamelist[this.heroindex].jichu;

          break;
        case 2:
          this.relationNum=2;
          console.log(this.heroindex);
            this.selectDetail=this.heronamelist[this.heroindex].xiangsheng;
            this.detail=this.heronamelist[this.heroindex].xiangsheng;
          break;
        case 3:
          this.relationNum=3;
          console.log(this.heroindex);
          this.selectDetail=this.heronamelist[this.heroindex].beikezhi;
          this.detail=this.heronamelist[this.heroindex].beikezhi;
          break;
        case 4:
          this.relationNum=4;
          console.log(this.heroindex);
          this.selectDetail=this.heronamelist[this.heroindex].kezhi;
          this.detail=this.heronamelist[this.heroindex].kezhi;
          break;
      }
    },
  //取数据的方法
    templateView: function () {
      var _this = this;
      this.$axios({
        method:'get',
       url:('/static/template.json'),
       // url:'http://old.bphots.com/templates/templates/offer/list',
        //请求头信息
        //headers: {'X-Requested-With': 'XMLHttpRequest'},
        //设置超时
       // timeout:5000,
       // withCredentials:true,   //加了这段就可以跨域了
        //返回数据类型
       // responseType:'jsonp'
      }).then(function(response){
        _this.heronamelist = response.data.result.Herolist;

      });
    },
    //上传的方法
    upload:function (detail) {
     // var uploadData=new Object();
    //   uploadData.hero_id=this.heroId;
     //  uploadData.item=this.HeroName;
     //  uploadData.part="1";
     //  uploadData.point="1";
    //   var param=JSON.stringify(uploadData);
      // var params=uploadData.parseJSON();
    //   console.log(uploadData);
    //   comsole.log(param)
      this.$axios.post('http://old.bphots.com/templates/offer', {
        hero_id:this.heroId,
        item:'hero_3',
        part:'2',
        point:this.score
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finished{
    text-decoration: underline;
  // text-decoration: chartreuse;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  html, body {
    position: relative;
    height: 100%;
    -ms-overflow-style:none;
    overflow:-moz-scrollbars-none;
  }
  body {
    background: #000;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'å¾®è½¯é›…é»‘', 'simhei';
   // font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .logo {
    float: left;
    margin: 1rem;
    height: 2rem;
  }
  .logo-image {
    height: 2rem;
  }
  .title {
    float: left;
    color: white;
    font-size: 1.4rem;
    margin-top: 1.2rem;
  }
  .templates {
    width: 60rem;
    height: 40rem;
    margin: 10rem auto;
  }
  .templates-bg {
    background: linear-gradient(to bottom,rgba(255,255,255,.15) 0%,rgba(255,255,255,.02) 100%) no-repeat border-box;
    border: solid 1px rgba(255,255,255,.1);
    box-sizing: border-box;
  }
  .templates-herolist {
    width: 15rem;
    height: 40rem;
    /* background-color: #9c27b0; */
    float: left;
    overflow: scroll;
  }
  .templates-herolist-row {
    width: 15rem;
    height: 5rem;
    /* background-color: #9c27b0; */
    /* background: url(/images/bg/ana.png) no-repeat; */
    float: left;
    /* border: #eee 1px solid; */
  }
  .templates-herolist-row-heroname {
    margin: 1.5rem 12rem 0 0;
    color: #eee;
    font-size: 1.5rem;
    text-align: -moz-left;
  }
  .templates-detail {
    width: 45rem;
    height: 40rem;
    /* background-color: #f44336; */
    float: left;
  }
  .templates-detail-top {
    width: 45rem;
    height: 10rem;
    float: left;
  }
  .templates-detail-main {
    width: 45rem;
    height: 30rem;
    float: left;
  }
  .templates-detail-main-herolist {
    width: 38rem;
    height: 25rem;
    /* background-color: #f44336; */
    margin: 2.5rem auto;
    overflow: scroll;
  }
  .templates-detail-main-herolist-row {
    width: 38rem;
    // height: 2.5rem;
    margin-bottom: 1rem;
    display: flex;
    /* background-color: #7c108a;  */
  }
  .templates-detail-main-herolist-row-portrait {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
    height: 2rem;
    width: 2rem;
    background: url(/images/portrait/ana.png);
    background-size: 100%;
    float: right;
  }
  .templates-detail-main-herolist-row-heroname {
    // margin-top: 0.6rem;
    /* height: 2.5rem; */
    color: #eee;
    width: 12rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    // font-size: 1.3rem;
  }
  .templates-detail-main-herolist-row-progress {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 22rem;
    background-color: #eee;
    float: right;
  }
  .templates-detail-top-info {
    width: 28rem;
    height: 10rem;
    /* background-color: #ffeb3b; */
    float: left;
  }
  .templates-detail-top-info-title {
    margin: 2.5rem auto 0;
    color: #eee;
    font-size: 2.5rem;
    text-align: center;
  }
  .templates-detail-top-info-desc {
    margin: 0.1rem auto 0;
    color: #eee;
    font-size: 1rem;
    text-align: center;
  }
  .templates-detail-top-modes {
    width: 17rem;
    height: 10rem;
    /* background-color: #2196f3; */
    float: left;
  }
  .swiper-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    position: absolute;
    width: 110%;
    height: 100%;
    text-align: center;
    font-size: 18px;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: none;
    animation: 6s slideToLeft linear forwards;
  }
  .crazy .swiper-slide {
    background-size: contain;
    width: 100%;
    animation: none;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 100;
  }
  .images{
    position:relative;
    left: 0px;
    top: -52px;

  }
  .table {
    display: table;
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .content {
    text-align: center;
    vertical-align: middle;
    color: #fff;
    height: 100%;
  }
  .page-title {
    position: relative;
    font-size: 2rem;
    padding: 0 2rem;
    text-shadow: 0 0 6px;
  }
  .page-title:after {
    content: ' ';
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    border-right: 1px solid #fff;
    animation: blink 1s steps(2) infinite;
  }
  .version {
    font-size: 1rem;
  }
  .page-desc {
    margin: auto;
    padding: 1.5rem 2rem 2rem;
    font-size: 1rem;
    line-height: 2rem;
    text-shadow: 1px 1px 3px rgba(255,255,255,.8);
  }
  .page-footer {
    position: relative;
    margin: 0 2rem;
    text-align: center;
    height: 4rem;
  }
  .wrapper-links {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .content-links {
    display: flex;
    justify-content: center;
  }
  .download-link {
    flex: 1;
  }
  .download-link .btn.btn-default {
    max-width: 70%;
    font-size: 1rem;
  }
  .btn {
    display: block;
    position: relative;
    margin: auto;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease-out;
    overflow: hidden;
  }
  .btn-default {
    background-color: rgba(255, 255, 255, .2);
    color: #fff;
    border: 1px solid #fff;
    border-radius: .5rem;
    font-size: 1.5rem;
  }
  .btn-default:hover {
    color: #000;
    background-color: rgba(255, 255, 255, .8);
  }
  .btn-default:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 0;
    padding: 0;
    padding-bottom: 30%;
    margin: auto;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s linear;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
  .btn-default-active {
    background-color: #eee;
    color: #000;
  }
  .btn-default:active:after {
    width: 120%;
    padding-bottom: 120%;
    opacity: 1;
  }
  .btn-circle {
    color: #fff;
    margin-bottom: 2rem;
    padding: 0;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: #333;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 2px #fff;
    outline: none;
  }
  .btn-circle:hover {
    background-color: #eee;
    color: #000;
  }
  .btn-herolist{
    display: block;
    position: relative;
    margin: auto;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease-out;
    overflow: hidden;
  }
  .btn-herolist-default {

    color: #fff;
    width: 240px;
    height: 80px;
  }
  .btn-herolist-default:hover {
    color: #000;
    background-color: rgba(255, 255, 255, .8);
  }
  .btn-herolist-default:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 0;
    padding: 0;

    margin: auto;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s linear;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
  .btn-herolist-active {
    background-color: #eee;
    color: #000;
  }
  .btn-herolist-default:active:after {
    width: 120%;
    padding-bottom: 120%;
    opacity: 1;
  }

  .increasePoint{
    box-sizing:border-box;
    float: right;
    padding-right: 100px;
    color: #eee;

  }

  .decreasePoint{
    box-sizing:border-box;
    float: left;
    color: #eee;

  }
  .tr {
    display: table-row;
  }
  .td {
    display: table-cell;
  }
  .site-info {
    vertical-align: bottom;
  }
  .icp-link {
    text-decoration: none;
    color: #ccc;
  }
  .copyrights, .license {
    color: #ccc;
    text-align: right;
    line-height: 2rem;
    margin-right: .5rem;
  }
  .author {
    text-align: right;
    margin-right: .5rem;
  }
  .author a{
    color: #ccc;
    text-decoration: none;
  }
  .slide-info {
    color: #ccc;
    height: 45%;
  }
  .slide-info .td {
    vertical-align: bottom;
  }
  .navbar {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 101;
  }
  .nav-toggle {
    float: right;
    position: relative;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
    height: 2rem;
    width: 3rem;
    text-align: center;
  }
  .nav-toggle i{
    height: 1rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    transition: all .3s linear;
  }
  .nav-toggle.active .show{
    opacity: 0;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .nav-toggle .hide {
    opacity: 0;
  }
  .nav-toggle.active .hide{
    opacity: 1;
  }
  .nav-list {
    float: right;
    transition: all .5s ease-out;
    -webkit-transform: translateX(200%);
    transform: translateX(200%);
    opacity: 0;
  }
  .nav-list.show {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  .nav-list a {
    text-decoration: none;
    color: #fff;
  }
  .nav-item {
    display: block;
    position: relative;
    padding: .5rem;
    float: left;
    color: #fff;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }
  .nav-item:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    margin: auto;
    background-color: #666;
    transition: all .2s ease-out;
    z-index: -1;
  }
  .nav-item:hover::after {
    width: 100%;
  }
  .nav-item.active::after {
    background-color: #888;
    width: 100%;
  }
  .nav-item.crazy.active::after {
    animation: rainbow 3s linear infinite;
  }
  .nav-item.lang-toggle {
    position: relative;
    padding: 0;
    width: 3rem;
    line-height: 2rem;
    font-size: 1rem;
    transition: transform 6s linear;
  }
  .nav-item.lang-toggle.active i{
    animation: flip .5s ease-out;
  }
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    transition: all .5s ease-out;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    overflow: hidden;
    z-index: 100;
  }
  .modal.show {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .modal-body {
    height: 100%;
    padding-top: 1px;
  }
  .modal-content {
    color: #fff;
    font-size: 1rem;
    background-color: rgba(255,255,255,.2);
    max-height: 70%;
    overflow-y: hidden;
    margin: 4rem auto;
    padding: 0 3rem;
  }
  .modal-footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
  .shake-explode:hover,
  .shake-explode.shake-constant,
  .shake-explode + .container {
    animation-name: shake-explode;
    animation-duration: 100ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .a-center {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .clear {
    clear: both;
  }
  @media (min-width: 440px) {
    .page-title {
      font-size: 4rem;
    }
    .page-desc {
      font-size: 1rem;
      line-height: 2rem;
      width: 800px;
    }
    .content {
      vertical-align: bottom;
      height: 55%;
    }
    .version {
      font-size: 2rem;
    }
    .nav-toggle {
      display: none;
    }
    .nav-list {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    .nav-item {
      padding: 1rem 1.5rem;
    }
    .nav-item-btn {
      padding: 1rem;
    }
    .nav-item.lang-toggle {
      height: 3rem;
      font-size: 1.5rem;
      line-height: 3rem;
    }
    .btn-default {
      padding: 1rem;
      max-width: 20%;
      width: 250px;
    }
    .download-link {
      flex: none;
    }
    .download-link .btn.btn-default {
      max-width: 60%;
    }
    .modal-content {
      width: 80%;
      max-height: 80%;
    }
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes flip {
    from {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    to {
      -webkit-transform: rotateY(720deg);
      transform: rotateY(720deg);
    }
  }
  @keyframes flip {
    from {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    to {
      -webkit-transform: rotateY(720deg);
      transform: rotateY(720deg);
    }
  }
  @-webkit-keyframes slideToLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    5% {
      opacity: 1;
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(-10%);
      transform: translateX(-10%);
    }
  }
  @keyframes slideToLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    5% {
      opacity: 1;
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(-10%);
      transform: translateX(-10%);
    }
  }
  @-webkit-keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes trembling {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    40% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    43% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    46% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    49% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    52% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    55% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    58% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @keyframes trembling {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    40% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    43% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    46% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    49% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    52% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    55% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    58% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @-webkit-keyframes rainbow {
    from {
      background-color: #f44336;
    }
    15% {
      background-color: #ff5722;
    }
    30% {
      background-color: #ffeb3b;
    }
    45% {
      background-color: #8bc34a;
    }
    60% {
      background-color: #009688;
    }
    75% {
      background-color: #2196f3;
    }
    90% {
      background-color: #9c27b0;
    }
    to {
      background-color: #f44336;
    }
  }
  @keyframes rainbow {
    from {
      background-color: #f44336;
    }
    15% {
      background-color: #ff5722;
    }
    30% {
      background-color: #ffeb3b;
    }
    45% {
      background-color: #8bc34a;
    }
    60% {
      background-color: #009688;
    }
    75% {
      background-color: #2196f3;
    }
    90% {
      background-color: #9c27b0;
    }
    to {
      background-color: #f44336;
    }
  }
  @-webkit-keyframes shake-explode {
    10% {
      -webkit-transform: translate(3px, 5px) rotate(6deg);
      transform: translate(3px, 5px) rotate(6deg);
      opacity: .31;
    }
    20% {
      -webkit-transform: translate(16px, -11px) rotate(-3deg);
      transform: translate(16px, -11px) rotate(-3deg);
      opacity: .72;
    }
    30% {
      -webkit-transform: translate(0px, -9px) rotate(17deg);
      transform: translate(0px, -9px) rotate(17deg);
      opacity: .14;
    }
    40% {
      -webkit-transform: translate(13px, -9px) rotate(-2deg);
      transform: translate(13px, -9px) rotate(-2deg);
      opacity: .72;
    }
    50% {
      -webkit-transform: translate(-6px, -3px) rotate(5deg);
      transform: translate(-6px, -3px) rotate(5deg);
      opacity: .78;
    }
    60% {
      -webkit-transform: translate(14px, 9px) rotate(-13deg);
      transform: translate(14px, 9px) rotate(-13deg);
      opacity: .74;
    }
    70% {
      -webkit-transform: translate(16px, 3px) rotate(-19deg);
      transform: translate(16px, 3px) rotate(-19deg);
      opacity: .38;
    }
    80% {
      -webkit-transform: translate(-5px, 10px) rotate(10deg);
      transform: translate(-5px, 10px) rotate(10deg);
      opacity: .25;
    }
    90% {
      -webkit-transform: translate(-13px, -15px) rotate(12deg);
      transform: translate(-13px, -15px) rotate(12deg);
      opacity: .04;
    }
    0%,
    100% {
      -webkit-transform: translate(0, 0) rotate(0);
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes shake-explode {
    10% {
      -webkit-transform: translate(3px, 5px) rotate(6deg);
      transform: translate(3px, 5px) rotate(6deg);
      opacity: .31;
    }
    20% {
      -webkit-transform: translate(16px, -11px) rotate(-3deg);
      transform: translate(16px, -11px) rotate(-3deg);
      opacity: .72;
    }
    30% {
      -webkit-transform: translate(0px, -9px) rotate(17deg);
      transform: translate(0px, -9px) rotate(17deg);
      opacity: .14;
    }
    40% {
      -webkit-transform: translate(13px, -9px) rotate(-2deg);
      transform: translate(13px, -9px) rotate(-2deg);
      opacity: .72;
    }
    50% {
      -webkit-transform: translate(-6px, -3px) rotate(5deg);
      transform: translate(-6px, -3px) rotate(5deg);
      opacity: .78;
    }
    60% {
      -webkit-transform: translate(14px, 9px) rotate(-13deg);
      transform: translate(14px, 9px) rotate(-13deg);
      opacity: .74;
    }
    70% {
      -webkit-transform: translate(16px, 3px) rotate(-19deg);
      transform: translate(16px, 3px) rotate(-19deg);
      opacity: .38;
    }
    80% {
      -webkit-transform: translate(-5px, 10px) rotate(10deg);
      transform: translate(-5px, 10px) rotate(10deg);
      opacity: .25;
    }
    90% {
      -webkit-transform: translate(-13px, -15px) rotate(12deg);
      transform: translate(-13px, -15px) rotate(12deg);
      opacity: .04;
    }
    0%,
    100% {
      -webkit-transform: translate(0, 0) rotate(0);
      transform: translate(0, 0) rotate(0);
    }
  }
  .progress {
    float: right;
    width: 23rem;
    /* height: 30rem; */
    /* margin-bottom: 22px; */
    overflow: hidden;
    background-color: rgba(0,0,0,.5);
    border-radius: 3px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  }
  .progress-bar {
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
  }
  .progress-lg {
    // margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 22px;
  }
  .p1 {
    float: right;
    width: 90.90%;
    background-color: #9D00C5;
  }
  .p2 {
    float: right;
    width: 81.81%;
    background-color: #A100BE;
  }
  .p3 {
    float: right;
    width: 72.72%;
    background-color: #A500B7;
  }
  .p4 {
    float: right;
    width: 63.63%;
    background-color: #A900B0;
  }
  .p5 {
    float: right;
    width: 54.54%;
    background-color: #AD00A9;
  }
  .p6 {
    float: right;
    width: 45.45%;
    background-color: #B100A2;
  }
  .p7 {
    float: right;
    width: 36.36%;
    background-color: #B5009B;
  }
  .p8 {
    float: right;
    width: 27.27%;
    background-color: #B90094;
  }
  .p9 {
    float: right;
    width: 18.18%;
    background-color: #BD008D;
  }
  .p10 {
    float: right;
    width: 9.09%;
    background-color: #C10086;
  }
  .p11 {
    float: left;
    text-align: center;
    width: 0;
    background-color: #C5007F;
  }
  .p12 {
    float: left;
    width: 9.09%;
    background-color: #C90078;
  }
  .p13 {
    float: left;
    width: 18.18%;
    background-color: #CD0071;
  }
  .p14 {
    float: left;
    width: 27.27%;
    background-color: #D1006A;
  }
  .p15 {
    float: left;
    width: 36.36%;
    background-color: #D50063;
  }
  .p16 {
    float: left;
    width: 45.45%;
    background-color: #D9005C;
  }
  .p17 {
    float: left;
    width: 54.54%;
    background-color: #DD0055;
  }
  .p18 {
    float: left;
    width: 63.63%;
    background-color: #E1004E;
  }
  .p19 {
    float: left;
    width: 72.72%;
    background-color: #E50047;
  }
  .p20 {
    float: left;
    width: 81.81%;
    background-color: #E90040;
  }
  .p21 {
    float: left;
    width: 90.90%;
    background-color: #ED0039;
  }
  .templates-detail-top-modes-btns {
    margin-top: 2rem;
  }
  .templates-detail-top-modes-row {
    margin: 0 auto;
    width: 15rem;
  }
  .templates-detail-top-modes-btn {
    float: left;
    margin: 0.25rem;
    max-width: 7rem;
    padding: 0.5rem 0.25rem;
    font-size: 1rem;
    text-align: center;
    border: solid 1px rgba(255,255,255,.1);
    box-sizing: border-box;
  }

</style>
