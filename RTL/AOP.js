/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc AOP
 */
function AOP() {
    this._className = '';
}

AOP.prototype.after = function (property, fn) {
    var oldProperty = this[property];
    this[property] = function () {
        oldProperty.apply(this, arguments);
        return fn.apply(this, arguments);
    };
};

AOP.prototype.before = function (property, fn) {
    var oldProperty = this[property];
    this[property] = function () {
        fn.apply(this, arguments);
        return oldProperty.apply(this, arguments);
    };
};

AOP.prototype.enterMethod = function (property) { 
    var oldProperty = this[property];
    this[property] = function() {
        var fullyQualifiedMethodName = this._className + '.' + property;
        DTracer.enterMethod(fullyQualifiedMethodName);
        if (DConfig.Tracer.OutputArgs) {
            DTracer.printArguments(arguments);
        }
        return oldProperty.apply(this, arguments);
    };
};

AOP.prototype.exitMethod = function (property) { 
    var oldProperty = this[property];
    this[property] = function () {
        var fullyQualifiedMethodName = this._className + '.' + property;
        var result = oldProperty.apply(this, arguments);
        if (DConfig.Tracer.OutputReturn) {
            DTracer.printReturnValue(result);   
        }
        DTracer.exitMethod(fullyQualifiedMethodName);
        return result;
    };
};