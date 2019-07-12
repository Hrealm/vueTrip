let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')

// 增加
shopTools.addUpdate = function (goods) {
    //判断是否存在
    if(shop[goods.id]){
        shop[goods.id] += goods.num;
    }else {
        shop[goods.id] = goods.num;
    }
    this.saveShops(shop);
}

// 删除
shopTools.delete = function (id) {
    delete shop[id];
    this.saveShops(shop)
}

// 获取
shopTools.getShop = function () {
    return shop;    
}

// 获取总数
shopTools.getShopCount = function () {
    let sum = 0;
    for(let id in shop){
        sum += shop[id]
    }
    return sum;
}

// 存储
shopTools.saveShops = function () {
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}


export default shopTools