<template>
  <div class="hello">

  </div>
</template>

<script>
export default { //会自动生成new vue({})
  name: 'HelloWorld',
  data :function() {  //=function data(){ return msg:....} 所有的数据从这里展现  现在还原成es5
    return {
      msg: 'hello from component a!'
    }
    },
  props:['msgfromfather'],
  methods:{
    onClickMe:function () {
  console.log(this.msgfromfather)
      this.$emit('child-tell-me-something',this.msg)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
