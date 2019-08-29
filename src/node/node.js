const http = require('http');
const url = require('url');
let server = http.createServer();
server.on('request', function (req, res) { // request请求 response返回响应
    //console.log(req.url);
    // req.url 是获取完整路由 （包含参数）
    const parseObj = url.parse(req.url, true);
    const pathName = parseObj.pathname;
    res.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    let data = {
        banner: [
            {
                id: 1,
                picUrl: '../static/img/1.22a4b42.jpg'
            },
            {
                id: 2,
                picUrl: '../static/img/2.ea782e8.jpg'
            },
            {
                id: 3,
                picUrl: '../static/img/3.65aee88.jpg'
            }
        ],
        indexHot: [
            {
                id: 1,
                picHot: '../static/img/1.4dc0732.png'
            },
            {
                id: 2,
                picHot: '../static/img/2.e2eab8a.png'
            },
            {
                id: 3,
                picHot: '../static/img/3.fe55348.png'
            },
            // {
            //     id: 4,
            //     picHot: '../static/img/1.4dc0732.png'
            // },
            // {
            //     id: 5,
            //     picHot: '../static/img/2.e2eab8a.png'
            // },
            // {
            //     id: 6,
            //     picHot: '../static/img/3.fe55348.png'
            // }
        ],
        indexShare: [
            {
                id: 1,
                picShare: '../static/img/1.41fb8a7.jpg',
                location: '西藏',
                descContent: '一个离天堂最近的地方',
                picUser: '',
                userName: '',
                comment: 0,
                like: 0
            },
            {
                id: 2,
                picShare: '../static/img/2.b1bd8e2.jpg',
                location: '内蒙',
                descContent: '手抓羊排',
                picUser: '',
                userName: '',
                comment: 0,
                like: 0
            },
            {
                id: 3,
                picShare: '../static/img/3.9baa361.jpg',
                location: '青海',
                descContent: '天空之镜',
                picUser: '',
                userName: '',
                comment: 0,
                like: 0
            }
        ],
        findTabItem: [
            {
                id: 1,
                title: '推荐',
                tip: 'recommend'
            },
            {
                id: 2,
                title: '热门',
                tip: 'findHot'
            },
            {
                id: 3,
                title: '关注',
                tip: 'follow'
            }
        ],
        contentList: {
            recommend: [
                {
                    id: 1,
                    userHead: '../static/img/head.1d7063b.jpg',
                    userName: 'Hrealm',
                    userShare: ['../static/img/1.ad406fc.jpg', '../static/img/2.6e58b97.jpg', '../static/img/3.95d5b79.jpg', '../static/img/4.2f656bf.jpg'],
                    userTag: '云巅之上'
                },
                {
                    id: 2,
                    userHead: '../static/img/head.fc933e2.jpg',
                    userName: 'ECHO',
                    userShare: ['../static/img/1.003a1b6.jpg', '../static/img/2.6a4c60e.jpg', '../static/img/3.f967c6b.jpg', '../static/img/4.c0b84d5.jpg', '/static/img/5.dd5215e.jpg'],
                    userTag: '醉美青海'
                },
                {
                    id: 3,
                    userHead: '../static/img/head.0f570cf.png',
                    userName: 'annie',
                    userShare: ['../static/img/1.a0f22ee.jpg', '../static/img/2.094ba01.jpg', '../static/img/3.2048e81.jpg', '../static/img/4.884e751.jpg'],
                    userTag: '仙境翡翠湖'
                }
            ],
            findHot: [
                {
                    id: 1,
                    userHead: '../static/img/head.0f570cf.png',
                    userName: 'annie',
                    userShare: ['../static/img/1.a0f22ee.jpg', '../static/img/2.094ba01.jpg', '../static/img/3.2048e81.jpg', '../static/img/4.884e751.jpg'],
                    userTag: '仙境翡翠湖'
                }
            ],
            follow: [
                {
                    id: 1,
                    userHead: '../static/img/head.1d7063b.jpg',
                    userName: 'Hrealm',
                    userShare: ['../static/img/1.ad406fc.jpg', '../static/img/2.6e58b97.jpg', '../static/img/3.95d5b79.jpg', '../static/img/4.2f656bf.jpg'],
                    userTag: '云巅之上'
                }
            ]
        }
    }

    switch (pathName) {
        case '/banner':
            var route = 'banner';
            reJson(route);
            break;
        case '/indexHot':
            var route = 'indexHot';
            reJson(route);
            break;
        case '/indexShare':
            var route = 'indexShare';
            reJson(route);
            break;
        case '/findTabItem':
            var route = 'findTabItem';
            reJson(route);
            break;
        case '/contentList':
            var route = 'contentList';
            reJson(route);
            break;
        // case '/recommend':
        //     var route = 'recommend';
        //     reJson(route);
        //     break;
        // case '/findHot':
        //     var route = 'findHot';
        //     reJson(route);
        //     break;
        // case '/follow':
        //     var route = 'follow';
        //     reJson(route);
        //     break;
        default:
            break;
    }
    function reJson(route) {
        if (parseObj.query.id) {
            let id = parseObj.query.id;
            let result = data[route].find(function (item) {
                return item.id == id;
            })
            res.end(JSON.stringify(result));
        } else {
            res.end(JSON.stringify(data[route]));
        }
    }

});

server.listen(8008, function () {
    console.log('服务器启动成功了')
});