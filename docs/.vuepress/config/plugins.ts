import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'
const DOMAIN_NAME = 'Program.github.io' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址
const baiduCode = '3341c05576d5f74386f642b94327f3f1' // 百度统计代码

// 插件配置
export default <UserPlugins>[

    [   // 自定义插件，即本地插件
        {
            name: 'custom-plugins',
            // 这里分别是评论组件，代码块组件，时间提示组件,站点信息组件,记录阅读位置组件,全局背景图组件("Fantasy")
            globalUIComponents: ["Twikoo","BlockToggle","GlobalTip","PageInfo","LastReadingPopup"] 
        }
    ],

    [   // 网站地图
        "sitemap", 
        { hostname: WEB_SITE },
    ],

    // 百度自动推送
    [ 'vuepress-plugin-baidu-autopush' ],

    [   // 百度统计
        'vuepress-plugin-baidu-tongji', 
        { hm: baiduCode },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    [ 'fulltext-search' ],

    [   // 代码块复制按钮
        'one-click-copy', 
        {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },
    ],

    [   // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        'demo-block', 
        {
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
            },
        },
    ],

    [   // 放大图片
        'vuepress-plugin-zooming', 
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
          options: {
            bgColor: 'rgba(0,0,0,0.6)',
          },
        },
    ],

    [   // "上次更新"时间格式
        '@vuepress/last-updated', 
        {
          transformer: (timestamp, lang) => {
            return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
          },
        },
    ],

    [   // 离开页面标题变化
        'dynamic-title',
        {
           showIcon: '/favicon.ico',
           showText: '(/≧▽≦/)咦！又好了！',
           hideIcon: '/failure.ico',
           hideText: '(●—●)喔哟，崩溃啦！',
           recoverTime: 2000,
        },
    ],

    [   // 鼠标特效插件
        'cursor-effects',
        { size: 1.75, shape: 'star' },
    ],

    // 页面阅读进度进度条（顶部插件）
    [ 'reading-progress' ],

    [   // Meting 音乐播放器插件
        'meting',
        {
            metingApi: 'https://api.injahow.cn/meting/',
            meting: {
                server: 'netease',     // "netease" | "tencent" | "kuwo" | "kugou" | "baidu"
                type: 'playlist',      // "song" | "album" | "artist" | "playlist"
                mid: '496989794',      // 描述：MetingApi 中的 id 参数，即资源 ID
            },
            aplayer: {
                fixed: true,           // 是否开启吸底模式
                mini: true,            // 是否开启迷你模式
                autoplay: false,       // 是否开启自动播放
                theme: '#ad7a86',      // 设置播放器默认主题颜色
                loop: 'none',          // 设置播放器的初始循环模式 'all' | 'one' | 'none'
                order: 'list',         // 设置播放器的初始顺序模式 'list' | 'random'
                preload: 'auto',       // 设置音频的预加载模式 'none' | 'metadata' | 'auto'
                volume: 0.2,           // 设置播放器的音量
                mutex: true,           // 是否开启互斥模式
                lrcType: 3,            // 设置 lrc 歌词解析模式 （0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
            },
            mobile: {
                cover: true,           // 是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容
                lrc: false,            // 是否显示歌词
            },
            // defaultCover: '/img/avatar.jpg',
        },
    ],
]