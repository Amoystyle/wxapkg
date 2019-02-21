#! /usr/bin env python3

import json
import hashlib
import time
import copy
import requests

g_game_user_openid = "oc6rl5dor2lTJonSapTZ_tuqzvTo"  # 从游戏中赋值游戏ID
g_wx_appid = "wxa2c324b63b2a9e5e"
g_wx_secret = "8fbd540d0b23197df1d5095f0d6ee46d"

upload_org = {"plat": "wx", "record": "", "time": 1550643444381, "openid": "oc6rl5YYqCwsEYEsaKyK-nLGSxwQ"}
record_org = {
    "uid": "oc6rl5YYqCwsEYEsaKyK-nLGSxwQ",
    "isSoundOff": False,
    "isShackOff": False,
    "GMTimeG": -1,
    "GMTimeP": -1,
    "level": 105,  # 关卡
    "lDamage": 1,  # 火力
    "lCount": 1,  # 子弹频率
    "lJiaZhi": 34,  # 金币价值
    "lRiChang": 37,  # 日常收益
    "curFu": 3,
    "levelFuCount": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "levelFuDamage": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "getTime2": 1550642364788,
    "bgIndex": 1,
    "money": "999999999",
    "tipFU": False,
    "isGuide": False,
    "tiLi": 73,  # 体力
    "tiLiBackTime": 1550643425418,  # 体力恢复时间
    "today": 20,
    "playCount": 5,
    "shareCount": 4,
    "videoCount": 6,
    "isGuanZhu": 0,
    "isShouCang": True,
    "tryFuCount": 4,
    "pos": "福建,厦门",
    "posUpdate": 18,
    "zuanShi": 0,  # 砖石
    "getTime": "0",
    "sign": "e0d7ea0874cd6b868b5cb740ee562f4d"
}


def record_sign(record):
    if isinstance(record, dict) is False:
        raise Exception("Invalid record!")

    record = copy.deepcopy(record)
    record["sign"] = ""
    sign_data = ""

    items = sorted(record.items(), key=lambda d: d[0])

    for it in items:
        sign_data += it[0]
        if isinstance(it[1], list):
            sign_data += ','.join(str(i) for i in it[1])
        elif isinstance(it[1], bool):
            sign_data += str(it[1]).lower()
        else:
            sign_data += str(it[1])

    sign_data = sign_data[0:len(sign_data) - 1]
    '''
    with open("record11.json", "wb") as f:
        f.write(sign_data.encode('utf8'))
        f.close()
    '''
    md = hashlib.md5()
    md.update(sign_data.encode('utf8'))
    return md.hexdigest()


def upload_sign(upload):
    if isinstance(upload, dict) is False:
        raise Exception("Invalid upload!")

    upload = copy.deepcopy(upload)
    sign_data = ""
    upload["wx_appid"] = g_wx_appid
    upload["wx_secret"] = g_wx_secret

    items = sorted(upload.items(), key=lambda d: d[0])

    for it in items:
        sign_data += it[0] + "=" + str(it[1]) + "&"

    sign_data = sign_data[0:len(sign_data) - 1]

    md = hashlib.md5()
    md.update(sign_data.encode('utf8'))
    return md.hexdigest()


def post_upload(data):
    # charset: utf-8
    # Accept-Encoding: gzip
    # referer: https://servicewechat.com/wxa2c324b63b2a9e5e/31/page-frame.html
    # content-type: application/x-www-form-urlencoded
    # User-Agent: Mozilla/5.0 (Linux; Android 9; LYA-AL10 Build/HUAWEILYA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 MicroMessenger/7.0.3.1400(0x27000338) Process/appbrand1 NetType/WIFI Language/zh_CN
    url = "https://wxwyjh.chiji-h5.com/api/archive/upload"

    headers = {
        'charset':
            'utf-8',
        'Accept-Encoding':
            'gzip',
        'content-type':
            'application/x-www-form-urlencoded',
        'User-Agent':
            'User-Agent: Mozilla/5.0 (Linux; Android 9; LYA-AL10 Build/HUAWEILYA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 MicroMessenger/7.0.3.1400(0x27000338) Process/appbrand1 NetType/WIFI Language/zh_CN'
    }

    response = requests.post(url, data=data, headers=headers)
    if response.status_code == requests.codes.ok:
        print(response.text)
        content = eval(response.text)
        if content["code"] != 0:
            raise Exception("Invalid post_upload!")


if __name__ == "__main__":
    record_org["uid"] = g_game_user_openid
    record_org["money"] = "999999999999999"
    record_org["getTime2"] = int(round(time.time() * 1000)) - 1000000
    record_org["tiLiBackTime"] = int(round(time.time() * 1000))
    record_org["sign"] = record_sign(record_org)
    print(record_org)

    upload_org["time"] = int(round(time.time() * 1000))  # 需要替换时间
    upload_org["openid"] = g_game_user_openid
    upload_org["record"] = json.dumps(record_org, sort_keys=True, separators=(',', ': '), ensure_ascii=True)
    upload_org["sign"] = upload_sign(upload_org)  # 98055fade86fadeb9cbb46ff7a23e4f5
    print(upload_org)
    '''
    with open("record22.json", "w") as f:
        a = json.dump(upload_org, f, sort_keys=True, separators=(',', ': '), ensure_ascii=True)
        f.close()
    '''
    a = json.dumps(upload_org, sort_keys=True, separators=(',', ': '), ensure_ascii=True)
    print(a)

    post_upload(a)
