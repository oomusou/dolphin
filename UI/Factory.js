/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 抽象 Factory
 */ 
function Factory() {
    this.constructors = []; 
}
 
/**
 * 取得 EventManager
 * @method 
 */
Factory.prototype.getEventManager = function () {
    throw new MethodNoImplementedException('Factory.getEventManager not implemented');
};

/**
 * 取得 ViewManager
 * @method 
 */
Factory.prototype.getViewManager = function () {
    throw new MethodNoImplementedException('Factory.getViewManager not implemented');
};