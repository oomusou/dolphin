/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 字串處理
 */
function StrUtils() {
}

/**
 * 格式化字串
 *
 * @method
 * @param {string} source 要格式化的字串
 * @returns {string} 格式化後的字串
 */
StrUtils.prototype.format = function(source) {
    Assert.isNotNull(source);

    var formatted = source;
    for (var i = 1; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

/**
 * 靠右對齊
 *
 * @method
 * @param {string} paddingString string
 * @param {integer} length 字串長度
 * @returns {string} result
 */
StrUtils.prototype.rightPad = function(paddingString, length) {
    Assert.isNotNull(paddingString);
    Assert.isTrue(length >= 0);

    var result = '';
    while (result.length < length) {
        result = result + paddingString;
    }
    return result;
};

/**
 *
 * @global
 */
var DStrUtils = new StrUtils();