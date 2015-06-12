


angular.module('testApp').factory('eSearch', ['$http',
  function ($http){




    return {
      eSearch: function (search) {

        var URL = "http://svcs.ebay.com/services/search/FindingService/v1" +
          "?OPERATION-NAME=findItemsByKeywords" +
          "&SERVICE-VERSION=1.0.13" +
          "&SECURITY-APPNAME=Nathanie-9644-45e8-9fa9-d0d7b417b3bb" +
          "&GLOBAL-ID=EBAY-US" +
          "&RESPONSE-DATA-FORMAT=JSON" +
          "&callback=angular.callbacks._0" +
          "&REST-PAYLOAD" +
          "&keywords=" + search +
          "&paginationInput.entriesPerPage=30"


        return $http.jsonp(URL);

      }
    }
  }]);

