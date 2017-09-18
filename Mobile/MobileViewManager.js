/**
 * @class
 */
function MobileViewManager() {
    ViewManager.call(this);
}

DObjUtils.inheritsFrom(MobileViewManager, ViewManager);

/**
 * 顯示 View
 * 
 * @method 
 * @param {string} id HTML id
 */
MobileViewManager.prototype.showView = function(id) {
    $.mobile.pageContainer.pagecontainer('change',
        '#' + id,
        {
            reverse: false,
            changeHash: false 
        });
};