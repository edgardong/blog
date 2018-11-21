//单击显示随机文字
var a_idx = 0;
$(document).ready(function ($) {

  $("body").click(function (e) {

    // console.log(e.target.parentNode.id)
    // 火箭部分不出现字体
    if (e.target.parentNode.id == 'rocket-to-top' || e.target.id == 'ick-rocket__top' || e.target.parentNode.id == 'ick-rocket__top') {
      return;
    }
    var a = new Array("路见不平一声吼，吼完继续往前走。",
      "咸鱼翻身，还是咸鱼。",
      "水能载舟，亦能煮粥！",
      "明月几时有，抬头自己瞅。",
      "天哪！我的衣服又瘦了。",
      "(☄⊙ω⊙)☄",
      "听君一席话，回家烤白薯。",
      "流氓不可怕，就怕流氓有文化。",
      "知识就像内裤，看不见但很重要。",
      "为了祖国下一代，再丑也得谈恋爱。",
      "穷玩车，富玩表，牛B加班敲电脑。",
      "英雄不问出路，流氓不看岁数。",
      "我们的目标：向钱看，向厚赚。",
      "带着疑问抬头问天",
      "繁星点点",
      "就像我曾追逐的梦",
      "忽隐忽现",
      "想忘记时却又发现，它在身前",
      "伸手去摘 它却忽然  消失不见",
      "它 能否指引我向前",
      "星 总沉默不发一言",
      "却 在孤单寒夜出现",
      "又 点燃了梦想火焰🔥在心间",
      "帅有个屁用！到头来还不是被卒吃掉！");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x + 20,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#FF69B4",
      "user-select": "none"
    });
    $("body").append($i);
    $i.animate({
        "top": y - 180,
        "opacity": 0
      },
      3000,
      function () {
        $i.remove();
      });
  });
})