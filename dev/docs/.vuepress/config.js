module.exports = {
    title: 'python notes',
    description: 'By Grass',
    base: '/swamp-man/',

    plugins: ['@vuepress/back-to-top'],

    markdown: {
        lineNumbers: true
    },
    
    themeConfig: {
        smoothScroll: true,
        nextLinks: false,
        prevLinks: false,
        sidebar: {
            '/': [
              {
                title: '沼澤人頻道',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/kp用',
                    '/公共資訊討論區and場外',
                    '/公共資訊區',
                    '/主頻道',
                    '/卡洛斯私人頻道',
                    '/卡洛斯資訊區',
                    '/田印私人頻道',
                    '/田印資訊區',
                ]
              }
            ]
          },

        nav: [
            { text: 'Home', link: '/' }
        ]
    }
}