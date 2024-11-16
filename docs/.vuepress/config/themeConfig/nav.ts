export default [
    { text: '首页', link: '/' },

    { text: '导航', link: '/navigation/' },

    { text: '开发', link: '/develop/',
        items: [
        {
            text: '前端',
            items: [],
        },
        {
            text: '后端',
            items: [],
        },
        ],
    },

    { text: '运维', link: '/devops/',
        items: [],
    },

    { text: '技术', link: '/technology/',
        items: [],
    },

    { text: '更多',
        items: [
            { text: '友情链接', link: '/friends/' },
        ]
    },

    { text: '索引', link: '/aboutme/',
        items: [
            { 
                text: '本站',
                items: [
                  { text: '分类', link: '/categories/' },
                  { text: '标签', link: '/tags/' },
                  { text: '归档', link: '/archives/' },
                ]
            },
            {
                text: '我的',
                items: [
                  { text: '收藏', link: '/collection/web/' },
                  { text: '关于', link: '/aboutme/' },
                ]
            },
        ]
    },
]