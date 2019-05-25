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
        users: [
            {
                id: 1,
                name: '追梦',
                age: 18,
            },
            {
                id: 2,
                name: '阿飞',
                age: 18,
            },
            {
                id: 3,
                name: '乌拉',
                age: 18,
            },
            {
                id: 4,
                name: '风屿',
                age: 18,
            }
        ],
        jobs: [
            {
                id: 1,
                name: '正直的男人'
            },
            {
                id: 2,
                name: '结婚的男人'
            },
            {
                id: 3,
                name: '很漂亮的妹子'
            },
            {
                id: 4,
                name: '很骚情的男人'
            }
        ]

    }

    if (pathName === '/users') {
        // console.log('用户列表')
        if (parseObj.query.id) {
            let id = parseObj.query.id;
            let result = data.users.find(function (item) {
                return item.id == id;
            })
            console.log(result)
            res.end(JSON.stringify(result));
        } else {
            res.end(JSON.stringify(data.users));
        }
    } else if (pathName === '/jobs') {
        if (parseObj.query.id) {
            let id = parseObj.query.id;
            let result = data.jobs.find(function (item) {
                return item.id == id;
            })
            console.log(result)
            res.end(JSON.stringify(result));
        } else {
            res.end(JSON.stringify(data.jobs));
        }
    } else if(pathName === '/banner'){
        if(parseObj.query.id){
            let id = parseObj.query.id;
            let result = data.banner.find(function (item) {
                return item.id == id;
            })
            console.log(result)
            res.end(JSON.stringify(result));
        } else {
            res.end(JSON.stringify(data.banner));
        }
    }
});

server.listen(6789, function () {
    console.log('服务器启动成功了')
});