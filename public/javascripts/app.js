var app = angular.module('coolStuffApp',['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    
        .when('/multimedia',
            {
                controller: 'multimediaController',
                templateUrl: '/javascripts/partials/multimedia.html'
            })
        
        .when('/multimedia/multimedia-item',
            {
                controller: 'multimediaController',
                templateUrl: '/javascripts/partials/multimedia-item.html'
            })
    
        .when('/technical',
            {
                controller: 'technicalController',
                templateUrl: '/javascripts/partials/technical.html'
            })
    
        .when('/about',
            {
                controller: 'aboutController',
                templateUrl: '/javascripts/partials/about.html'
            })
        .otherwise({ redirectTo: '/' });
});