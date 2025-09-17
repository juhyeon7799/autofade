$(function () {
  //   let total = 4; //이미지개수

  let total = $(".pic li").length;

  let i = 0; //시작순서
  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".pic li").stop().fadeOut();
    $(".pic li").eq(i).stop().fadeIn();
  }, 2000);
});
