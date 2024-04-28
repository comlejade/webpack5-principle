/**
 * pitch loader
 * pitch 方法会优先执行
 * 标记为pitch的方法会先执行
 * 举个例子，有三个loader
 * use: [1,2,3]
 * 都有pitch 方法
 * pitch: [1,2,3]
 * 那么loader 的执行顺序是
 * pitch1 -> pitch2 -> pitch3 -> loader3 -> loader2 -> loader1
 * 熔断机制
 * pitch2 中有 return 的话，后面的normal2 normal3 都不再执行
 * 会返回去执行normal1
 * 所以结果是
 * pitch1 -> pitch2 -> normal1
 * @param {*} content
 * @returns
 */
module.exports = function (content) {
  console.log("normal loader 1");
  return content;
};

module.exports.pitch = function () {
  console.log("pitch loader 1");
  //   console.log("pitch");
};
