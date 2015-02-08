(function () {
    'use strict';

    adsApp.factory('filterCategoryTown', filterCategoryTown);
    function filterCategoryTown() {
        var params = {};

        function filterByTown(townId) {
            if (params.townid === townId) {
                delete params.townid;
            } else {
                params.townid = townId;
            }
        }

        function filterByCategory(categoryId) {
            if (params.categoryid === categoryId) {
                delete params.categoryid;
            } else {
                if (params.startpage!==1 ) {
                    params.startpage=1;
                }
                params.categoryid = categoryId;
            }
        }

        function getFilterParams() {
            return params;
        }

        return {
            filterByTown: filterByTown,
            filterByCategory: filterByCategory,
            getFilterParams: getFilterParams
        }
    };
})();