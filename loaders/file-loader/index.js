const loaderUtils = require("loader-utils");

module.exports = function (content) {
  // 根据文件内容生成一个带hash值的文件名
  const interpolatedName = loaderUtils.interpolateName(
    this,
    "[hash].[ext][query]",
    {
      content,
    }
  );
  // console.log(interpolatedName);
  // 将文件输出出去
  this.emitFile(interpolatedName, content);
  // 返回 module.expors = "文件路径"
  return `module.exports = '${interpolatedName}'`;
};

// 需要处理图片、字体等文件，他们都是 buffer 数据、
// 需要使用 raw loader 才能处理
module.exports.raw = true;
