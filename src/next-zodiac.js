(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ZODIACS_DICT = '鼠牛虎兔龙蛇马羊猴鸡狗猪';

  nx.zodiac = function (inYear) {
    return ZODIACS_DICT.charAt((inYear-4)%12);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.zodiac;
  }

}());
