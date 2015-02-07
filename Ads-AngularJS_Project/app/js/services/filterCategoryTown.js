(function () {
    'use strict';

    adsApp.factory('filterCategoryTown', filterCategoryTown);
    function filterCategoryTown() {
        var params = {};

        function filterByTown(townId) {
            if (params.townid && params.townid === townId) {
                delete params.townid;
            } else {
                params.townid = townId;
            }

        }

        function filterByCategory(categoryId) {
            if (params.categoryid && params.categoryid === categoryId) {
                delete params.categoryid;
            } else {
                params.categoryid = categoryId;
            }
        }

        function getFilterParams() {
            return params;
        }

        function noFilter() {
            params = {};
        }

        return {
            filterByTown: filterByTown,
            filterByCategory: filterByCategory,
            getFilterParams: getFilterParams,
            noFilter: noFilter,
        }
    };
})();