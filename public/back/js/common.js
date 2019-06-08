// 开启进度条
// NProgress.start();

// setTimeout(function () {
// // 结束进度条

//   NProgress.done();
// }, 2000)
$(document).ajaxStart(function(){
  NProgress.start();
});

$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
})