(function () {
    'use strict';

    adsApp.factory('filterCategoryTown', filterCategoryTown);
    function filterCategoryTown() {
        var params = {};

        function filterByTown(townId) {
            params.townid = townId;
        }

        function filterByCategory(categoryId) {

            params.categoryid = categoryId;
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
            noFilter: noFilter
        }
    };
})();