(function () {
    'use strict';

    adsApp.factory('notifier', notifier);
    function notifier(toastr) {
        notifier.$inject = ['toastr'];

        toastr.options = {
            "positionClass": "toast-top-right",
            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true
        }

        return {
            success: function (msg) {
                toastr.success(msg);
            },
            error: function (msg) {
                toastr.error(msg);
            }
        }
    };
})();