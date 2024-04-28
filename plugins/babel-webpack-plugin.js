class BannerWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "BannerWebpackPlugin",
      (compilation, callback) => {
        // 1. 获取即将输出的资源文件，compilation.assets
        //2. 过滤保留js和css资源
        //   debugger;
        const extensions = ["css", "js"];
        const assets = Object.keys(compilation.assets).filter((assetPath) => {
          const splitted = assetPath.split(".");
          const extension = splitted[splitted.length - 1];
          return extensions.includes(extension);
        });
        //   console.log(compilation.assets);
        //3. 遍历剩下资源添加上注释
        //   log(assets);
        const prefix = `
        /**
         * Author: ${this.options.author} 
         */
      `;
        assets.forEach((asset) => {
          const source = compilation.assets[asset].source();
          const content = prefix + source;
          compilation.assets[asset] = {
            // 最终资源输出时，调用source方法，source方法的返回值就是资源的具体内容
            source() {
              return content;
            },
            // 资源大小
            size() {
              return content.length;
            },
          };
        });

        callback();
      }
    );
  }
}

module.exports = BannerWebpackPlugin;
