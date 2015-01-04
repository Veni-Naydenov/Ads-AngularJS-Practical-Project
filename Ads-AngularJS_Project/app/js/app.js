'use strict';

var adsApp = angular
    .module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/templates/homeView.html',
                controller: 'HomeController'
            })
            .when('/login', {
               // templateUrl: 'views/templates/login.html',
                controller: ''
            })
            .when('/register', {
               // templateUrl: 'views/templates/register.html',
                controller: ''
            })

            .otherwise({redirectTo: '/home'});
    })
