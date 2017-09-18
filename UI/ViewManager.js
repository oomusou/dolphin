/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc  ViewManager
 */
function ViewManager() {
    this.views = [];
}

/**
 * 初始化 View
 * @param {class} viewClass Class of view
 * @param {string} id 編號
 * @returns {View} View
 */
ViewManager.prototype.initView = function(viewClass, id) {
    var view = DObjUtils.create(viewClass, id);
    this.views.push(view);
    return view;
};

/**
 * 顯示 View
 * @param {string} id 編號
 */
ViewManager.prototype.showView = function(id) {
    throw new MethodNoImplementedException('ViewManager.showView not implemented!');
};

/**
 * 顯示預設 View
 */
ViewManager.prototype.showDefaultPage = function() {
    if (DSysUtils.isEmpty(this.views)) {
        throw new Exception('no views defined');
    }

    var view = this.views[0];
    this.showView(view.id);
};