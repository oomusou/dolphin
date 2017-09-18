/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 物件公用程式
 */
function ObjUtils() {
    this.registeredClasses = [];
}

/**
 * 建立類別的物件
 * @param {class} objectClass 物件類別
 * @returns {Object} 物件
 */
ObjUtils.prototype.create = function(objectClass) {
    Assert.isNotNull(objectClass);

    var instance = new (Function.prototype.bind.apply(objectClass, arguments));
    instance._className = objectClass.name;

    if (!this.isClassTraceable(instance._className)) {
        return instance;
    }

    // 複製 AOP 的原型
    this.traceObject(instance, AOP.prototype);

    // 替換物件原本所有的 method
    for (var key in instance) {
        var method = instance[key];
        if (method instanceof Function || method === this) {
            // 如果此 method 是可以追蹤的
            if (this.isMethodTraceable(key)) {
                // 攔截 method 進出
                instance.enterMethod(key);
                instance.exitMethod(key);
            }
        }
    }

    // 回傳建立的物件
    return instance;
};

/**
 * 物件繼承
 * @param {class} child 子類別
 * @param {class} parent 父類別
 */
ObjUtils.prototype.inheritsFrom = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
    this.registerClass(child);
};

/**
 * 判斷類別是否可以被追蹤
 * @param {string} className 類別名稱
 * @returns {boolean} True|False
 */
ObjUtils.prototype.isClassTraceable = function(className) {
    // 檢查系統設定是否正常
    if (DSysUtils.isNull(DConfig.Tracer.IncludedClasses)) {
        throw NullException('DConfig.Tracer.IncludedClasses is null');
    }

    // 如果 IncludedClasses 設定為 * 代表全部類別都要追蹤
    if (DConfig.Tracer.IncludedClasses.length === 1) {
        if (DConfig.Tracer.IncludedClasses[0] === '*') {
            return true;
        }
    }

    // 如果有指定類別名稱，代表可以追蹤
    return DConfig.Tracer.IncludedClasses.indexOf(className) >= 0;
};
/**
 * 判斷 method 是否可以被追蹤
 * @param {string} methodName method 名稱
 * @returns {boolean} True|False
 */
ObjUtils.prototype.isMethodTraceable = function(methodName) {
    return methodName !== 'exitMethod' &&
        methodName !== 'enterMethod' &&
        methodName !== 'before' &&
        methodName !== 'after' &&
        methodName !== 'prototype';
};

/**
 * 根據類別名稱建立物件
 * @param {string} className 類別名稱
 * @returns {object} 物件
 * @throws {Exception}
 */
ObjUtils.prototype.instantiate = function(className) {
    var aClass = this.registeredClasses[className];
    if (DSysUtils.isNull(aClass)) {
        throw Exception('class ' + className + ' not registered');
    }
    return DObjUtils.create(aClass);
};

/**
 * 註冊類別
 * @param {class} objectClass 類別
 */
ObjUtils.prototype.registerClass = function(objectClass) {
    var className = objectClass.name;
    this.registeredClasses[className] = objectClass;
};

/**
 * 將物件轉成字串表示式
 * @method
 * @param {Object} object 物件
 * @returns {string} 字串表示式
 */
ObjUtils.prototype.toString = function(object) {
    var type = typeof object;

    if (object instanceof Function) {
        return 'function: ' + object.name;
    }

    if (type === 'object') {
        return 'object: ' + JSON.stringify(object);
    }

    if (type === 'undefined') {
        return 'undefined';
    }

    if (type === 'boolean') {
        return 'boolean: ' + object;
    }

    if (type === 'string') {
        return 'string:\'' + object + '\'';
    }

    if (type === 'number') {
        return 'number: ' + object;
    }
    if (object === undefined) {
        return 'undefined';
    }

    if (object === null) {
        return 'null';
    }

    if (object instanceof Array) {
        return 'array[' + object.length + ']';
    }

    return 'unknown';
};

/**
 * 追蹤物件
 * @param {object} target 要被追蹤的物件
 * @returns {object} 加上追蹤功能的物件
 */
ObjUtils.prototype.traceObject = function(target) {
    if (DSysUtils.isEmpty(target)) {
        throw DStrUtils.format('invalid parameter: target');
    }

    var to = Object(target);
    for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
            continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(nextSource);
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
                to[nextKey] = nextSource[nextKey];
            }
        }
    }
    return to;
};

/**
 * @global 
 */
var DObjUtils = new ObjUtils();