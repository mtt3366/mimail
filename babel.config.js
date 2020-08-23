module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" } //https://blog.csdn.net/qq_45364616/article/details/107457354
    ]
  ]
};
