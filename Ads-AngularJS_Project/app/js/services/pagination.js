/*
(function () {
    'use strict';

    adsApp.factory('pagination', pagination);
    function pagination() {
        // adsData.$inject = [];
        var currentPage = 1;
        var pagesize = 5;

        var pageParams = {
            pagesize: pagesize,
            startpage: currentPage
        }

        function getPageParams() {
            return pageParams;
        }

        function setStartPage(page) {
            pageParams.startpage = page;
        }


        return {
            setStartPage: setStartPage,
            getPageParams: getPageParams

        }
    };
})();*/
