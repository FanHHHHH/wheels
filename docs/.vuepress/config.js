module.exports = {
  base: "/wheels/",
  title: "G-UI",
  description: "一个好用的ui框架！",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/guide/" },
      { text: "交流", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["install/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        children: ["components/icon", "components/layout", "components/button", "components/toast", "components/tabs", "components/popover", "components/collapse"],
      },
    ],
  },
};
