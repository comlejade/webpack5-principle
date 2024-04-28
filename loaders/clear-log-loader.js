module.exports = function (content) {
  // 清楚文件内容中 console.log(xxx)
  return content.replace(/console\.log\(.*\);?/g, "");
};
