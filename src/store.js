const STORAGE_KEY="todos-vuejs"  //es6 const 定义常量=var
export default{ //导出两种方法
  fetch:function(){
    return JSON.parse(window.localStorage.getItem(
      STORAGE_KEY||"[]"))
  },
  save:function(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
