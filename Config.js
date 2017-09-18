/**
 * @copyright Leo Shiang 2017 <leoshiang@gmail.com>
 * MIT Licensed
 * @global
 */
var DConfig = {
    /** 
     * 系統相關設定
     */
    System: {
        /**
         * 應用程式類別名稱
         */
        UiFramework: 'Mobile'
    },
    /**
     * 追蹤器相關設定
     */
    Tracer: {
        OutputArgs: true,
        OutputReturn: true,

        /**
          * 參數顯示標記
          */
        ArgumentMark: '>> ',

        /**
         * 函數回傳標記
         */
        ReturnMark: '<< ',

        /**
         * 每行輸出最大長度
         */
        maxOutputLineLength: 256,

        /**
         * 進入 method 的標記
         */
        EnterMethodMark: '==> ',

        /**
         * 離開 method 的標記
         */
        LeaveMethodMark: '<== ',

        /**
         * 縮排大小
         */
        IndentSize: 3,

        /**
         * 縮排字元
         */
        IndentChar: ' ',

        /**
         * 追蹤器是否啟用。True = 啟用，False = 不啟用。
         */
        Enabled: true,

        /**
         * 要被追蹤的類別名稱。如果設定 * ，則所有透過 DObject.create 產生的物件都會被追蹤。
         */
        IncludedClasses: [
            '*'
        ]
    }
};