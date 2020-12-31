// 这里暴露出的是左侧菜单列表的资源

const menuList = [
    {
        title: "首页",
        key: "/admin/home"
    },
    {
        title: "Ui",
        key: "/admin/ui",
        children: [
            {
                title: "按钮",
                key: "/admin/ui/buttons"
            },
            {
                title: "弹框",
                key: "/admin/ui/alerts"
            },
            {
                title: "卡片",
                key: "/admin/ui/cards"
            },
            {
                title: "加载",
                key: "/admin/ui/loading"
            },
            {
                title: "通知消息",
                key: "/admin/ui/advice"
            },
            {
                title: "全局消息",
                key: "/admin/ui/message"
            },
            {
                title: "标签",
                key: "/admin/ui/tab"
            },
            {
                title: "轮播图",
                key: "/admin/ui/swiper"
            },
            {
                title: "swiper",
                key: "/admin/ui/swipers"
            },
        ]
    },
    {
        title: "表单",
        key: "/admin/form",
        children: [
            {
                title: "登录",
                key: "/admin/form/basics"
            },
            {
                title: "注册",
                key: "/admin/form/high"
            }
        ]
    },
    {
        title: "富文本",
        key: "/admin/rich"
    },
    {
        title: "城市管理",
        key: "/admin/city"
    },
    {
        title: "订单管理",
        key: "/admin/order"
    },
    {
        title: "员工管理",
        key: "/admin/users"
    },
    {
        title: "图标",
        key: "/admin/chars",
        children: [
            {
                title: "柱形图",
                key: "/admin/chars/bar"
            },
            {
                title: "折线图",
                key: "/admin/chars/pic"
            },
            {
                title: "饼图",
                key: "/admin/chars/line"
            },
        ]
    }
]
export default menuList


