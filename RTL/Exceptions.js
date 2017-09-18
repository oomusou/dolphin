/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 例外
 * @property {string} message 例外訊息
 * @param {string} message 例外訊息
 */
function Exception(message) {
    this.message = message;
}

/**
 * @class 
 * @classdesc NULL 例外
 * @param {any} message 例外訊息
 */
function NullException(message) {
    Exception.call(this, message);
}

DObjUtils.inheritsFrom(NullException, Exception); 

/**
 * @class 
 * @classdesc method未實作例外
 * @param {any} message 例外訊息
 */
function MethodNoImplementedException(message) {
    Exception.call(this, message);
}

DObjUtils.inheritsFrom(MethodNoImplementedException, Exception); 