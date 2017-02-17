'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
    .module('movieApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'loginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/views/main.html',
                controller: 'mainCtrl'
            })
        .state('browse', {
            url: '/browse',
            templateUrl: '/views/browse.html',
            controller: 'browseCtrl'
        });
$locationProvider.html5Mode({
    enabled:true,
    requireBase:true,
    rewriteLinks:false
})


    });
