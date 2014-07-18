var app = angular.module('coolStuffApp',['ngRoute', 'app.directives.youtube']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    
        .when('/multimedia',
            {
                controller: 'multimedia-Controller',
                templateUrl: '/javascripts/partials/multimedia.html'
            })
        
        .when('/multimedia/:itemId',
            {
                controller: 'multimediaItem-Controller',
                templateUrl: '/javascripts/partials/multimedia-item.html'
            })
    
        .when('/technical',
            {
                controller: 'technical-Controller',
                templateUrl: '/javascripts/partials/technical.html'
            })

        .when('/technical/:itemId',
            {
                controller: 'technicalItem-Controller',
                templateUrl: '/javascripts/partials/technical-item.html'
            })
    
        .when('/about',
            {
                controller: 'about-Controller',
                templateUrl: '/javascripts/partials/about.html'
            })
        .otherwise({ redirectTo: '/' });
});