/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc View Model
 */
function ViewModel() {
    Component.call(this);
    this.initializeComponents();
}

DObjUtils.inheritsFrom(ViewModel, Component);

/**
 * 初始化元件
 * 
 * @method 
 */
ViewModel.prototype.initializeComponents = function () {
    throw new MethodNoImplementedException('ViewModel.initializeComponents not implemented!');
};