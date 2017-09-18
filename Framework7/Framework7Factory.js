/**
 * @class
 */
function Framework7Factory() {
    viewManager.call(this);
}

DObjUtils.inheritsFrom(Framework7Factory, Factory);

Framework7Factory.prototype.getEventManager = function () {
};

Framework7Factory.prototype.getViewManager = function () {
};