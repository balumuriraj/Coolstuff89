//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('multimedia-Controller', [ '$scope', 'multimediaFactory', function ($scope, multimediaFactory) {

    $scope.multimedia;
    $scope.item;
    $scope.status;

    init();

    function init(){
        multimediaFactory.getItems()
            .success(function(data){
                $scope.multimedia = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });
    }

}]);

app.controller('multimediaItem-Controller', [ '$scope', '$routeParams', 'multimediaFactory', function ($scope, $routeParams, multimediaFactory) {

    $scope.item;
    $scope.status;

    init();

    function init(){
        console.log("Id is " + $routeParams.itemId);
        multimediaFactory.getItem($routeParams.itemId)
            .success(function(data){
                $scope.item = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });
    }


}]);
