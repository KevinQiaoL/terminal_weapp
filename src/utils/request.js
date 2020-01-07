import wepy from 'wepy';

const wxRequest = async(params = {}, url) => {
    var str = [];
    for (var p in params) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
    }
    const response = await wepy.request({
        url: url,
        data: str.join("&"),
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        }
    });
    console.log(response.data.hasOwnProperty('status'))
    if (response.statusCode == 200 && !response.data.hasOwnProperty('status')) {
        response.data.status = '_0000'
    }
    if (response.statusCode == 200 && (response.data.status == '_0000' || response.data.status == '_1000')) {
        return response.data
    } else if (response.statusCode == 200 && response.data.status != '_1000' && response.data.status != '_0000') {
        wx.showToast({
            title: response.data.message,
            icon: 'none',
            duration: 2000
        })
        return null
    } else {
        wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 2000
        })
        return null
    }
};


module.exports = {
    wxRequest
}
