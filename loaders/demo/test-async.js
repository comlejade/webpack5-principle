/**
 * 异步loader
 * 等异步操作执行完才会执行下一loader
 */

module.exports = function (content, map, meta) {
  const callback = this.async();
  // setTimeout 模拟异步操作
  setTimeout(() => {
    console.log("test2");
    callback(null, content, map, meta);
  }, 1000);
};
