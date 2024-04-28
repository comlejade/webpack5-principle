const babel = require("@babel/core");
const schema = require("./schema.json");

// https://babeljs.io/docs/babel-core

module.exports = function (content) {
  // 异步loader
  const callback = this.async();
  const options = this.getOptions(schema);

  // 使用babel编译代码
  babel.transform(content, options, function (err, result) {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
