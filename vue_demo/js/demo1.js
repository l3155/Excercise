var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el:'#app2',
  data:{
    message:'loading from'+new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el:'#app3',
  data:{
    seen:true
  }
});