/**
 * 同步loader
 * 不能放在异步代码中执行
 * 会导致没有返回
 * 传给下一个loader的content是undefined
 */

// 第一种写法
// module.exports = function(content) {

//     return content
// }

// 第二种写法
module.exports = function (content, map, meta) {
  /**
   * 第一个参数：err， 代表是否有错误
   * 第二个参数：content， 处理后的内容
   * 第三个参数：source-map， 继续传递 srouce-map
   * 第四个参数：meta，给下一个loader传递参数
   */
  console.log("test1");
  this.callback(null, content, map, meta);
};
