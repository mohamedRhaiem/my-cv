console.log('Loading controllers.js');

var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('bodyCtrl', function ($scope, $http) {
    $http.get('data.json').success(function(data) {
        $scope.resume = data;
    });

    $scope.current_date = Date.now();
});

resumeControllers.controller('headerCtrl', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
        $scope.name = data.personal.name;
    });
});