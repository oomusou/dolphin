/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc  View
 * @constructor
 * @param {string} id HTML id
 */
function View(id) {
    this.viewController = null;
    this.viewModel = null;
    Component.call(this, id);
    this.initEvents();
}

DObjUtils.inheritsFrom(View, Component);

/**
 * 初始化 View 事件
 *
 * @method
 */
View.prototype.initEvents = function() {
    this.initEvent('pageshow', this.onAfterShow);
    this.initEvent('pagebeforeshow', this.onBeforeShow);
};

/**
 * 初始化 View 事件
 *
 * @method
 * @param {string} eventId 事件編號
 * @param {function} eventHandler 事件處理函式
 */
View.prototype.initEvent = function(eventId, eventHandler) {
    $('#' + this.id).on(eventId,
        {
            executionContext: this,
            eventHandler: eventHandler
        },
        function(event) {
            event.data.eventHandler.call(event.data.executionContext, event);
        });
};

/**
 * View AfterHide
 *
 * @method
 * @param {object} event jQuery 事件物件
 */
View.prototype.onAfterHide = function(event) {
    throw new MethodNoImplementedException('View.onAfterHide not implemented!');
};

/**
 * View AfterShow
 *
 * @method
 * @param {object} event jQuery 事件物件
 */
View.prototype.onAfterShow = function(event) {
    throw new MethodNoImplementedException('View.onAfterShow not implemented!');
};

/**
 * View BeforeHide
 *
 * @method
 * @param {object} event jQuery 事件物件
 */
View.prototype.onBeforeHide = function(event) {
    throw new MethodNoImplementedException('View.onBeforeHide not implemented!');
};

/**
 * View BeforeShow
 *
 * @method
 * @param {object} event jQuery 事件物件
 */
View.prototype.onBeforeShow = function(event) {
    throw new MethodNoImplementedException('View.onBeforeShow not implemented!');
};