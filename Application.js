/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 應用程式
 */
function Application() {
    this.pages = [];
    this.factory = null;
    this.viewManager = null;
}

/**
 * 初始化
 * @method
 * @returns {void}
 */
Application.prototype.initialize = function () {
    var factoryClassName = DConfig.System.UiFramework + 'Factory';
    this.factory = DObjUtils.instantiate(factoryClassName);
    this.viewManager = this.factory.getViewManager();
};

/**
 * 執行應用程式
 * @method
 * @returns {void}
 */
Application.prototype.run = function () {
    this.viewManager.showDefaultPage();
};
 
/**
 * 註冊頁面
 * @method
 * @param {string} viewClass class of page
 * @param {string} id HTML id
 * @returns {void}
 */
Application.prototype.initView = function (viewClass, id) {
    this.viewManager.initView(viewClass, id);
};

/**
 * @global 
 */
var DolphinApplication = DObjUtils.create(Application); 