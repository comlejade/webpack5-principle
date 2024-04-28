/**
 * raw loader 接收到的content是buffer数据
 * 多用于图片等数据
 * 可同步可异步
 * @param {*} content
 * @returns
 */
module.exports = function (content) {
  console.log(content);
  return content;
};

module.exports.raw = true;
