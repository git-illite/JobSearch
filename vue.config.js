const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  base:"/JobSearch/",
});


module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/JobSearch/" : "/",
};
