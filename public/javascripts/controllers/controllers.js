//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('multimedia-Controller', [ '$scope', 'multimediaFactory', function ($scope, multimediaFactory) {

    $scope.multimedia;
    $scope.searchText;
    $scope.status;
    $scope.tech = {
        "list": [
            {
                "name": "Photoshop",
                "value": "photoshop"
            },
            {
                "name": "Illustrator",
                "value": "illustrator"
            },
            {
                "name": "After Effects",
                "value": "aftereffects"
            },
            {
                "name": "Premier Pro",
                "value": "premierpro"
            },
            {
                "name": "Flash",
                "value": "flash"
            }, {
                "name": "Cinema4D",
                "value": "cinema4d"
            }, {
                "name": "All",
                "value": ""
            }
        ]
    }

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

    $scope.finder = function(tool) {
        // How can I pass this value to ItemController?
        $scope.searchText = tool;
    };

}]);

app.controller('multimediaItem-Controller', [ '$sce', '$scope', '$routeParams', 'multimediaFactory', function ($scope, $routeParams, multimediaFactory, $sce) {

    $scope.item;
    $scope.youtube;
    $scope.status;

    init();

    function init(){
        console.log("Id is " + $routeParams.itemId);
        multimediaFactory.getItem($routeParams.itemId)
            .success(function(data){
                $scope.item = data;
                $scope.youtube = $sce.trustAsResourceUrl("http://www.youtube.com/embed/jiNcFHdURjs");
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });
    }

    $scope.incrementcool = function(id){
        console.log("updating for " + id);
        multimediaFactory.updateCools(id)
            .success(function(data){
                $scope.item = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });

    }
}]);

app.controller('technical-Controller', [ '$scope', 'technicalFactory', function ($scope, technicalFactory) {

    $scope.technical;
    $scope.searchText;
    $scope.status;
    $scope.tech = {
        "list": [
            {
                "name": "Java",
                "value": "java"
            },
            {
                "name": "C#",
                "value": "c#"
            },
            {
                "name": "PHP",
                "value": "php"
            },
            {
                "name": "NodeJS",
                "value": "nodejs"
            },
            {
                "name": "Spring",
                "value": "spring"
            }, {
                "name": "AngularJS",
                "value": "angularjs"
            }, {
                "name": "HTML",
                "value": "html"
            }, {
                "name": "CSS",
                "value": "css"
            }, {
                "name": "MySql",
                "value": "mysql"
            }, {
                "name": "MongoDB",
                "value": "mongodb"
            },{
                "name": "All",
                "value": ""
            }
        ]
    }

    init();

    function init(){
        console.log("tech***************************************");
        technicalFactory.getItems()
            .success(function(data){

                $scope.technical = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });
    }

    $scope.finder = function(tool) {
        // How can I pass this value to ItemController?
        $scope.searchText = tool;
    };

}]);

app.controller('technicalItem-Controller', [ '$scope', '$routeParams', 'technicalFactory', function ($scope, $routeParams, technicalFactory) {

    $scope.item;
    $scope.status;

    init();

    function init(){
        console.log("Id is " + $routeParams.itemId);
        technicalFactory.getItem($routeParams.itemId)
            .success(function(data){
                $scope.item = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });
    }

    $scope.incrementcool = function(id){
        console.log("updating for " + id);
        technicalFactory.updateCools(id)
            .success(function(data){
                $scope.item = data;
            })
            .error(function(error){
                $scope.status = "Unable to load data!: " + error.message;
            });

    }
}]);