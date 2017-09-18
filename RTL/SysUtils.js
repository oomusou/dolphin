/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 公用函式
 */
function SysUtils() {
}

/**
 * 判斷物件是否為空值
 *
 * @method
 * @param {object} target 要判斷的物件，可以傳入任何物件。
 * @returns {boolean} true = 為空值， false = 不是空值
 */
SysUtils.prototype.isEmpty = function(target) {
    var type = typeof target;

    if (type === 'undefined') {
        return true;
    }

    if (type === 'boolean') {
        return !target;
    }

    if (target === null) {
        return true;
    }

    if (target === undefined) {
        return true;
    }

    if (target instanceof Array) {
        if (target.length < 1) {
            return true;
        }
    } else if (type === 'string') {
        if (target.length < 1) {
            return true;
        }
        if (target === '0') {
            return true;
        }
    } else if (type === 'object') {
        if (Object.keys(target).length < 1) {
            return true;
        }
    } else if (type === 'number') {
        if (target === 0) {
            return true;
        }
    }

    return false;
};

/**
 * 判斷物件是否不為空值
 *
 * @method
 * @param {object} target 要判斷的物件，可以傳入任何物件。
 * @returns {boolean} true = 不為空值， false = 是空值
 */
SysUtils.prototype.isNotEmpty = function (target) {
    return !this.isEmpty(target);
}

/**
 * 判斷物件是否為 null
 *
 * @method
 * @param {object} target 要判斷的物件
 * @returns {boolean} True|False
 */
SysUtils.prototype.isNull = function(target) {
    return target === undefined || target === null;
};

/**
 * 判斷物件是否不為 null
 *
 * @method
 * @param {object} target 要判斷的物件
 * @returns {boolean} True|False
 */
SysUtils.prototype.isNotNull = function(target) {
    return target !== undefined && target !== null;
};

/**
 * 取得物件轉成 JSON 字串之後的大小
 * @param {object} object 物件
 * @returns {integer} JSON 字串長度
 */
SysUtils.prototype.jsonSize = function(object) {
    Assert.isNotNull(object);

    if (this.isEmpty(object)) {
        return 0;
    } 

    var json = JSON.stringify(object);
    return json.length;
};

var DSysUtils = new SysUtils();
var Assert = chai.assert;