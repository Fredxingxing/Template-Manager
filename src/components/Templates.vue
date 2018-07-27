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
      <div class="modal-body"v-if="mastershow==false">
        <div class="templates" v-on:click="reset()">
          <!--<el-alert title="未登录" center type="error" description="请选择您战网所在服务器以登录战网" v-if="templatesPermited===null && this.$i18n.locale==='zh-CN'" show-icon></el-alert>-->
          <el-alert center type="info" d v-if="templatesPermited===null" show-icon>
            <span class="el-alert__title">{{$t('lang.notloggin')}}</span>
           <slot>
             <p class="el-alert__description">{{$t('lang.description')}}</p>
           </slot>
          </el-alert>
          <div class="templates-herolist" v-if="showherolist==1">
            <div class="templates-herolist-row templates-bg" v-for="(item,index) in heronamelist">
              <div v-on:click="selectHero(item,index);showrelation=true;"  class=" btn-herolist  btn-herolist-default">
                <!--<div  class="templates-herolist-row-heroname">{{item.basic}}</div>-->
                <img class="images"  v-bind:src="item.pictures" >
              </div>
            </div>
          </div>
          <div class="templates-detail">
            <div class="templates-detail-top" v-if="showherolist==1">
              <div class="templates-detail-top-info templates-bg">
                <div class="templates-detail-top-info-title">{{HeroName}}</div>
                <div class="templates-detail-top-info-desc" v-if="showrelation==true">- {{$t('lang.title')}} -</div>
              </div>
              <div class="templates-detail-top-modes templates-bg">
                <div class="templates-detail-top-modes-row" v-if="showrelation==true">
                  <div class="templates-detail-top-modes-btn btn btn-default" v-bind:class="{'btn-default-active':relationNum==1}" v-on:click="relation(item.index,1);tag=true;" >{{$t('lang.base')}}</div>
                  <div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==3}" v-on:click="relation(item.index,3)">{{$t('lang.BeRestrained')}}</div>
                  <div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==true"  v-on:click="tag=false;relationNum=3;relation(item.index,3)">{{$t('lang.herorelation')}}</div>
                  <div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==4}" v-on:click="relation(item.index,4)">{{$t('lang.restraint')}}</div>
                  <div class="templates-detail-top-modes-btn btn btn-default " v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==2}" v-on:click="relation(item.index,2)" >{{$t('lang.synergy')}}</div>
                  <div class="templates-detail-top-modes-btn btn btn-default" style="position: absolute;top: 0;right: 0;" v-if="templatesPermited!=null" v-on:click="masterView(1)">{{$t('lang.masterView')}}</div>
                </div>
              </div>
            </div>
            <!--<div class="templates-detail-top" v-if="showherolist==1&& language==0">-->
              <!--<div class="templates-detail-top-info templates-bg">-->
                <!--<div class="templates-detail-top-info-title">{{HeroName}}</div>-->
                <!--<div class="templates-detail-top-info-desc">- Hero -</div>-->
              <!--</div>-->
              <!--<div class="templates-detail-top-modes templates-bg">-->
                <!--<div class="templates-detail-top-modes-row" v-if="showrelation==true">-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default" v-bind:class="{'btn-default-active':relationNum==1}" v-on:click="relation(item.index,1);tag=true;" >base</div>-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==3}" v-on:click="relation(item.index,3)">BeRestrained</div>-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==true"  v-on:click="tag=false;relationNum=3;relation(item.index,3)">Hero Relation</div>-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default" v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==4}" v-on:click="relation(item.index,4)">Restraint</div>-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default " v-if="tag==false" v-bind:class="{'btn-default-active':relationNum==2}" v-on:click="relation(item.index,2)" >enhanced</div>-->
                  <!--<div class="templates-detail-top-modes-btn btn btn-default" style="position: absolute;top: 0;right: 0;" v-if="templatesPermited!=null" v-on:click="masterView(1)">Audit queries and processing</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="templates-detail-main templates-bg">
              <div class="templates-detail-main-herolist" style="position: relative;" :class="{tagFalse: tag === false}">
                <div v-if="beginTochange" style="color: #eeeeee">
                  <h4>{{$t('lang.introduction')}}</h4>
                </div>
                      <!--<div v-if="templatesPermited==0" id="loggin"class="loggin" >-->
                      <!--<label style="color: #eeee;margin: 0.75rem;">请选择您战网所在服务器</label>-->
                      <!--<div id="Area"class="templates-detail-top-modes-btn btn btn-default" style="margin:0.75rem;"v-for="area of ServerArea">{{area}}</div>-->
                      <!--</div>-->
                <div class="templates-detail-main-herolist-row" v-for="(detail,baseindex) in selectDetail" v-model="selectDetail" v-if="tag==true">
                     <!--<div class="templates-detail-main-herolist-row-portrait"></div>-->
                      <div class="templates-detail-main-herolist-row-heroname" >{{detail.name}}</div>
                  <a style="color: #eeeeee;align-self: center;margin-right: 4px;margin-top: 0px;cursor: pointer;font-size:x-large;" v-on:click="changePoint(detail,-1,baseindex)">-</a>
                       <div class="progress progress-lg" >
                        <div class="progress-bar " v-bind:class="'p'+(detail.score+11)" role="progressbar">{{detail.score}}</div>
                    </div>
                   <a style="color: #eeeeee;align-self: center;margin-left: 5px;margin-top: -10px;cursor: pointer;font-size:x-large;"  v-on:click="changePoint(detail,1,baseindex)">+</a>
                </div>
                <div v-if="tag==false" class="templates-detail-main-herolist-row-relation" v-for="(beikezhi,BKZnum) of BeRestrained" style="width: 23rem;margin-right: -10px;float: left;display: inline-flex;">
                  <img class="portrait"  v-bind:src="beikezhi.pictures" style="width: 32px;height: 32px;">
                  <div class="templates-detail-main-herolist-row-heroname-relation" style="width: 12.5rem;left: 0;text-align: center;" v-if=" $i18n.locale==='zh-CN'">{{beikezhi.name}}</div>
                  <div class="templates-detail-main-herolist-row-heroname-relation" style="width: 12.5rem;left: 0;text-align: center;" v-if=" $i18n.locale==='en-US'">{{beikezhi.engname}}</div>
                    <div class="row-number">
                      <span class="progress-bar-relation  number-handler number-digit" v-bind:class="'p'+(beikezhi.score+11)" style="width: 7rem;" role="progressbar"  v-on:click.stop="showScroller(BKZnum,3)">{{beikezhi.score}}</span>
                      <div class="number-scroller"  v-if=" relationNum===3 && onShowScoreTab===BKZnum" style="position: absolute;background: #000;z-index: 10;">
                        <div class="options-radio" v-for="num of scale" @click.stop="reset()" style="width: 7rem;">
                          <input class="inputnum" id="3" type="radio" :value="num" v-model="beikezhi.score" @click="uploadrelation(num)" />
                          <label  style="color:#dddd">{{num}}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="display: inline-block;width: 7rem;margin: 0 5px 0 -5px;">
                  <div v-if="tag==false" class="templates-detail-main-herolist-row-relation" v-for="(kezhi,KZnum) in restraint" style="width: 7rem;display: inline-flex;">
                    <div class="row-number">
                    <span class="progress-bar-relation   number-handler number-digit" v-bind:class="'p'+(kezhi.score+11)" style="width: 7rem;" role="progressbar" v-on:click.stop="showScroller(KZnum,4)">{{kezhi.score}}</span>
                      <div class="number-scroller"  v-if=" relationNum===4 &&onShowScoreTab===KZnum" style="position: absolute;background: #000;z-index: 10;">
                        <div class="options-radio-restraint" v-for="num of scale" @click.stop="reset()" style="width: 7rem;">
                          <input class="inputnum" id="4" type="radio" :value="num" v-model="kezhi.score" @click="uploadrelation(num)"/>
                          <label  style="color:#dddd">{{num}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="display: inline-block;width: 7rem;">
                  <div v-if="tag==false" class="templates-detail-main-herolist-row-relation" v-for="(xiangsheng,XSnum) in enhanced" style="width: 7rem;display: inline-flex;">
                    <div class="row-number">
                      <span class="progress-bar-relation  number-handler number-digit" v-bind:class="'p'+(xiangsheng.score+11)" style="width: 7rem;" role="progressbar" v-on:click.stop="showScroller(XSnum,2)">{{xiangsheng.score}}</span>
                      <div class="number-scroller"  v-if=" relationNum===2 &&onShowScoreTab===XSnum" style="position: absolute;background: #000;z-index: 10;">
                        <div class="options-radio-enhanced" v-for="num of scale" @click.stop="reset()" style="width: 7rem;">
                          <input class="inputnum" id="2" type="radio" :value="num" v-model="xiangsheng.score" @click="uploadrelation(num)" />
                          <label  style="color:#dddd">{{num}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <el-button type="info" class="submit" plain v-on:click="upload(selectDetail)" v-if="!beginTochange &&relationNum==1 ">{{$t('lang.submit')}}</el-button >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="masterlist" v-if="mastershow">
        <el-table :data="masterData" style="width: 100%;font-size:13px;" v-if=" this.$i18n.locale==='zh-CN'">
          <el-table-column prop="time" label="日期"  width="180"></el-table-column>
          <el-table-column prop="heroName" label="模板英雄名" width="180"></el-table-column>
          <el-table-column prop="part" label="提交关系" width="180"></el-table-column>
          <el-table-column prop="item" label="提交英雄(基础)" width="180"></el-table-column>
          <el-table-column prop="point" label="分数"  width="180"></el-table-column>
          <el-table-column prop="progress" label="审批进度" width="180"></el-table-column>
          <el-table-column prop="action" label="管理员审批" width="180" >
              <template slot-scope="scope">
                <el-button  v-if="templatesPermited==0" @click.native.prevent="deleteRow(scope.$index, masterData)" type="text" size="medium">撤回</el-button>
                <el-button  v-if="templatesPermited==1" @click.native.prevent="AgreeRow(scope.$index, masterData)" type="text" size="medium">同意</el-button>
                <el-button  v-if="templatesPermited==1" @click.native.prevent="RefuseRow(scope.$index, masterData)" type="text" size="medium">拒绝</el-button>
              </template>
          </el-table-column>
        </el-table>
        <el-table :data="masterData" style="width: 100%;font-size:13px;" v-if=" this.$i18n.locale==='en-US'">
          <el-table-column prop="time" label="data"  width="180"></el-table-column>
          <el-table-column prop="heroName" label="HeroName" width="180"></el-table-column>
          <el-table-column prop="part" label="submit relation" width="180"></el-table-column>
          <el-table-column prop="item" label="submit hero/base" width="180" ></el-table-column>
          <el-table-column prop="point" label="point"  width="180"></el-table-column>
          <el-table-column prop="progress" label="processing" width="180"></el-table-column>
          <el-table-column prop="action" label=" action" width="180" >
            <template slot-scope="scope">
              <el-button  v-if="templatesPermited==0" @click.native.prevent="deleteRow(scope.$index, masterData)" type="text" size="medium">Recall</el-button>
              <el-button v-if="templatesPermited==1" @click.native.prevent="AgreeRow(scope.$index, masterData)" type="text" size="medium">Agree</el-button>
              <el-button v-if="templatesPermited==1" @click.native.prevent="RefuseRow(scope.$index, masterData)" type="text" size="medium">Refuse</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 15px">
          <el-button type="info" round v-if="page>=2"  v-on:click="MasterClose(-1)">{{$t('lang.lastPage')}}</el-button>
          <el-button type="info" round v-if="!nopage" v-on:click="MasterClose(+1)">{{$t('lang.nextPage')}}</el-button>
          <el-button  type="info" round style="position: relative;float: right;margin-right: 3rem;" v-on:click="mastershow=false" >{{$t('lang.exitMasterView')}}</el-button>
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
  import _ from 'lodash';
export default { //会自动生成new vue({})
  name: 'Templates',
  data() {  //=function data(){ return msg:....} 所有的数据从这里展现
 var scale=[]
    for(var i=10;i>=-10;i--){
      scale.push(i)
    }
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
      relationNum:0,
      index:'',
      heroId:[],
      selectDetail:[],
      jichu:[],
      base:[],
      enhanced:[],
      restraint:[],
      BeRestrained:[],
      beginTochange:true,
      protrait:[],
      tag:1,
      showrelation:false,
      scale:scale,
      onShowHeroId:null,
      onShowScoreTab:null,
      showherolist:1,
      message:"",
      onShowScoreTabHero:null,
      mastershow:false,
      masterData: [],
      page:1,
      nopage:false,
      querylist:[],
      queryData:[],
      baseObject:{
        strong:'版本强势',
        firstpick:'先手一选',
        stability:'使用容错率',
        creep:'清线效率',
        creep_solo:'上单能力',
        creep_global:'全球流能力',
        creep_double:'清双线能力'
    },
      maplist:[],
      baseindex:null,
      templatesPermited:null,//{$templatesPermited}=1,0，null    window.templatePermited  0普通 1 管理 Null未登录
      language:null //在显示detail页面赋值this.$i18n.locale  不单独设置好像不成功，好像是异步问题？
    }
  },
  filters:{

  },
  mounted: function () {
    this.$nextTick(function () {
     // this.$i18n.locale='zh-CN';
      this.templateView();
      if(this.templatesPermited === null) {
        this.beginTochange = true;
      }
      var resArr = new Array();
      // for(var id=1;id<=79;id++){
      //   var heroitem = "hero";
      //   heroitem = heroitem + "_" + id;
      //   resArr.push(this.itemToheroname(heroitem));
      // }
      // this.querylist=resArr;
      // console.log(this.querylist);
    //  this.queryView(1);
     // console.log(this.queryData);

    })
  },
  watch:{
    //选择英雄
    // queryData:function(newData,oldData){
    //   console.log(newDaya);
    //  this.detail=selectDetail;
    //  this.beginTochange=false;
    // },
    // templatesPermited:function (newPermited,oldPermited) {
    //   if(this.templatesPermited===0){
    //     this.showherolist=0;
    //     this.beginTochange=true;
    //   }
    // }
    // messagebox:function(newmessage,oldmessage){
    // }
    detail:function (newcolor,oldcolor) {

    }
  },
  // computed:{
  //   colorObject:function () {
  //     for(var i=0;i<this.base.length;i++){
  //       var colorindex='p'+(parseInt(this.base[i].score)+10).toString();
  //       this.colorObj[colorindex]="true";
  //       return this.colorObj;
  //     }
  //
  //   }
  // },
  methods: {
    selectHero: function (item,index) {
      this.heroId = item.id;
      this.queryView(this.heroId);
      this.relationNum = 1;
      if(this.$i18n.locale ==='zh-CN'){      //中文
        this.HeroName=item.name;
      }
      if(this.$i18n.locale==='en-US'){
        this.HeroName = item.basic;
      }  //英文
      this.beginTochange = false;
      this.tag = true;
      this.heroId = item.id;
      //base属性的转换
     if(index == (item.id-1))
      {
        console.log("您选中了 " + item.name);
      }
     // this.adviceView();
},
    changePoint:function(detail,num,index){
     if(num>0){
       detail.score++;
       if(detail.score>10) {
         detail.score = 10;
       }
     }
     else{
       detail.score--;
       if(detail.score<-10){
         detail.score = -10;

       }
     }
     this.baseindex = index;
     console.log(detail)
      console.log(detail.score);
      console.log(this.baseindex);
      // console.log(this.colorArr);
      // console.log(this.colorArr[5]);
  },
    relation:function (index,num) {
      switch (num){
        case 1:
          this.relationNum=1;
          //console.log(this.heroId);
          this.selectDetail=this.base;
          //this.detail=this.heronamelist[this.heroindex].jichu;
        //  this.Score=item.jichu.score;

          break;
        case 2:
          this.relationNum=2;
        //  console.log(this.heroId);
            this.selectDetail=this.enhanced;
          // this.xiangsheng=this.heronamelist[this.heroindex].xiangsheng;
          break;
        case 3:
          this.relationNum=3;
       //   console.log(this.heroId);
          this.selectDetail=this.BeRestrained;
        // this.beikezhi=this.heronamelist[this.heroindex].beikezhi;
          break;
        case 4:
          this.relationNum=4;
        //  console.log(this.heroId);
          this.selectDetail=this.restraint;
      //    this.kezhi=this.heronamelist[this.heroindex].kezhi;
          break;
      }
    },
    //取query的方法
    templateView: function () {
      var _this = this;
      //if(langague=="zh-CN")
      this.$axios({
        method:'get',
       url:('https://www.bphots.com/bp_helper/get/herolist?lang=zh-CN'),
      }).then(function(response){
        for(var a=0;a<response.data.length;a++){
           response.data[a].pictures="https://www.bphots.com/images/btn/"+response.data[a].basic.toLowerCase()+".png";
        }
        _this.heronamelist = response.data;
        console.log(_this.heronamelist);
      });
      this.$axios.post('https://www.bphots.com/bp_helper/get/maplist/v2').then(function(response){
       _this.maplist = response.data;
        console.log(_this.maplist);
      })
    },
    masterView:function(page){
      this.mastershow = true;
      var _this = this;
      this.$axios.post('http://old.bphots.com/templates/offer/list', {
        page:page,
        action:"new",
      })
        .then(function (response) {
          _this.masterData = response.data.data;
          console.log("masterData");
           for(var i=0;i<_this.masterData.length;i++){
             _this.masterData[i].time = _this.timestamptotime(_this.masterData[i].time);
             if(_this.$i18n.locale === 'zh-CN'){
             switch(_this.masterData[i].part){
               case 1:
                     _this.masterData[i].item = _this.itemTobasename(_this.masterData[i].item);
                     _this.masterData[i].part = "基础数据";
                    break;
               case 2:
                    _this.masterData[i].item =  _this.itemToheroname(_this.masterData[i].item);
                    _this.masterData[i].part = "配合相生";
                    break;
               case 3:
                 _this.masterData[i].item = _this.itemToheroname(_this.masterData[i].item);
                 _this.masterData[i].part = "被克制";
                 break;
               case 4:
                 _this.masterData[i].item = _this.itemToheroname(_this.masterData[i].item);
                 _this.masterData[i].part = "克制";
                 break;
             }}
             if(_this.$i18n.locale === 'en-US'){
               switch(_this.masterData[i].part){
                 case 1:
                   _this.masterData[i].item = _this.itemTobasename(_this.masterData[i].item);
                   _this.masterData[i].part = "base";
                   break;
                 case 2:
                   _this.masterData[i].item = _this.itemToheroname(_this.masterData[i].item);
                   _this.masterData[i].part = "synergy";
                   break;
                 case 3:
                   _this.masterData[i].item = _this.itemToheroname(_this.masterData[i].item);
                   _this.masterData[i].part = "BeRestrained";
                   break;
                 case 4:
                   _this.masterData[i].item = _this.itemToheroname(_this.masterData[i].item);
                   _this.masterData[i].part = "Restraint";
                   break;
               }}
             _this.masterData[i].heroName = _this.IdToheroname(_this.masterData[i].hero_id);
             _this.masterData[i].progress = null;
             if(_this.masterData[i].execute_time !== null){
               if(_this.$i18n.locale === 'zh-CN'){
                 _this.masterData[i].progress = "已批准";
               }
               if(_this.$i18n.locale === 'en-US'){
                 _this.masterData[i].progress = "Approved";
               }
             }
             if(_this.masterData[i].abandon_time !== null){
               if(_this.$i18n.locale === 'zh-CN'){
                 _this.masterData[i].progress = "已拒绝";
               }
               if(_this.$i18n.locale === 'en-US'){
                 _this.masterData[i].progress = "Rejected";
               }
             }
             if(_this.masterData[i].abandon_time == null&&_this.masterData[i].execute_time == null){
               if(_this.$i18n.locale === 'zh-CN'){
                 _this.masterData[i].progress = "待处理";
               }
               if(_this.$i18n.locale === 'en-US'){
                 _this.masterData[i].progress = "Pending";
               }
             }
          }
          console.log(_this.masterData);
        })
        .catch(function (error) {
          console.log(error);
          if(this.$i18n.locale === 'zh-CN'){
          _this.$notify.error({
            title: '审核页面打开失败',
            message: '请联系背锅助手',
          });}
          if(this.$i18n.locale === 'en-US'){
            _this.$notify.error({
              title: 'Open failed',
              message: 'Please contact us',
            });}
        });
    },
    queryView:function(id){
      console.log("query：");
      var _this = this;
      this.$axios.post('http://old.bphots.com/templates/query', {
        hero_id:id,
      })
        .then(function (response) {
           _this.queryData = response.data.data;
          console.log(_this.queryData);
          console.log("base:")
          _this.base = _this.queryData.base;
          if(_this.$i18n.locale === 'zh-CN'){   //中文
          let basearr_cn = Object.keys(_this.base).map((item, index) => ({name: item, score:_this.base[item]}));//json对象转数组
            for(var z = 0;z < basearr_cn.length;z++){
              basearr_cn[z].name = _this.baseObject[basearr_cn[z].name];
            }
          let basemap_cn = Object.keys(_this.base.map).map((item, index) => ({name: item, score:_this.base.map[item]}));
            for(var maplen_cn = 0;maplen_cn < basemap_cn.length;maplen_cn++){
              basemap_cn[maplen_cn].name = _this.maplist[basemap_cn[maplen_cn].name].name['zh-CN'];
            }
          basearr_cn.splice(7,1);
          for(var a = 0;a < basemap_cn.length;a++){
            basearr_cn.push(basemap_cn[a]);
          }
            _this.base = basearr_cn;
          }
          if(_this.$i18n.locale === 'en-US'){  //英文
            let basearr_en = Object.keys(_this.base).map((item, index) => ({name: item, score:_this.base[item],uploadname:'base_'+item}));//json对象转数组
            let basemap_en = Object.keys(_this.base.map).map((item, index) => ({name: item, score:_this.base.map[item],uploadname:'map_'+item}));
            for(var maplen_en = 0;maplen_en < basemap_en.length;maplen_en++){
               basemap_en[maplen_en].name = _this.maplist[basemap_en[maplen_en].name].name['en-US'];
            }
            basearr_en.splice(7,1);
            for(var a = 0;a < basemap_en.length;a++){
              basearr_en.push(basemap_en[a]);
            }
            // console.log(basearr_en);
            // console.log(basemap_en);
            _this.base = basearr_en;
          }
          console.log(_this.base);
          _this.selectDetail = _this.base;
          _this.enhanced = _this.objectToArr(_this.queryData.synergy);
          console.log("synergy:")
          console.log(_this.enhanced);
          _this.BeRestrained = _this.objectToArr(_this.queryData.beRestricted);
          console.log("beRestricted:")
          console.log(_this.BeRestrained);
          _this.restraint = _this.objectToArr(_this.queryData.restraint);
          console.log("restraint:")
          console.log(_this.restraint);
          //颜色的绑定
          console.log(_this.colorObject);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    adviceView:function(){
      var _this = this;
      var heroitem = "hero";
      heroitem = heroitem + "_" + (++this.onShowScoreTab);
      this.onShowScoreTabHero=this.itemToheroname(heroitem);
      console.log("advice：");
      this.$axios.post('http://old.bphots.com/templates/advice', {
        part:2,
        item:heroitem,
        hero_id:this.heroId ,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //上传的方法
    upload:function (detail) {
      var url = null;
        if(this.templatesPermited == 0){
        url='http://old.bphots.com/templates/offer';
      }
      if(this.templatesPermited == 1){
        url='http://old.bphots.com/templates/set';
      }

        console.log(this.relationNum);
        console.log(detail);
        if (this.relationNum === 1) {
          for (let basedetail of detail) {
            // console.log(baseindex)
            var _this = this;
            this.$axios.post(url, {
              hero_id: this.heroId,
              item: basedetail.uploadname,
              part: this.relationNum,
              point: basedetail.score
            })
              .then(function (response) {
                if(_this.$i18n.locale==='zh-CN'){//中文
                  _this.$notify.info({
                    title: '提交成功',
                    type: 'success',
                  });
                }
                if(_this.$i18n.locale==='en-US'){//英文
                  _this.$notify.info({
                    title: 'Submitted successfully',
                    type: 'success'
                  });
                }
              })
              .catch(function (error) {
                console.log(error);
                if(_this.$i18n.locale==='zh-CN'){//中文
                  _this.$notify.error({
                    title: '提交失败',
                    message: '请确认登陆信息'
                  });
                }
                if(_this.$i18n.locale==='en-US'){//英文
                  _this.$notify.error({
                    title: 'Submitted failed',
                    message: 'Confirm Login Information'
                  });
                }
              });
          }
        }


    },
    showScroller:function (num,Relnum) {
    //  this.currentTab = BKZnum;
      this.onShowHeroId = this.heroId;
      this.onShowScoreTab = num;
      this.relationNum = Relnum;
      //this.Score=this.detail[num].score;
      console.log("relation:"+this.relationNum);
      console.log("onShowHeroId:"+this.onShowHeroId);
      console.log("onShowScoreTab:"+this.onShowScoreTab);
   //   console.log(this.detail[num].score);
    },
    reset:function () {
   //    this.Score=this.detail[num].score;
      this.onShowHeroId = null;
      this.onShowScoreTab = null;

    },
    uploadrelation:function (score) {
      var url = null;
      var uploadid = null;
      if(this.templatesPermited==0){
        url = 'http://old.bphots.com/templates/offer';//普通用户用offer
      }
      if(this.templatesPermited==1){
        url = 'http://old.bphots.com/templates/set';//管理员用set
      }
        var heroitem = "hero";

        this.onShowScoreTabHero = this.enhanced[this.onShowScoreTab].engname;
        console.log(this.onShowScoreTab);
        for(var index = 0;index < this.enhanced.length;index++){
          if(this.onShowScoreTabHero==this.enhanced[index].engname){
            uploadid=this.enhanced[index].id;
          }
        }
        heroitem = heroitem + "_" + (uploadid);
        var _this = this;
        this.$axios.post(url, {
          hero_id: this.heroId,
          item: heroitem,
          part: this.relationNum,
          point: parseInt(score),
        })
          .then(function (response) {
            if (response.data.result == "Success") {
              if (_this.$i18n.locale==='zh-CN') {
                switch (_this.relationNum) {
                  case 2:
                    _this.message = _this.HeroName + "与" + _this.onShowScoreTabHero + "相生配合" + score + "分";
                    break;
                  case 3:
                    _this.message = _this.HeroName + "被" + _this.onShowScoreTabHero + "克制" + score + "分";
                    break;
                  case 4:
                    _this.message = _this.HeroName + "克制" + _this.onShowScoreTabHero + score + "分";
                    break;
                }
                console.log("现在上传成功");
                _this.$notify.info({
                  title: '提交成功',
                  message: _this.message,
                  type: 'success'
                });
              }
              if (_this.$i18n.locale==='en-US') {
                switch (_this.relationNum) {
                  case 2:
                    _this.message = _this.HeroName + " work with " + _this.onShowScoreTabHero + "(" + score + "point"+")";
                    break;
                  case 3:
                    _this.message = _this.HeroName + " is restrained by " + _this.onShowScoreTabHero + "(" + score + "point"+")";
                    break;
                  case 4:
                    _this.message = _this.HeroName + " restrained " + _this.onShowScoreTabHero +"("+ score + "point"+")";
                    break;
                }
                console.log("现在上传成功");
                _this.$notify.info({
                  title: 'submit successfully',
                  message: _this.message,
                  type: 'success'
                });
              }
            }
          })
          .catch(function (error) {
            if(_this.$i18n.locale==='zh-CN'){//中文
              _this.$notify.error({
                title: '提交失败',
                message: '请确认登陆信息'
              });
            }
            if(_this.$i18n.locale==='en-US'){//英文
              _this.$notify.error({
                title: 'Submitted failed',
                message: 'Confirm Login Information'
              });
            }
          });
    },
    MasterClose:function (page) {
      this.page = this.page+page;
      if(this.page < 1){
        this.page = 1;
      }
      this.masterView(this.page);
    },
    //时间戳转时间
    timestamptotime:function(time){
      var date = new Date(time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate() + ' ';
      var h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
      var m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
      var s = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
      return Y+M+D+h+m+s;
  },
    //hero_id转名字
    itemToheroname:function (heroid) {
      var heroname = null;
      var idarr = heroid.split("hero_")//分离字符串
      console.log(idarr[1]);
      console.log(this.heronamelist[1].id);
      if(this.$i18n.locale==='zh-CN'){
     for(var z = 0;z<this.heronamelist.length;z++){
       if(parseInt(idarr[1])===this.heronamelist[z].id){
         heroname = this.heronamelist[z].name;
       }
     }
   }
      if(this.$i18n.locale==='en-US'){
        for(var e = 0;e<this.heronamelist.length;e++){
          if(parseInt(idarr[1])===this.heronamelist[e].id){
            heroname = this.heronamelist[e].basic;
            this.heronamelist[e].lang='en-US';
          }
        }
      }
      console.log(heroname);
     return heroname;
    },
    itemTobasename:function (item) {
       var basearr = item.split('_');
       console.log(basearr);
       if(basearr[0]==='base'){
         if(this.$i18n.locale=='zh-CN'){
         basearr[1] = this.baseObject[basearr[1]];
         }
         console.log(basearr[1])
       }
       if(basearr[0] == 'map'){
         basearr[1] = this.maplist[basearr[1]].name[this.$i18n.locale];
         console.log(basearr[1]);
       }
      // if(this.$i18n.locale==='zh-CN'){
      //   for(var z=0;z<this.heronamelist.length;z++){
      //     if(parseInt(idarr[1])===this.heronamelist[z].id){
      //       heroname=this.heronamelist[z].name;
      //     }
      //   }
      // }
      // if(this.$i18n.locale==='en-US'){
      //   for(var e=0;e<this.heronamelist.length;e++){
      //     if(parseInt(idarr[1])===this.heronamelist[e].id){
      //       heroname=this.heronamelist[e].basic;
      //     }
      //   }
      // }
      return basearr[1];
    },
    //bse简写转名字
    //id转英雄名
    IdToheroname:function (heroid) {
      var heroname=null
     for(var a=0;a<this.heronamelist.length;a++){
       if(parseInt(heroid)===this.heronamelist[a].id){
         if(this.$i18n.locale==='zh-CN'){
           heroname=this.heronamelist[a].name;
         }
         if(this.$i18n.locale==='en-US'){
           heroname=this.heronamelist[a].basic;
         }
       }
     }
      return heroname;
    },
    objectToArr:function(obj){
      let arr = Object.keys(obj).map((item, index) => ({id: item, score:obj[item]}));//json对象转数组
      for(var c=0;c<arr.length;c++){
        for(var d=0;d<this.heronamelist.length;d++){
          if(parseInt(arr[c].id)===this.heronamelist[d].id){
            arr[c].name = this.heronamelist[d].name;
            arr[c].engname = this.heronamelist[d].basic.toLowerCase();
            arr[c].pictures = "https://www.bphots.com/images/portrait/"+arr[c].engname+".png";
          }
        }
      }
      return arr;
    },
    //element方法消息提示框
    deleteRow(index,rows){
      // console.log(index);
      // console.log(rows);
      // console.log(this.masterData[index].id);
      var _this=this;
      this.$axios.post('http://old.bphots.com/templates/set', {
       offer_id: _this.masterData[index].id,
      })
        .then(function (response) {
          if (response.data.result == "Success") {
            rows.splice(index, 1);
            _this.masterView(_this.page);
            if (this.$i18n.locale === 'zh-CN') {
              _this.$notify.info({
                title: '撤回成功',
                type: 'success'
              });
            }
            if (this.$i18n.locale === 'en-US') {
              _this.$notify.info({
                title: 'Recall successfully',
                type: 'success'
              });
            }
          }
        })
        .catch(function (error) {
          _this.messagebox = false;
          if(this.$i18n.locale==='zh-CN'){
          _this.$notify.error({
            title: '撤回失败',
            message: '请检查登录状态',
          });}
          if(this.$i18n.locale==='en-US'){
            _this.$notify.error({
              title: 'Recall failed',
              message: 'Please confirm the login status\n ',
            });}
        });
    },
    RefuseRow(index,rows){
      // console.log(index);
      // console.log(rows);
      // console.log(this.masterData[index].id);
      var _this=this;
      this.$axios.post('http://old.bphots.com/templates/set', {
        offer_id: _this.masterData[index].id,
        execute:0,
      })
        .then(function (response) {
          if (response.data.result == "Success") {
            rows.splice(index,1);
            _this.masterView(_this.page);
            if (_this.$i18n.locale === 'zh-CN') {
              _this.$notify.info({
                title: '拒绝成功',
                type: 'success'
              });
            }
            if (_this.$i18n.locale === 'en-US') {
              _this.$notify.info({
                title: 'Refuse successfully',
                type: 'success'
              });
            }
          }
        })
        .catch(function (error) {
          _this.messagebox = false;
          if(_this.$i18n.locale==='zh-CN'){
            _this.$notify.error({
              title: '拒绝失败',
              message: '请检查登录状态',
            });}
          if(_this.$i18n.locale==='en-US'){
            _this.$notify.error({
              title: 'Refuse failed',
              message: 'Please confirm the login status\n ',
            });}
        });
    },
    AgreeRow(index,rows){
      var _this=this;
      this.$axios.post('http://old.bphots.com/templates/set', {
        offer_id: _this.masterData[index].id,
        execute:1,
      })
        .then(function (response) {
          if (response.data.result == "Success") {
            rows.splice(index,1);
            _this.masterView(_this.page);
            if (_this.$i18n.locale === 'zh-CN') {
              _this.$notify.info({
                title: '同意成功',
                type: 'success'
              });
            }
            if (_this.$i18n.locale === 'en-US') {
              _this.$notify.info({
                title: 'Agree successfully',
                type: 'success'
              });
            }
          }
        })
        .catch(function (error) {
          _this.messagebox = false;
          if(_this.$i18n.locale==='zh-CN'){
            _this.$notify.error({
              title: '同意失败',
              message: '请检查登录状态',
            });}
          if(_this.$i18n.locale==='en-US'){
            _this.$notify.error({
              title: 'Agree failed',
              message: 'Please confirm the login status\n ',
            });}
        });
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finished{
    text-decoration: underline;
    text-decoration: chartreuse;
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
    font-size: 14px;
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
    height: 8rem;
    float: left;
  }
  .templates-detail-main {
    width: 45rem;
    height: 32rem;
    float: left;
  }
  .templates-detail-main-herolist {
    width: 38rem;
    height: 27rem;
    /* background-color: #f44336; */
    margin: 2rem auto;
    overflow: scroll;
  }
  .templates-detail-main-herolist-row {
    width: 38rem;
     height: 2.5rem;

    margin-bottom: 1rem;
    display: flex;

    /* background-color: #7c108a;  */
  }
  .templates-detail-main-herolist-row-relation {
    width: 41.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
    display: flex;
    /* background-color: #7c108a;  */
  }
  .templates-detail-main-herolist-row-portrait {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
    height: 2rem;
    width: 2rem;
    background: url(/static/image/portrait/ana.png);
    background-size: 100%;
    float: right;
    /* 32*32图片*/
  }
  .templates-detail-main-herolist-row-heroname {
    margin-top: 0.6rem;
      /* height: 2.5rem; */
    color: #eee;
    width: 12rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position:relative;
    font-size: 1.2rem;
    text-transform: capitalize;
    /* 首字母大写 */
  }
  .templates-detail-main-herolist-row-heroname-relation{
    /*margin-top: 0.6rem;*/
    /* height: 2.5rem; */
    color: #eee;
    width: 15rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position:relative;
    left:-33px;
    font-size: 1rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    /* 首字母大写 */
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
    width: 15rem;
    height: 8rem;
    /* background-color: #ffeb3b; */
    float: left;
  }
  .templates-detail-top-info-title {
    margin: 1.5rem auto 0;
    color: #eee;
    font-size: 2rem;
    text-align: center;
  }
  .templates-detail-top-info-desc {
    margin: 0.1rem auto 0;
    color: #eee;
    font-size: 1rem;
    text-align: center;
  }
  .templates-detail-top-modes {
    width: 30rem;
    height: 8rem;
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
    /*left: 0px;*/
    /*top: -52px;*/

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
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
    align-self: auto;
  }
  .progress-bar-relation {
    width: 0;
    height: 80%;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 1px -12px 10px 5px rgba(0,0,0,.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
    align-self: auto;
  }
  .progress-lg {
     margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 22px;
  }
  /*.p1 {*/
    /*float: right;*/
    /*width: 100%;*/
    /*background-color: #9D00C5;*/
  /*}*/
  /*.p2 {*/
    /*float: right;*/
    /*width: 90%;*/
    /*background-color: #A100BE;*/
  /*}*/
  /*.p3 {*/
    /*float: right;*/
    /*width:80%;*/
    /*background-color: #A500B7;*/
  /*}*/
  /*.p4 {*/
    /*float: right;*/
    /*width: 70%;*/
    /*background-color: #A900B0;*/
  /*}*/
  /*.p5 {*/
    /*float: right;*/
    /*width: 60%;*/
    /*background-color: #AD00A9;*/
  /*}*/
  /*.p6 {*/
    /*float: right;*/
    /*width: 50%;*/
    /*background-color: #B100A2;*/
  /*}*/
  /*.p7 {*/
    /*float: right;*/
    /*width: 40%;*/
    /*background-color: #B5009B;*/
  /*}*/
  /*.p8 {*/
    /*float: right;*/
    /*width: 30%;*/
    /*background-color: #B90094;*/
  /*}*/
  /*.p9 {*/
    /*float: right;*/
    /*width: 20%;*/
    /*background-color: #BD008D;*/
  /*}*/
  /*.p10 {*/
    /*float: right;*/
    /*width: 10%;*/
    /*background-color: #C10086;*/
  /*}*/
  /*.p11 {*/
    /*float: left;*/
    /*text-align: center;*/
    /*width: 0;*/
    /*background-color: #C5007F;*/
  /*}*/
  /*.p12 {*/
    /*float: left;*/
    /*width: 10%;*/
    /*!*background-color:rgba(255, 255, 255, .1);*!*/
    /*background-color: #C90078;*/
  /*}*/
  /*.p13 {*/
    /*float: left;*/
    /*width: 20%;*/
    /*background-color: #CD0071;*/
  /*}*/
  /*.p14 {*/
    /*float: left;*/
    /*width: 30%;*/
    /*background-color: #D1006A;*/
  /*}*/
  /*.p15 {*/
    /*float: left;*/
    /*width: 40%;*/
    /*background-color: #D50063;*/
  /*}*/
  /*.p16 {*/
    /*float: left;*/
    /*width: 50%;*/
    /*background-color: #D9005C;*/
  /*}*/
  /*.p17 {*/
    /*float: left;*/
    /*width: 60%;*/
    /*background-color: #DD0055;*/
  /*}*/
  /*.p18 {*/
    /*float: left;*/
    /*width: 70%;*/
    /*background-color: #E1004E;*/
  /*}*/
  /*.p19 {*/
    /*float: left;*/
    /*width: 80%;*/
    /*background-color: #E50047;*/
  /*}*/
  /*.p20 {*/
    /*float: left;*/
    /*width: 90%;*/
    /*background-color: #E90040;*/
  /*}*/
  /*.p21 {*/
    /*float: left;*/
    /*width: 100%;*/
    /*background-color: #ED0039;*/
  /*}*/
  .p1 {
    float: right;
    width: 100%;
    background-color: #d18bff;
  }
  .p2 {
    float: right;
    width: 90%;
    background-color: #c978ff;
  }
  .p3 {
    float: right;
    width: 80%;
    background-color: #c56dff;
  }
  .p4 {
    float: right;
    width: 70%;
    background-color: #c163ff;
  }
  .p5 {
    float: right;
    width: 60%;
    background-color: #bc56ff;
  }
  .p6 {
    float: right;
    width: 50%;
    background-color: #b94fff;
  }
  .p7 {
    float: right;
    width: 40%;
    background-color: #b545ff;
  }
  .p8 {
    float: right;
    width: 30%;
    background-color: #b13cff;
  }
  .p9 {
    float: right;
    width: 18.18%;
    background-color: #ac2fff;
  }
  .p10 {
    float: right;
    width: 9.09%;
    background-color: #a900ff;
  }
  .p11 {
    float: left;
    text-align: center;
    width: 0;
    background-color: #a500ff;
  }
  .p12 {
    float: left;
    width: 10%;
    /*background-color:rgba(255, 255, 255, .1);*/
    background-color: #a100ff;
  }
  .p13 {
    float: left;
    width: 20%;
    background-color: #9c08ff;
  }
  .p14 {
    float: left;
    width: 30%;
    background-color: #8900d7;
  }
  .p15 {
    float: left;
    width: 40%;
    background-color: #8500d7;
  }
  .p16 {
    float: left;
    width: 50%;
    background-color: #8100d7;
  }
  .p17 {
    float: left;
    width: 60%;
    background-color: #7c00ce;
  }
  .p18 {
    float: left;
    width: 70%;
    background-color: #6900B0;
  }
  .p19 {
    float: left;
    width: 80%;
    background-color: #6500B7;
  }
  .p20 {
    float: left;
    width: 90%;
    background-color: #610099;
  }
  .p21 {
    float: left;
    width: 100%;
    background-color: #5c0099;
  }
  .p-relation{
      float: left;
      width: 9.09%;
      background-color:rgba(255, 255, 255, .1);
      /*background-color: #C90078;*/
  }
  .templates-detail-top-modes-btns {
    margin-top: 2rem;
  }
  .templates-detail-top-modes-row {
    display: flex;
    align-items: flex-end;
    position: relative;
    height: 100%;
    /* margin: 0 auto; */
    /* width: 15rem; */
  }
  .templates-detail-top-modes-btn {
    /* float: left; */
    margin: 0.25rem;
    max-width: 7rem;
    padding: 0.5rem 0.25rem;
    font-size: 1rem;
    text-align: center;
    border: solid 1px rgba(255,255,255,.1);
    box-sizing: border-box;
  }
  .number-handler {
    text-align: center;
    width: 5rem;
    border: 1px solid transparent;
  }
  .table-row {
    display: flex;
  }
  .number-digit{
    cursor: pointer;
    text-align: center;
    width: 5rem;
    border: 1px solid transparent;
.number-scroller{
  display: flex;
  text-align: center;
  width: 5rem;
  border: 1px solid transparent;
}


  }
  .options-radio {
    margin-top: 0px;
    cursor: pointer;
    text-align: center;
    width: 5rem;
    border: 1px solid transparent;
    /* left:140px; */
    position: relative;
    /* top: -460px; */
    display: flow-root;
  }
  .options-radio-restraint{
    margin-top: 0px;
    cursor: pointer;
    text-align: center;
    width: 5rem;
    border: 1px solid transparent;
    /* left:500px; */
    position: relative;
    /* top: -3540px; */
    display: flow-root;
  }
  .options-radio-enhanced{
    margin-top: 0px;
    cursor: pointer;
    text-align: center;
    width: 5rem;
    border: 1px solid transparent;
    /* left:620px; */
    position: relative;
    /* top: -6620px; */
    display: flow-root;
  }
  .inputnum{
    width: 40%;
    cursor: pointer;
  }
  .loggin{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .masterlist{
    /*display: flex;*/
    margin-top: 8.5rem;
    margin-left: 15rem;
    width: 84rem;
    height: 45rem;
    background-color: white;
  }
  .portrait{

  }
  /*.el-icon-close{*/
    /*!*position: fixed;*!*/
    /*!*top: 100px;*!*/
    /*!*left: 1039px;*!*/
    /*!*display: contents;*!*/
    /*!*color: #eee;*!*/
    /*font-size: xx-large;*/
    /*flex-flow: column-reverse;*/
    /*height: 10%;*/
   /*font-size: xx-large;*/
  /*}*/
  /*.button{*/

  /*}*/
  .tagFalse {
    float: right;
    width: 37rem;
    text-align: left;
  }
  .submit{
  margin-left: -269px;
  }
</style>
