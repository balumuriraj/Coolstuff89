//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('multimediaController', function ($scope, $http, multimediaService) {

    init();

    function init() {
        $scope.multimedia = multimediaService.getMedia();
    }
    
    $http.get('https://gdata.youtube.com/feeds/api/videos/jiNcFHdURjs?v=2&alt=json').
        success(function(data) {
            $scope.youtube = data;
        });

});
