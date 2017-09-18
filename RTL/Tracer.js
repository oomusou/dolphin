/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 追蹤器
 */
function Tracer() {
    this.callStack = [];
}

Tracer.prototype.enterMethod = function (methodName) {
    this.output(DConfig.Tracer.EnterMethodMark + methodName);
    this.callStack.push(methodName);
};

Tracer.prototype.exitMethod = function () {
    var methodName = this.callStack.pop();
    if (methodName !== null) {
        this.output(DConfig.Tracer.LeaveMethodMark + methodName);
    } else {
        console.trace();
    }
};

Tracer.prototype.output = function (message) {
    var paddingChars = this.callStack.length * DConfig.Tracer.IndentSize;
    var outputMessage = DStrUtils.rightPad(DConfig.Tracer.IndentChar, paddingChars) + message;
    console.log(outputMessage);
};

Tracer.prototype.printArguments = function(args) {
    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var text = DObjUtils.toString(arg);
        var length = DSysUtils.jsonSize(text);
        var outputText = text;
        if (length > 256) {
            outputText = '(' + length + ')';
        }
        this.output(DConfig.Tracer.ArgumentMark + DStrUtils.format('#{1}: {2}', i, outputText));
    }
};

Tracer.prototype.printReturnValue = function(value) {
    if (value === undefined) {
        this.output(DConfig.Tracer.ReturnMark + ' (void)');
    } else {
        var text = DObjUtils.toString(value);
        var length = DSysUtils.jsonSize(text);
        var outputText = text;
        if (length > DConfig.Tracer.maxOutputLineLength) {
            outputText = '(' + length + ')';
        }
        this.output(DConfig.Tracer.ReturnMark + outputText);
    }
};

/**
 * @global 
 */
var DTracer = new Tracer();