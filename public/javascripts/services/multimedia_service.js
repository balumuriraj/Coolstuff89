//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with
//each doing the same thing just structuring the functions/data differently.

app.factory('multimediaFactory', ['$http', function($http){

    var baseUrl = '/api/multimedia';
    var factory = {};

    factory.getItems = function() {
        return $http.get(baseUrl);
    }

    factory.getItem = function(id) {
        return $http.get(baseUrl + '/' + id);
    }

    factory.updateCools = function(id) {
        return $http.put(baseUrl + '/' + id);
    }

    return factory;
}]);