import { HeadTags } from 'vuepress/config';
import baidutj from '../common/baidutj';    //百度统计

export default <HeadTags>[
    //防止在移动端获取焦点页面变大
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no' }],
    //百度统计的站长验证（子链）（你可以去掉）
    // ['meta', { name: 'baidu-site-verification', content: 'codeva-3L2X2VBzam' }],
    //解决Chrome 统计访问不准确问题
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    //站点信息相关图标
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
    //代码块折叠的箭头图标&时间提示的图标
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
    //评论系统twikoo
    ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }],
     //favicons，资源放在public文件夹
    ['link', { rel: 'icon', href: '/img/logo.png' }],
     // 移动浏览器主题颜色
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
    //百度统计
    ['script', {}, baidutj],
    [
        'meta',
        {
          name: 'keywords',
          content: '全栈博客,Power个人技术博客,前端,后端,量化,区块链,技术文档,学习,面试,c/c++,python,shell,node,solidity,git,markdown',
        },
    ],
]
//   head: [
//     //防止在移动端获取焦点页面变大
//     ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no' }],
//     //百度统计的站长验证（子链）（你可以去掉）
//     ['meta', { name: 'baidu-site-verification', content: 'codeva-3L2X2VBzam' }],
//     //解决Chrome 统计访问不准确问题
//     ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
//     //站点信息相关图标
//     ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
//     //代码块折叠的箭头图标&时间提示的图标
//     ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
//     //评论系统twikoo
//     ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }],
//      //favicons，资源放在public文件夹
//     ['link', { rel: 'icon', href: '/img/logo.png' }],
//     [
//       'meta',
//       {
//         name: 'keywords',
//         content: '全栈博客,Power个人技术博客,前端,后端,量化,区块链,技术文档,学习,面试,c/c++,python,shell,node,solidity,git,markdown',
//       },
//     ],
//      // 移动浏览器主题颜色
//     ['meta', { name: 'theme-color', content: '#11a8cd' }],
//     ['script', {}, baidutj],//百度统计
//     // [
//     //   'script',
//     //   {
//     //     'data-ad-client': 'ca-pub-7828333725993554',
//     //     async: 'async',
//     //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
//     //   },
//     // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
//   ],