import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "霖哥的爬坑日志",
  description: "代码创造未来，编程改变世界。",
  base: "/theme-blog/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      },
    ],
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "zengjielin",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    commentConfig: {
      type: "valine",
      options: {
        appId: "7Rd5srHP9piH7CCJ62sKuAW2-gzGzoHsz",
        appKey: "9CZeENYCYA02EouZB0WWy3D1",
        placeholder: "填写邮箱可以收到回复提醒哦！",
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
  }),
  port: 8090,
  // debug: true,
});
