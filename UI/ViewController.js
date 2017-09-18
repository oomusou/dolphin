/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 
 * @param {View} view View
 * @param {ViewModel} viewModel View Model
 */
function ViewController(view, viewModel) {
    this.view = view;
    this.viewModel = viewModel;
    this.bindEvents();
}

/**
 * 繫結事件
 * 
 * @method 
 */
ViewController.prototype.bindEvents = function() {
    throw new MethodNoImplementedException('ViewController.bindEvents not implemented!');
};

/**
 * 繫結 Click 事件
 *
 * @method
 * @param {Component} component Component
 * @param {string} eventName eventName
 * @param {string} eventId 事件 Id
 */
ViewController.prototype.bindEvent = function (component, eventName, eventHandler) {
    Assert.isNotNull(component);
    Assert.isTrue(DSysUtils.isNotEmpty(eventName));
    Assert.isNotNull(eventHandler);

    $('#' + component.id).on(eventName,
        {
            executionContext: this,
            eventHandler: eventHandler
        },
        function (event) {
            Assert.isNotNull(event.data);
            var executionContext = event.data.executionContext;
            var eventHandler = event.data.eventHandler;

            Assert.isNotNull(executionContext);
            Assert.isNotNull(eventHandler);

            eventHandler.call(executionContext, event);
        });
};