// module.exports = function (content) {
/**
 * 1. 直接使用style-loader，只能处理样式
 * 2. 借助css-loader解决样式中引入的其他资源问题
 * 3. 问题是css-loader暴露了一段js代码，style-loader需要执行js代码，得到返回值，再动态创建style标签，插入到页面上
 * 不好操作
 * 4. style-loader 使用 pitch-loader解决
 */
//   const script = `
//         const styleEl = document.createElement('style')
//         styleEl.innerHTML = ${JSON.stringify(content)}
//         document.head.appendChild(styleEl)
//     `;
//   return script;
// };

const styleLoader = () => {};

styleLoader.pitch = function (remainingRequest) {
  // remainingRequest 剩下还要处理的loader
  //   console.log(remainingRequest);
  // 将 remainingRequest 中绝对路径改为相对路径，因为后面只能使用相对路径
  const relativeRequest = remainingRequest
    .split("!")
    .map((path) => {
      // 返回相对路径
      const relativePath = this.utils.contextify(this.context, path);
      //   console.log(relativePath);
      return relativePath;
    })
    .join("!");
  console.log("relativeRequest", relativeRequest);

  const script = `
    import style from '!!${relativeRequest}';
    const styleEl = document.createElement('style')
    styleEl.innerHTML = style
    document.head.appendChild(styleEl)
    `;
  // !! 中止后面的loader执行
  return script;
};

module.exports = styleLoader;
