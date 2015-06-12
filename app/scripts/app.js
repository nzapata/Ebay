'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'

  ])


  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main/main.html',
        controller:'MainCtrl'
      })


    $stateProvider
      .state('ebay',{

        url:"/ebay",
        templateUrl: "views/ebay/ebay.html",
        controller:'EbayCtrl'

      })






      //.state('about',{
      //  url: '/about',
      //  templateUrl: '../views/about/create.html',
      //  controller: 'AboutCtrl'
      //
      //
      //})
  })
