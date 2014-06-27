/**
 * Created by MohanRaj on 6/26/2014.
 */

//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with
//each doing the same thing just structuring the functions/data differently.

app.factory('technicalFactory', ['$http', function($http){

    var baseUrl = '/technical-api/technical';
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