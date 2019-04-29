/**
 * 返回随机数
 * @param {Number} Min 最小值
 * @param {Number} Max 最大值
 */
function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

/**
 * 返回随机的动画名称
 */
function getRandomAnimate() {
  var animateArr = ["fadein", "slidedown"];
  var index = GetRandomNum(0, animateArr.length - 1);
  return animateArr[index];
}