/**
 * loader就是一个函数，接收文件内容作为参数
 * 当前webpack解析资源的时候，会调用相应的loader区处理
 * 处理相应文件的时候就会调用loader
 * 把处理的结果返回
 * @param {*} content 文件内容
 * @param {*} map SourceMap
 * @param {*} meta 别的loader传递的数据
 * @returns
 */
module.exports = function (content, map, meta) {
  console.log(content);
  return content;
};
