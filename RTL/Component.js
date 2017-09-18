/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @class
 * @classdesc 元件
 * @property {string} id 編號
 * @property {Component[]} components 此元件所包含的子元件
 * @property {Component} parent 父元件
 * @param {string} id HTML id
 */
function Component(id) {
    this.id = id;
    this.components = [];
    this.parent = null;
}

/**
 * 加入元件
 * @method
 * @param {Component} component 要加入的元件
 * @returns {Component} 已加入的元件
 * @throws {NullException}
 */
Component.prototype.addComponent = function (component) {
    if (DSysUtils.isNull(component)) {
        throw new NullException();
    }

    if (!(component instanceof Component)) {
        throw Exception('only component can be added.');
    }

    Assert.isNotNull(this.components);
    this.components.push(component);
    return component;
};

/**
 * 事件處理
 * @method
 * @param {string} event 事件名稱
 */
Component.prototype.processEvent = function (event) {
    Assert.isNotNull(event);
    var method = this[event];
    if (DSysUtils.isNull(method)) {
        throw new NullException();
    }

    try {
        method.apply(this);
    } catch (exception) {
        console.log(exception);
    }
};

/**
 * 移除元件
 * @param {Component} component 要移除的元件
 */
Component.prototype.removeComponent = function (component) {
    if (DSysUtils.isNull(component)) {
        return;
    }

    this.components = this.components.filter(function (item) {
        Assert.isNotNull(item);
        return item !== component;
    });
};

/**
 * 設定父元件
 * @param {newParent} parent 父元件
 * @throws {NullException}
 */
Component.prototype.setParent = function (parent) {
    if (DSysUtils.isNull(parent)) {
        throw new NullException();
    }

    if (!(parent instanceof Component)) {
        throw Exception('only component can be set as parent.');
    }

    if (DSysUtils.isNotNull(this.parent)) {
        this.parent.removeComponent(this);
    }

    parent.addComponent(this);
    this.parent = parent;
};