/**
 * Created by nathanielz on 6/12/2015.
 */
(function(){
  'use strict';

  angular.module('testApp')
    .controller('EbayCtrl', ['$scope', '$http','eSearch', function ($scope,$http,eSearch) {

      $scope.h = function(search) {

        eSearch.eSearch(search)
          .success(function(data) {
            $scope.jsonObject = data;
            $scope.items = data.findItemsByKeywordsResponse[0].searchResult[0].item || [];


          });

      }





    }])







}());
