/**
 * @class
 * @classdesc 行動裝置工廠
 */
function MobileFactory() {
    ViewManager.call(this);
}

DObjUtils.inheritsFrom(MobileFactory, Factory);

/**
 * 取得事件管理員
 * 
 * @method 
 */
MobileFactory.prototype.getEventManager = function () {
};

/**
 * 取得 View 管理員
 * 
 * @method 
 * @returns {ViewManager} ViewManager
 */
MobileFactory.prototype.getViewManager = function () {
    var viewManager = DObjUtils.create(MobileViewManager);
    return viewManager; 
};